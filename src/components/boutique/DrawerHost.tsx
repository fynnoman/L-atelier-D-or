"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useBoutique } from "@/lib/boutique/BoutiqueProvider";
import PanierDrawer from "./PanierDrawer";
import CabinetDrawer from "./CabinetDrawer";
import RechercheOverlay from "./RechercheOverlay";
import EssaiOverlay from "./EssaiOverlay";

export default function DrawerHost() {
  const { drawer, closeDrawer } = useBoutique();

  const isSideSheet = drawer === "panier" || drawer === "cabinet";
  const isOverlay = drawer === "recherche" || drawer === "essai";

  return (
    <AnimatePresence>
      {drawer !== null && (
        <motion.div
          key="drawer-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[94]"
          style={{
            background: isSideSheet
              ? "rgba(10,8,6,0.42)"
              : "rgba(10,8,6,0.72)",
            backdropFilter: isOverlay ? "blur(10px)" : "blur(2px)",
          }}
          onClick={closeDrawer}
        >
          {drawer === "panier" && <PanierDrawer />}
          {drawer === "cabinet" && <CabinetDrawer />}
          {drawer === "recherche" && <RechercheOverlay />}
          {drawer === "essai" && <EssaiOverlay />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
