"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import type { CabinetItem, CartItem, DrawerId, Engraving } from "./types";

const CART_KEY = "lad:cart:v1";
const CABINET_KEY = "lad:cabinet:v1";
const EDITION_COUNTER_KEY = "lad:edition-counter:v1";

type State = {
  cart: CartItem[];
  cabinet: CabinetItem[];
};

type Action =
  | { type: "hydrate"; payload: State }
  | { type: "cart:add"; item: CartItem }
  | { type: "cart:remove"; id: string }
  | { type: "cart:clear" }
  | { type: "cabinet:toggle"; item: CabinetItem }
  | { type: "cabinet:remove"; slug: string }
  | { type: "cabinet:clear" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "hydrate":
      return action.payload;
    case "cart:add":
      return { ...state, cart: [...state.cart, action.item] };
    case "cart:remove":
      return { ...state, cart: state.cart.filter((c) => c.id !== action.id) };
    case "cart:clear":
      return { ...state, cart: [] };
    case "cabinet:toggle": {
      const exists = state.cabinet.find((c) => c.slug === action.item.slug);
      return {
        ...state,
        cabinet: exists
          ? state.cabinet.filter((c) => c.slug !== action.item.slug)
          : [action.item, ...state.cabinet],
      };
    }
    case "cabinet:remove":
      return {
        ...state,
        cabinet: state.cabinet.filter((c) => c.slug !== action.slug),
      };
    case "cabinet:clear":
      return { ...state, cabinet: [] };
    default:
      return state;
  }
}

type Ctx = {
  cart: CartItem[];
  cabinet: CabinetItem[];
  drawer: DrawerId;
  hydrated: boolean;
  openDrawer: (id: DrawerId) => void;
  closeDrawer: () => void;
  addToCart: (input: Omit<CartItem, "id" | "editionNumber" | "addedAt">) => CartItem;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  toggleCabinet: (input: Omit<CabinetItem, "savedAt">) => void;
  isInCabinet: (slug: string) => boolean;
  removeFromCabinet: (slug: string) => void;
  clearCabinet: () => void;
  subtotal: number;
  cartCount: number;
  cabinetCount: number;
  formatCurrency: (value: number) => string;
};

const BoutiqueCtx = createContext<Ctx | null>(null);

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function nextEditionNumber(): number {
  if (typeof window === "undefined") return 1;
  const current = parseInt(localStorage.getItem(EDITION_COUNTER_KEY) ?? "0", 10);
  const next = Number.isFinite(current) ? current + 1 : 1;
  localStorage.setItem(EDITION_COUNTER_KEY, String(next));
  return next;
}

export function BoutiqueProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { cart: [], cabinet: [] });
  const [drawer, setDrawer] = useState<DrawerId>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const payload: State = {
      cart: safeParse<CartItem[]>(localStorage.getItem(CART_KEY), []),
      cabinet: safeParse<CabinetItem[]>(
        localStorage.getItem(CABINET_KEY),
        [],
      ),
    };
    dispatch({ type: "hydrate", payload });
    // Hydration flag flip is intentional  first client-only render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(CART_KEY, JSON.stringify(state.cart));
  }, [state.cart, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(CABINET_KEY, JSON.stringify(state.cabinet));
  }, [state.cabinet, hydrated]);

  useEffect(() => {
    if (drawer === null) {
      document.documentElement.style.overflow = "";
    } else {
      document.documentElement.style.overflow = "hidden";
    }
  }, [drawer]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && drawer !== null) setDrawer(null);
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setDrawer((d) => (d === "recherche" ? null : "recherche"));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawer]);

  const openDrawer = useCallback((id: DrawerId) => setDrawer(id), []);
  const closeDrawer = useCallback(() => setDrawer(null), []);

  const addToCart = useCallback<Ctx["addToCart"]>((input) => {
    const item: CartItem = {
      ...input,
      id:
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `ci_${Math.random().toString(36).slice(2)}_${Date.now()}`,
      editionNumber: nextEditionNumber(),
      addedAt: Date.now(),
    };
    dispatch({ type: "cart:add", item });
    return item;
  }, []);

  const removeFromCart = useCallback((id: string) => {
    dispatch({ type: "cart:remove", id });
  }, []);

  const clearCart = useCallback(() => dispatch({ type: "cart:clear" }), []);

  const toggleCabinet = useCallback<Ctx["toggleCabinet"]>((input) => {
    dispatch({
      type: "cabinet:toggle",
      item: { ...input, savedAt: Date.now() },
    });
  }, []);

  const isInCabinet = useCallback(
    (slug: string) => state.cabinet.some((c) => c.slug === slug),
    [state.cabinet],
  );

  const removeFromCabinet = useCallback((slug: string) => {
    dispatch({ type: "cabinet:remove", slug });
  }, []);

  const clearCabinet = useCallback(() => dispatch({ type: "cabinet:clear" }), []);

  const subtotal = useMemo(
    () => state.cart.reduce((sum, item) => sum + item.priceValue, 0),
    [state.cart],
  );

  const formatCurrency = useCallback((value: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      cart: state.cart,
      cabinet: state.cabinet,
      drawer,
      hydrated,
      openDrawer,
      closeDrawer,
      addToCart,
      removeFromCart,
      clearCart,
      toggleCabinet,
      isInCabinet,
      removeFromCabinet,
      clearCabinet,
      subtotal,
      cartCount: state.cart.length,
      cabinetCount: state.cabinet.length,
      formatCurrency,
    }),
    [
      state.cart,
      state.cabinet,
      drawer,
      hydrated,
      openDrawer,
      closeDrawer,
      addToCart,
      removeFromCart,
      clearCart,
      toggleCabinet,
      isInCabinet,
      removeFromCabinet,
      clearCabinet,
      subtotal,
      formatCurrency,
    ],
  );

  return <BoutiqueCtx.Provider value={value}>{children}</BoutiqueCtx.Provider>;
}

export function useBoutique() {
  const ctx = useContext(BoutiqueCtx);
  if (!ctx) throw new Error("useBoutique must be used within BoutiqueProvider");
  return ctx;
}

export type { Engraving };
