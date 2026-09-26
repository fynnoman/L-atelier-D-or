import type { Locale } from "./LanguageContext";

export type Dictionary = {
  common: {
    editionBreve: string;
    numeroteeALaMain: string;
    petiteMaison: string;
    ventEnLigne: string;
    voir: string;
    voirLaPiece: string;
    voirLaCollection: string;
    toutLaCollection: string;
    conseillez: string;
    ecrireLaMaison: string;
    lAtelier: string;
    decouvrirLAtelier: string;
    defiler: string;
    passerIntro: string;
    menu: string;
    ouvrirMenu: string;
    fermerMenu: string;
    skipToContent: string;
    voyezLeMonde1: string;
    voyezLeMonde2: string;
    quatrePiecesParAn: string;
    editionBreveDescription: string;
    edition: string;
    numeral: string;
    pageOf: (n: number) => string;
    remisNumeroteALaMain: string;
  };
  nav: {
    edition: string;
    collection: string;
    atelier: string;
    journal: string;
    avis: string;
    questions: string;
    conseil: string;
    maisonEyebrow: string;
    contactEyebrow: string;
    houseIntro: string;
    contactWriteUs: string;
    ctaCollection: string;
  };
  footer: {
    petiteMaisonFr: string;
    ligne1: string;
    ligne2: string;
    columnMaison: string;
    columnCollection: string;
    columnMentions: string;
    labelPremiereCollection: string;
    labelMentionsLegales: string;
    labelConfidentialite: string;
    labelAccessibilite: string;
    copyright: string;
    editorialTag: string;
    editorialTag2: string;
  };
  newsletter: {
    label: string;
    description: string;
    placeholder: string;
    submit: string;
    formAria: string;
    submitting: string;
    ok: string;
    errorEmpty: string;
    errorSetup: string;
    thanks: string;
    errorNet: string;
  };
  home: {
    hero: {
      eyebrow: string;
      title1: string;
      title2: string;
      lede: string;
      ctaCollection: string;
      ctaConseil: string;
      ctaAtelier: string;
      scroll: string;
      edition: string;
    };
    showcase: {
      eyebrow: string;
      title1: string;
      title2: string;
      lede: string;
      piece: string;
      footerLine: string;
      link: string;
    };
    alternating: {
      voirLaPiece: string;
    };
    avisTeaser: {
      eyebrow: string;
      title1: string;
      title2: string;
      body: string;
      ctaShare: string;
      ctaSee: string;
    };
    endCall: {
      eyebrow: string;
      line1: string;
      line2: string;
      body: string;
      ctaCollection: string;
      ctaAtelier: string;
    };
  };
  collectionIndex: {
    metaTitle: string;
    metaDescription: string;
    breadcrumbHome: string;
    breadcrumbCollection: string;
    eyebrowNumeral: string;
    eyebrowLabel: string;
    title: string[];
    lede: string;
    subtitles: string;
    subtitles2: string;
    editorialTitle1: string;
    editorialTitle2: string;
    editorialBody: string;
    editorialCta: string;
  };
  piece: {
    metaDescriptionSuffix: (name: string, price: string) => string;
    chapterPrefix: string;
    theLieu: string;
    theHeure: string;
    silhouette: string;
    section1Eyebrow: string;
    section1Label: string;
    section2Eyebrow: string;
    section2Label: string;
    section2Title1: string;
    section2Title2: string;
    section2Body: string;
    noteLabel: (n: number) => string;
    lireQuatreAtmospheres: string;
    section3Eyebrow: string;
    section3Label: string;
    prixParPiece: string;
    niPlusNiMoins: string;
    editionBreveBody: string;
    twoWays: string;
    way1Title: string;
    way1Body: string;
    way2Title: string;
    way2Body: string;
    ctaCollection: string;
    ctaEcrire: string;
    section4Eyebrow: string;
    section4Label: string;
    othersPieces: string;
  };
  atelier: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrowNum: string;
    heroEyebrowLabel: string;
    heroTitle1: string;
    heroTitle2: string;
    heroLede: string;
    houseEyebrow: string;
    houseBody: string;
    editionEyebrow: string;
    editionBody: string;
    ruleEyebrow: string;
    ruleQuote: string;
    section1Eyebrow: string;
    section1Label: string;
    section1Title1: string;
    section1Title2: string;
    section1Body: string;
    gestes: { n: string; label: string }[];
    gesteWord: string;
    piece4Body: string;
    section2Eyebrow: string;
    section2Label: string;
    section2Title1: string;
    section2Title2: string;
    section2Body: string;
    principles: { t: string; b: string }[];
    principleWord: string;
    ctaTitle1: string;
    ctaTitle2: string;
    ctaBody: string;
    cta: string;
  };
  avis: {
    metaTitle: string;
    metaDescription: string;
    eyebrowNum: string;
    eyebrowLabel: string;
    title1: string;
    title2: string;
    lede: string;
    testimonial: (n: number) => string;
    bientot: string;
    aParaitre: string;
    ariaLabel: string;
    ctaBody: string;
    cta: string;
  };
  faq: {
    metaTitle: string;
    metaDescription: string;
    eyebrowNum: string;
    eyebrowLabel: string;
    title1: string;
    title2: string;
    lede: string;
    footerBody: string;
    footerCta: string;
    pending: string;
    sections: {
      title: string;
      eyebrow: string;
      qas: { q: string; a: string; link?: { text: string; before?: string; after?: string; href: string }; pending?: boolean }[];
    }[];
  };
  conseil: {
    metaTitle: string;
    metaDescription: string;
    eyebrowNum: string;
    eyebrowLabel: string;
    title1: string;
    title2: string;
    lede: string;
    captionA: string;
    captionB: string;
    openLabel: string;
    openAria: string;
    lidLine1: string;
    lidLine2: string;
    baseSignature: string;
    cardBrand: string;
    cardNumber: string;
    cardHeader: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    privacyLink: string;
    submit: string;
    submitting: string;
    thanksTitle: string;
    thanksBody: string;
    emailTitle: string;
    emailBody1: string;
    emailBody2: string;
    emailBackToCard: string;
    emailStowCard: string;
    footnoteA: string;
    footnoteB: string;
    errorEmpty: string;
    errorSetup: string;
    errorSend: string;
    pocket: string;
    noscriptWrite: string;
  };
  journal: {
    metaTitle: string;
    metaDescription: string;
    eyebrowNum: string;
    eyebrowLabel: string;
    title1: string;
    title2: string;
    title3: string;
    lede: string;
    readCahier: string;
  };
  cahier: {
    labelChapter: (numeral: string) => string;
    signatureSuffix: string;
    piecesEyebrowNum: string;
    piecesEyebrowLabel: string;
    othersEyebrowNum: string;
    othersEyebrowLabel: string;
    cahierN: (n: string) => string;
  };
  legal: {
    articleWord: string;
    mentions: {
      metaTitle: string;
      metaDescription: string;
      numeral: string;
      rubric: string;
      title: string;
      chapo: string;
      sections: { title: string; body: string[] }[];
    };
    privacy: {
      metaTitle: string;
      metaDescription: string;
      numeral: string;
      rubric: string;
      title: string;
      chapo: string;
      sections: { title: string; body: string[] }[];
    };
    a11y: {
      metaTitle: string;
      metaDescription: string;
      numeral: string;
      rubric: string;
      title: string;
      chapo: string;
      sections: { title: string; body: string[] }[];
    };
  };
  pieceSwitcher: {
    label: string;
    aria: (name: string) => string;
  };
  pieces: {
    [slug: string]: {
      tagline: string;
      chapter: string;
      place: string;
      time: string;
      silhouette: string;
      materie: string;
      details: string[];
      notes: string[];
      scene: string;
      teintes: { name: string }[];
    };
  };
  cahiers: {
    [slug: string]: {
      rubric: string;
      title: string;
      chapo: string;
      read: string;
      date: string;
      body: string[];
    };
  };
  langSwitcher: {
    label: string;
    fr: string;
    de: string;
  };
};

const fr: Dictionary = {
  common: {
    editionBreve: "Édition brève",
    numeroteeALaMain: "Numérotée à la main",
    petiteMaison: "Petite maison française",
    ventEnLigne: "Vente en ligne uniquement.",
    voir: "Voir",
    voirLaPiece: "Voir la pièce",
    voirLaCollection: "Voir la collection",
    toutLaCollection: "Toute la collection",
    conseillez: "Conseillez-moi",
    ecrireLaMaison: "Écrire à la maison",
    lAtelier: "L’Atelier",
    decouvrirLAtelier: "Découvrir l’atelier",
    defiler: "Défiler",
    passerIntro: "Passer l’intro",
    menu: "Menu",
    ouvrirMenu: "Ouvrir le menu",
    fermerMenu: "Fermer le menu",
    skipToContent: "Aller au contenu",
    voyezLeMonde1: "Voyez le monde",
    voyezLeMonde2: "à votre dimension.",
    quatrePiecesParAn: "Quatre pièces par an. Édition brève,",
    editionBreveDescription: "numérotée à la main.",
    edition: "Édition brève",
    numeral: "Numéral",
    pageOf: (n) => `Page ${n}`,
    remisNumeroteALaMain: "Édition brève · Numérotée à la main",
  },
  nav: {
    edition: "Édition brève",
    collection: "Collection",
    atelier: "Atelier",
    journal: "Journal",
    avis: "Avis",
    questions: "Questions",
    conseil: "Conseil",
    maisonEyebrow: "Maison",
    contactEyebrow: "Contact",
    houseIntro: "Édition brève.\nVente en ligne uniquement.",
    contactWriteUs: "Nous écrire",
    ctaCollection: "Voir la collection",
  },
  footer: {
    petiteMaisonFr: "Une petite maison française",
    ligne1: "Petite maison française de lunetterie.",
    ligne2: "Édition brève, vente en ligne.",
    columnMaison: "Maison",
    columnCollection: "Collection",
    columnMentions: "Mentions",
    labelPremiereCollection: "Première Collection",
    labelMentionsLegales: "Mentions légales",
    labelConfidentialite: "Confidentialité",
    labelAccessibilite: "Accessibilité",
    copyright: "© L’Atelier d’Or · Édition brève, numérotée à la main",
    editorialTag: "Une petite maison française",
    editorialTag2: "Édition brève",
  },
  newsletter: {
    label: "La lettre de la maison",
    description:
      "Une à deux fois par saison. Nouvelle pièce, cahier, silence. Rien de plus.",
    placeholder: "votre@email.com",
    submit: "S’inscrire",
    formAria: "Inscription à la lettre de la maison",
    submitting: "…",
    ok: "✓",
    errorEmpty: "Une adresse valide, s’il vous plaît.",
    errorSetup: "L’inscription est en cours d’installation.",
    thanks: "Merci. Vous êtes inscrit·e.",
    errorNet: "Inscription non enregistrée. Réessayez plus tard.",
  },
  home: {
    hero: {
      eyebrow: "Roi · Première Édition",
      title1: "Voyez le monde",
      title2: "à votre dimension.",
      lede: "Quatre pièces par an. Édition brève, numérotée à la main.",
      ctaCollection: "Voir la collection",
      ctaConseil: "Conseillez-moi",
      ctaAtelier: "L’Atelier",
      scroll: "Défiler",
      edition: "Édition brève",
    },
    showcase: {
      eyebrow: "Première Collection",
      title1: "Roi.",
      title2: "Quatre pièces, un seul regard.",
      lede: "Quatre atmosphères, quatre heures, quatre manières d’entrer dans une pièce. 78,90 € l’exemplaire, numérotée à la main.",
      piece: "Pièce",
      footerLine: "Édition brève · Numérotée à la main",
      link: "Toute la collection",
    },
    alternating: {
      voirLaPiece: "Voir la pièce",
    },
    avisTeaser: {
      eyebrow: "Avis",
      title1: "Vous portez Roi ?",
      title2: "Dites-nous quelques mots.",
      body: "Nous ne fabriquons pas les avis. Nous publions ceux qui viennent, honnêtement, sans retouche.",
      ctaShare: "Partager un mot",
      ctaSee: "Voir les avis",
    },
    endCall: {
      eyebrow: "Roi · Première Édition",
      line1: "Voyez le monde",
      line2: "à votre dimension.",
      body: "Quatre pièces par an. Édition brève, numérotée à la main.",
      ctaCollection: "Voir la collection",
      ctaAtelier: "Découvrir l’atelier",
    },
  },
  collectionIndex: {
    metaTitle: "La Collection — Roi. Quatre pièces.",
    metaDescription:
      "Roi. Quatre pièces la première année : Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude. 78,90 € l’exemplaire, numérotée à la main.",
    breadcrumbHome: "Accueil",
    breadcrumbCollection: "Collection",
    eyebrowNumeral: "Collection I",
    eyebrowLabel: "Première Édition · Numérotée",
    title: ["Roi.", "Quatre atmosphères,", "un seul regard."],
    lede:
      "Quatre pièces, un an. Chaque exemplaire est numéroté à la main.\nQuatre-vingts euros. Ni plus, ni moins.",
    subtitles: "Le Salon · La Chasse · La Chapelle · Le Dîner",
    subtitles2: "Édition brève",
    editorialTitle1: "Nous voulons que la Roi soit portée.",
    editorialTitle2: "Pas rangée.",
    editorialBody:
      "La collection n’est pas exposée en vitrine. Nous la présentons sur rendez-vous, entre quatre yeux, à Paris, Berlin et Londres.",
    editorialCta: "Découvrir l’atelier",
  },
  piece: {
    metaDescriptionSuffix: (name, price) =>
      `${name} — édition brève, numérotée à la main. ${price}.`,
    chapterPrefix: "Chapitre",
    theLieu: "Le lieu",
    theHeure: "L’heure",
    silhouette: "Silhouette",
    section1Eyebrow: "§ 01",
    section1Label: "La matière",
    section2Eyebrow: "§ 02",
    section2Label: "Notes sensorielles",
    section2Title1: "Comment cette paire",
    section2Title2: "habite un lieu.",
    section2Body:
      "Quatre notes — ni parfum, ni matière : une manière de tenir la lumière.",
    noteLabel: (n) => `Note 0${n}`,
    lireQuatreAtmospheres: "Lire « Quatre atmosphères »",
    section3Eyebrow: "§ 03",
    section3Label: "Édition brève",
    prixParPiece: "Prix par pièce",
    niPlusNiMoins: "Ni plus, ni moins",
    editionBreveBody:
      "Numérotée à la main, à l’intérieur de la branche gauche. Livrée dans son écrin dédié — remise en main propre à Paris, transport suivi ailleurs en Europe.",
    twoWays: "Deux manières de la recevoir",
    way1Title: "Rendez-vous privé",
    way1Body:
      "Paris, Berlin ou Londres. Essai, ajustement, puis verres correcteurs ou solaires.",
    way2Title: "Livraison dans son écrin",
    way2Body: "En main propre à Paris ; par transport suivi ailleurs en Europe.",
    ctaCollection: "Voir la collection",
    ctaEcrire: "Écrire à la maison",
    section4Eyebrow: "§ 04",
    section4Label: "Les trois autres pièces",
    othersPieces: "Les trois autres pièces",
  },
  atelier: {
    metaTitle: "L’Atelier",
    metaDescription:
      "Une petite maison française de lunetterie. Édition brève, faite avec soin, numérotée à la main.",
    heroEyebrowNum: "La Maison",
    heroEyebrowLabel: "L’Atelier",
    heroTitle1: "Quatorze mains,",
    heroTitle2: "un seul regard.",
    heroLede:
      "Un atelier discret. Une édition brève. Chaque pièce pensée, montée et vérifiée à la main.",
    houseEyebrow: "La maison",
    houseBody: "Petite maison française de lunetterie.",
    editionEyebrow: "L’édition",
    editionBody: "Quatre pièces la première année. Numérotées à la main, une par une.",
    ruleEyebrow: "La règle",
    ruleQuote: "« Ce que l’on peut faire à la main, on le fait à la main. »",
    section1Eyebrow: "§ 01",
    section1Label: "Le geste",
    section1Title1: "Les gestes ne se",
    section1Title2: "délèguent pas.",
    section1Body:
      "Chaque paire passe par une suite de gestes précis. Une machine peut aller plus vite ; elle ne peut pas décider quand s’arrêter.",
    gestes: [
      { n: "I", label: "Tracé" },
      { n: "II", label: "Découpe" },
      { n: "III", label: "Assemblage" },
      { n: "IV", label: "Limage" },
      { n: "V", label: "Polissage" },
      { n: "VI", label: "Contrôle" },
      { n: "VII", label: "Finissage" },
    ],
    gesteWord: "Geste",
    piece4Body:
      "Une pièce ne quitte l’atelier tant qu’elle accroche encore la lumière comme un métal. On veut qu’elle la retienne comme une peau.",
    section2Eyebrow: "§ 02",
    section2Label: "La retenue",
    section2Title1: "Ce que nous ajoutons",
    section2Title2: "volontairement peu.",
    section2Body:
      "Quatre pièces la première année. Pas plus. Une maison se construit par ce qu’elle refuse d’ajouter au monde.",
    principles: [
      { t: "Pas d’intermédiaire", b: "Nous vendons en direct, en ligne. La marge sert la pièce, pas la vitrine." },
      { t: "Pas d’excès", b: "Une édition brève. Ni plus, ni moins que ce qui a du sens." },
      { t: "Pas de supplément inutile", b: "Un écrin, une paire, un numéro. Rien d’autre à emporter chez soi." },
    ],
    principleWord: "Principe",
    ctaTitle1: "Voyez le monde",
    ctaTitle2: "à votre dimension.",
    ctaBody: "La collection Roi se découvre en ligne. Quatre pièces, un seul regard.",
    cta: "Voir la collection",
  },
  avis: {
    metaTitle: "Avis",
    metaDescription:
      "Ce que la maison entend. Les premiers témoignages arrivent — la parole se prend en confiance.",
    eyebrowNum: "Avis",
    eyebrowLabel: "Ce que la maison entend",
    title1: "La parole,",
    title2: "quand elle vient.",
    lede:
      "Nous ne fabriquons pas les avis. Les premiers témoignages seront ceux des personnes qui portent Roi.",
    testimonial: (n) => `Témoignage ${n}`,
    bientot: "« Bientôt. »",
    aParaitre: "À paraître",
    ariaLabel: "Emplacements pour les futurs témoignages",
    ctaBody:
      "Vous portez Roi ? Écrivez-nous un mot — nous publierons les témoignages qui décrivent la pièce, honnêtement, sans retouche.",
    cta: "Partager un mot",
  },
  faq: {
    metaTitle: "Questions",
    metaDescription:
      "Ce que l’on nous demande souvent : le produit, la commande, la livraison, le retour, l’entretien.",
    eyebrowNum: "FAQ",
    eyebrowLabel: "Ce que l’on nous demande",
    title1: "Les questions,",
    title2: "les réponses.",
    lede:
      "Certaines réponses définitives arrivent à l’ouverture de la boutique. Les autres sont déjà là.",
    footerBody:
      "Une question qui n’est pas ici ? Écrivez-nous — nous répondons personnellement.",
    footerCta: "Poser ma question",
    pending: "En cours de rédaction.",
    sections: [
      {
        title: "La pièce",
        eyebrow: "§ 01 · Le produit",
        qas: [
          { q: "Combien coûte une pièce Roi ?", a: "Chaque pièce de la collection Roi est proposée à 78,90 €. Ni plus, ni moins." },
          { q: "Combien de modèles composent la collection ?", a: "La première collection comprend quatre pièces : Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude." },
          { q: "Chaque exemplaire est-il numéroté ?", a: "Oui. Chaque exemplaire est numéroté à la main, un par un." },
          { q: "Puis-je choisir entre plusieurs coloris ?", a: "Chaque pièce a une teinte définie. Les quatre atmosphères correspondent aux quatre pièces." },
        ],
      },
      {
        title: "La commande",
        eyebrow: "§ 02 · Commander",
        qas: [
          {
            q: "Comment passer commande ?",
            a: "La commande s’effectue en ligne, directement depuis la page de la pièce.",
            link: { text: "Voir la collection", before: " ", after: ".", href: "/collection" },
          },
          { q: "Quels moyens de paiement acceptez-vous ?", a: "En cours de rédaction. Les moyens de paiement définitifs seront publiés à l’ouverture de la boutique.", pending: true },
          { q: "Puis-je annuler ma commande après paiement ?", a: "En cours de rédaction. Les conditions d’annulation seront publiées à l’ouverture de la boutique.", pending: true },
        ],
      },
      {
        title: "La livraison",
        eyebrow: "§ 03 · Livraison",
        qas: [
          { q: "Où livrez-vous ?", a: "En cours de rédaction. Les zones de livraison seront communiquées à l’ouverture de la boutique.", pending: true },
          { q: "Quels sont les délais ?", a: "En cours de rédaction. Les délais indicatifs seront communiqués à l’ouverture.", pending: true },
          { q: "Quels sont les frais de port ?", a: "En cours de rédaction. La grille sera publiée à l’ouverture.", pending: true },
        ],
      },
      {
        title: "Le retour",
        eyebrow: "§ 04 · Retour & échange",
        qas: [
          { q: "Puis-je retourner ma pièce ?", a: "En cours de rédaction. Les conditions de retour seront publiées à l’ouverture de la boutique. Le droit de rétractation légal de quatorze jours s’applique en tout état de cause aux acheteurs consommateurs dans l’Union européenne.", pending: true },
          { q: "Comment procéder à un retour ?", a: "En cours de rédaction.", pending: true },
        ],
      },
      {
        title: "L’entretien",
        eyebrow: "§ 05 · Entretien",
        qas: [
          { q: "Comment nettoyer ma pièce ?", a: "Utilisez un chiffon microfibre propre, à sec ou légèrement humide. Évitez les produits abrasifs, les solvants et l’alcool, qui altèrent le fini des matières." },
          { q: "Comment ranger ma pièce ?", a: "Dans son écrin dédié, à l’abri de la chaleur et de la lumière directe prolongée." },
          { q: "Que faire en cas de vis desserrée ou de branche déformée ?", a: "Un opticien saura ajuster ou resserrer. Pour un ajustement lié à la maison, écrivez-nous." },
        ],
      },
    ],
  },
  conseil: {
    metaTitle: "Conseil privé",
    metaDescription:
      "Un mot à la maison. Un écrin s’ouvre, une carte vous attend — et notre conseil vous est personnellement destiné.",
    eyebrowNum: "Conseil",
    eyebrowLabel: "La maison à votre écoute",
    title1: "Conseillez-",
    title2: "moi.",
    lede:
      "Une conversation à quatre yeux. Ouvrez l’écrin, glissez quelques mots à la maison.",
    captionA: "LA CORRESPONDANCE",
    captionB: "01 — UN MOT À LA MAISON",
    openLabel: "Ouvrir l’écrin",
    openAria: "Ouvrir l’écrin de conseil",
    lidLine1: "L’Atelier d’Or",
    lidLine2: "PARIS",
    baseSignature: "FAIT POUR VOTRE REGARD",
    cardBrand: "L’Atelier d’Or",
    cardNumber: "CORRESPONDANCE PRIVÉE",
    cardHeader: "Votre conseil personnel",
    nameLabel: "Votre nom",
    emailLabel: "Votre e-mail",
    messageLabel: "Comment pouvons-nous vous conseiller ?",
    privacyLink: "Vos mots restent entre nous.",
    submit: "Envoyer ma demande",
    submitting: "Envoi en cours…",
    thanksTitle: "Merci.",
    thanksBody: "Nous vous répondrons personnellement.",
    emailTitle: "À vous de signer.",
    emailBody1:
      "Envoyez votre message depuis votre messagerie. Si elle ne s’est pas ouverte, écrivez à",
    emailBody2: ".",
    emailBackToCard: "Revenir à ma carte",
    emailStowCard: "Ranger ma carte ↘",
    footnoteA: "UN ÉCRIN. QUELQUES MOTS. VOTRE REGARD.",
    footnoteB: "L’Atelier d’Or — Paris",
    errorEmpty: "Quelques mots et votre nom, pour que nous puissions vous répondre.",
    errorSetup: "Le service de correspondance est en cours d’installation. Réessayez plus tard.",
    errorSend: "Votre message n’a pas été envoyé. Vos mots sont conservés ; veuillez réessayer.",
    pocket: "À VOTRE ATTENTION",
    noscriptWrite: "Pour un conseil personnel, écrivez à",
  },
  journal: {
    metaTitle: "Journal",
    metaDescription:
      "Les cahiers de la maison. Trois cahiers pour l’instant. Un ou deux par saison, quand nous avons quelque chose à dire.",
    eyebrowNum: "Journal",
    eyebrowLabel: "Les cahiers de la maison",
    title1: "Un cahier,",
    title2: "quand nous avons",
    title3: "quelque chose à dire.",
    lede:
      "Trois cahiers pour l’instant. Nous en publions un ou deux par saison — et jamais autrement.",
    readCahier: "Lire le cahier",
  },
  cahier: {
    labelChapter: (numeral) => `Cahier ${numeral}`,
    signatureSuffix: "L’Atelier d’Or",
    piecesEyebrowNum: "§ Roi",
    piecesEyebrowLabel: "Découvrir les pièces",
    othersEyebrowNum: "§ Journal",
    othersEyebrowLabel: "Les autres cahiers",
    cahierN: (n) => `Cahier ${n}`,
  },
  legal: {
    articleWord: "Article",
    mentions: {
      metaTitle: "Mentions légales",
      metaDescription: "Informations légales du site de L’Atelier d’Or. Site en cours de constitution.",
      numeral: "Cahier — Discrétion",
      rubric: "Mentions légales",
      title: "Cahier — Discrétion.",
      chapo: "Ce que la maison est, dans les formes. Rien de plus, rien de moins.",
      sections: [
        {
          title: "Statut du site",
          body: [
            "L’Atelier d’Or est une maison en cours de constitution. Le présent site est présenté à titre éditorial et n’effectue à ce jour aucune vente au public.",
            "Les mentions légales définitives — raison sociale, siège social, numéro RCS/SIRET, capital, direction de la publication, hébergeur — seront publiées ici dès que la société sera immatriculée.",
          ],
        },
        {
          title: "Éditeur",
          body: [
            "L’Atelier d’Or (dénomination provisoire).",
            "Coordonnées éditeur à communiquer sur demande écrite via le formulaire de contact.",
          ],
        },
        {
          title: "Hébergement",
          body: [
            "Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.",
          ],
        },
        {
          title: "Propriété intellectuelle",
          body: [
            "L’ensemble des contenus présents sur le site — textes, photographies, dessins, marques, logos — est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.",
            "Toute reproduction, représentation ou diffusion, en tout ou partie, est soumise à l’autorisation écrite préalable de la maison.",
          ],
        },
        {
          title: "Contact",
          body: [
            "Toute question relative au contenu ou à l’usage du site peut être adressée via la page « Conseil ».",
          ],
        },
      ],
    },
    privacy: {
      metaTitle: "Confidentialité",
      metaDescription: "Ce que la maison collecte, ce qu’elle ne collectera jamais, et vos droits.",
      numeral: "Cahier — Discrétion",
      rubric: "Confidentialité",
      title: "Vos coordonnées ne sortent jamais de la maison.",
      chapo:
        "Ce que nous collectons, ce que nous ne collecterons jamais, ce que vous pouvez nous demander à tout moment.",
      sections: [
        {
          title: "Ce que la maison collecte",
          body: [
            "Uniquement les informations que vous nous transmettez volontairement via la page « Conseil » : nom, courriel et le message que vous choisissez d’y joindre.",
            "Nous ne collectons aucune donnée comportementale, aucun profil publicitaire, aucun identifiant de suivi tiers.",
          ],
        },
        {
          title: "Ce que la maison ne fait pas",
          body: [
            "Nous ne vendons pas vos coordonnées. Nous ne les partageons avec aucune régie, aucun réseau publicitaire, aucun partenaire commercial.",
            "Nous ne posons pas de traceurs à des fins de mesure d’audience tierce, ni d’outils de re-ciblage.",
          ],
        },
        {
          title: "Cookies",
          body: [
            "Le site utilise uniquement des cookies strictement nécessaires — affichage, préférences d’accessibilité, cache.",
            "Aucun cookie de mesure d’audience tierce, aucun cookie de suivi publicitaire.",
          ],
        },
        {
          title: "Vos droits",
          body: [
            "Conformément au Règlement général sur la protection des données (RGPD), vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et de portabilité concernant vos données personnelles.",
            "Vous pouvez exercer ces droits en nous écrivant via la page « Conseil ». Nous répondons sous vingt-quatre heures ouvrées.",
          ],
        },
        {
          title: "Durée de conservation",
          body: [
            "Les échanges sont conservés le temps du dialogue, puis effacés sur simple demande. Aucune conservation prolongée sans raison exprimée.",
          ],
        },
      ],
    },
    a11y: {
      metaTitle: "Accessibilité",
      metaDescription: "Nos engagements en matière d’accessibilité : WCAG 2.2 AA, respect des préférences de mouvement, contact.",
      numeral: "Cahier — Discrétion",
      rubric: "Accessibilité",
      title: "Une lecture, à vue et à voix, pour tout le monde.",
      chapo: "Le site vise le niveau WCAG 2.2 AA et respecte les préférences de mouvement du système.",
      sections: [
        {
          title: "Notre visée",
          body: [
            "Le site est conçu pour atteindre le niveau de conformité WCAG 2.2 AA (Web Content Accessibility Guidelines).",
            "Nous vérifions régulièrement contraste, ordre du contenu, navigation au clavier et compatibilité avec les lecteurs d’écran.",
          ],
        },
        {
          title: "Mouvement réduit",
          body: [
            "Les animations d’entrée, révélations et transitions du site sont désactivées automatiquement lorsque votre système est réglé sur « réduire les animations » (prefers-reduced-motion).",
            "Aucune animation essentielle à la compréhension n’est présente.",
          ],
        },
        {
          title: "Navigation",
          body: [
            "Toute la navigation est accessible au clavier. Les zones interactives disposent d’un état de focus visible.",
            "Les liens et boutons sont annoncés en toutes lettres, sans jargon.",
          ],
        },
        {
          title: "Signalement",
          body: [
            "Si vous rencontrez une difficulté d’accès à un contenu, écrivez-nous via la page « Conseil ». Nous répondons sous vingt-quatre heures ouvrées et corrigeons dans la mesure du possible sans délai.",
          ],
        },
      ],
    },
  },
  pieceSwitcher: {
    label: "Autres pièces",
    aria: (name) => `${name} — voir la pièce`,
  },
  pieces: {
    "roi-rouge": {
      tagline: "Rectangle, acétate rouge à finition dorée.",
      chapter: "Chapitre I · Le Salon",
      place: "Un salon privé, tard le soir.",
      time: "Fin de soirée",
      silhouette: "Rectangle aux angles adoucis, arête franche.",
      materie: "Acétate coloré dans la masse, finition dorée sur les charnières.",
      details: [
        "Silhouette rectangle",
        "Acétate rouge dans la masse",
        "Finition dorée sur les charnières",
      ],
      notes: ["cuir patiné", "tabac clair", "poivre long", "cire noire"],
      scene: "Le velours tient la lumière plus longtemps que la peau.",
      teintes: [{ name: "Rouge Ember" }, { name: "Rouge Profond" }],
    },
    "roi-noir": {
      tagline: "Panto, acétate vert sous-bois à rivets bronze.",
      chapter: "Chapitre II · La Chasse",
      place: "Un pavillon en lisière de forêt, en fin d’après-midi.",
      time: "Avant le dîner",
      silhouette: "Panto haute, ligne fermée, arête douce.",
      materie: "Acétate vert profond, rivets bronze en finition mate.",
      details: ["Silhouette panto haute", "Acétate vert sous-bois", "Rivets bronze mat"],
      notes: ["mousse", "cèdre", "cuir sellier", "encre végétale"],
      scene: "Bois humide, tweed sec. Rien de trop.",
      teintes: [{ name: "Noir Encre" }, { name: "Noir Fumé" }],
    },
    "roi-cristal": {
      tagline: "Ovale, acétate cristal à charnières argentées.",
      chapter: "Chapitre III · La Chapelle",
      place: "Une chapelle de campagne, au petit matin.",
      time: "Tôt le matin",
      silhouette: "Ovale allongé, arête cristalline très fine.",
      materie: "Acétate cristal translucide, finition argentée.",
      details: [
        "Silhouette ovale allongée",
        "Acétate cristal translucide",
        "Finition argentée sur les charnières",
      ],
      notes: ["iris", "eau claire", "amande fraîche", "papier de soie"],
      scene: "Un jour pâle, une lumière qui ne trahit personne.",
      teintes: [{ name: "Blanc de Neige" }, { name: "Blanc Nacré" }],
    },
    "roi-emeraude": {
      tagline: "Panto, acétate émeraude à finition dorée.",
      chapter: "Chapitre IV · Le Dîner",
      place: "Un dîner dans une orangerie, sous les arbres.",
      time: "En soirée",
      silhouette: "Panto masculine, arête sculptée, branches longues.",
      materie: "Acétate émeraude, finition dorée sur la bordure.",
      details: [
        "Silhouette panto masculine",
        "Acétate émeraude taillé main",
        "Finition dorée sur la bordure",
      ],
      notes: ["gardénia", "figue mûre", "violette poudrée", "vin ambré"],
      scene: "Les verres tintent, les bougies vacillent, quelqu’un rit doucement.",
      teintes: [{ name: "Vert Émeraude" }, { name: "Vert Forêt" }],
    },
  },
  cahiers: {
    "geste-juste": {
      rubric: "Geste",
      title: "Le geste juste, à trois centimètres du visage.",
      chapo:
        "Quelques principes que la maison se donne, gardés simples pour tenir dans le temps.",
      read: "5 min",
      date: "Septembre",
      body: [
        "Une paire de lunettes se porte à trois centimètres du visage. Ce détail suffit à changer la manière dont on choisit chaque courbe, chaque arête, chaque angle.",
        "Nous montons chaque pièce à la main. Cela veut dire décider, à chaque étape, quand s’arrêter. Une machine peut aller plus vite ; elle ne sait pas s’arrêter au bon moment.",
        "Le fini est le seul instant où l’on relit tout le reste. Une pièce ne quitte l’atelier tant qu’elle n’a pas encore ce silence — cette manière de tenir la lumière comme une peau.",
        "Chaque exemplaire est numéroté à la main. Rien de plus. C’est la seule chose qui sépare votre paire de la nôtre.",
      ],
    },
    "quatre-atmospheres": {
      rubric: "Collection",
      title: "Quatre atmosphères, un seul regard.",
      chapo:
        "La première collection ne dessine pas quatre montures. Elle dessine quatre manières d’entrer dans une pièce.",
      read: "4 min",
      date: "Septembre",
      body: [
        "Roi. Quatre atmosphères — le salon, la chasse, la chapelle, le dîner. Quatre manières d’entrer dans une pièce.",
        "Roi Rouge appartient au soir : un salon privé, la fin d’une soirée, la couleur qui retient la lumière un instant de plus que la peau.",
        "Roi Noir est un après-midi long : un pavillon en lisière de forêt, le tweed sec contre le bois humide. Rien de trop.",
        "Roi Cristal est un matin pâle, une chapelle de campagne : une lumière qui ne trahit personne.",
        "Roi Émeraude est le dîner sous les arbres, dans une orangerie. Les verres tintent, les bougies vacillent, quelqu’un rit doucement.",
        "Édition brève. Numérotée à la main. Vendue en ligne, directement.",
      ],
    },
    "quatre-vingts-euros": {
      rubric: "Édition",
      title: "Pourquoi une édition brève et un prix juste.",
      chapo:
        "78,90 € par pièce. Pas de vitrine, pas d’intermédiaire. Une position, pas une provocation.",
      read: "4 min",
      date: "Août",
      body: [
        "Nous vendons en direct. Une pièce ne doit pas passer par trois vitrines et deux catalogues avant d’arriver sur un visage.",
        "Nous voulons que Roi soit portée, pas rangée. Qu’elle appartienne à des visages, à des vies actives — pas à des vitrines.",
        "Le luxe, ici, ne se joue pas dans le prix. Il se joue dans la matière, dans le geste, dans la retenue. Quatre pièces la première année. Pas plus.",
        "Une maison se construit par ce qu’elle refuse d’ajouter au monde. Nous refusons trois choses : la vitrine inutile, l’intermédiaire, le supplément sans usage.",
        "Rien de trop, rien de trop peu. C’est tout.",
      ],
    },
  },
  langSwitcher: {
    label: "Langue",
    fr: "Français",
    de: "Deutsch",
  },
};

const de: Dictionary = {
  common: {
    editionBreve: "Kleine Auflage",
    numeroteeALaMain: "Von Hand nummeriert",
    petiteMaison: "Kleines französisches Haus",
    ventEnLigne: "Ausschließlich Online-Verkauf.",
    voir: "Ansehen",
    voirLaPiece: "Zum Stück",
    voirLaCollection: "Zur Kollektion",
    toutLaCollection: "Ganze Kollektion",
    conseillez: "Beraten Sie mich",
    ecrireLaMaison: "Dem Haus schreiben",
    lAtelier: "Atelier",
    decouvrirLAtelier: "Atelier entdecken",
    defiler: "Scrollen",
    passerIntro: "Intro überspringen",
    menu: "Menü",
    ouvrirMenu: "Menü öffnen",
    fermerMenu: "Menü schließen",
    skipToContent: "Zum Inhalt springen",
    voyezLeMonde1: "Sehen Sie die Welt",
    voyezLeMonde2: "in Ihrer eigenen Dimension.",
    quatrePiecesParAn: "Vier Stücke im Jahr. Kleine Auflage,",
    editionBreveDescription: "von Hand nummeriert.",
    edition: "Kleine Auflage",
    numeral: "Nummer",
    pageOf: (n) => `Seite ${n}`,
    remisNumeroteALaMain: "Kleine Auflage · Von Hand nummeriert",
  },
  nav: {
    edition: "Kleine Auflage",
    collection: "Kollektion",
    atelier: "Atelier",
    journal: "Journal",
    avis: "Stimmen",
    questions: "Fragen",
    conseil: "Beratung",
    maisonEyebrow: "Haus",
    contactEyebrow: "Kontakt",
    houseIntro: "Kleine Auflage.\nAusschließlich Online-Verkauf.",
    contactWriteUs: "Schreiben Sie uns",
    ctaCollection: "Zur Kollektion",
  },
  footer: {
    petiteMaisonFr: "Ein kleines französisches Haus",
    ligne1: "Kleines französisches Brillenhaus.",
    ligne2: "Kleine Auflage, Online-Verkauf.",
    columnMaison: "Haus",
    columnCollection: "Kollektion",
    columnMentions: "Rechtliches",
    labelPremiereCollection: "Erste Kollektion",
    labelMentionsLegales: "Impressum",
    labelConfidentialite: "Datenschutz",
    labelAccessibilite: "Barrierefreiheit",
    copyright: "© L’Atelier d’Or · Kleine Auflage, von Hand nummeriert",
    editorialTag: "Ein kleines französisches Haus",
    editorialTag2: "Kleine Auflage",
  },
  newsletter: {
    label: "Der Brief des Hauses",
    description:
      "Ein bis zweimal pro Saison. Ein neues Stück, ein Heft, Stille. Nicht mehr.",
    placeholder: "ihre@email.de",
    submit: "Anmelden",
    formAria: "Anmeldung zum Brief des Hauses",
    submitting: "…",
    ok: "✓",
    errorEmpty: "Bitte eine gültige Adresse.",
    errorSetup: "Die Anmeldung wird derzeit eingerichtet.",
    thanks: "Danke. Sie sind angemeldet.",
    errorNet: "Anmeldung nicht gespeichert. Bitte später erneut versuchen.",
  },
  home: {
    hero: {
      eyebrow: "Roi · Erste Auflage",
      title1: "Sehen Sie die Welt",
      title2: "in Ihrer eigenen Dimension.",
      lede: "Vier Stücke im Jahr. Kleine Auflage, von Hand nummeriert.",
      ctaCollection: "Zur Kollektion",
      ctaConseil: "Beraten Sie mich",
      ctaAtelier: "Atelier",
      scroll: "Scrollen",
      edition: "Kleine Auflage",
    },
    showcase: {
      eyebrow: "Erste Kollektion",
      title1: "Roi.",
      title2: "Vier Stücke, ein einziger Blick.",
      lede: "Vier Atmosphären, vier Stunden, vier Arten, einen Raum zu betreten. 78,90 € pro Stück, von Hand nummeriert.",
      piece: "Stück",
      footerLine: "Kleine Auflage · Von Hand nummeriert",
      link: "Ganze Kollektion",
    },
    alternating: {
      voirLaPiece: "Zum Stück",
    },
    avisTeaser: {
      eyebrow: "Stimmen",
      title1: "Tragen Sie Roi?",
      title2: "Sagen Sie uns ein paar Worte.",
      body: "Wir erfinden keine Stimmen. Wir veröffentlichen jene, die zu uns finden – ehrlich, ohne Retusche.",
      ctaShare: "Ein Wort teilen",
      ctaSee: "Stimmen ansehen",
    },
    endCall: {
      eyebrow: "Roi · Erste Auflage",
      line1: "Sehen Sie die Welt",
      line2: "in Ihrer eigenen Dimension.",
      body: "Vier Stücke im Jahr. Kleine Auflage, von Hand nummeriert.",
      ctaCollection: "Zur Kollektion",
      ctaAtelier: "Atelier entdecken",
    },
  },
  collectionIndex: {
    metaTitle: "Die Kollektion – Roi. Vier Stücke.",
    metaDescription:
      "Roi. Vier Stücke im ersten Jahr: Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude. 78,90 € pro Stück, von Hand nummeriert.",
    breadcrumbHome: "Startseite",
    breadcrumbCollection: "Kollektion",
    eyebrowNumeral: "Kollektion I",
    eyebrowLabel: "Erste Auflage · Nummeriert",
    title: ["Roi.", "Vier Atmosphären,", "ein einziger Blick."],
    lede:
      "Vier Stücke, ein Jahr. Jedes Exemplar von Hand nummeriert.\nAchtzig Euro. Nicht mehr, nicht weniger.",
    subtitles: "Der Salon · Die Jagd · Die Kapelle · Das Dîner",
    subtitles2: "Kleine Auflage",
    editorialTitle1: "Roi soll getragen werden.",
    editorialTitle2: "Nicht verwahrt.",
    editorialBody:
      "Die Kollektion steht in keinem Schaufenster. Wir zeigen sie nach Terminvereinbarung, unter vier Augen, in Paris, Berlin und London.",
    editorialCta: "Atelier entdecken",
  },
  piece: {
    metaDescriptionSuffix: (name, price) =>
      `${name} – kleine Auflage, von Hand nummeriert. ${price}.`,
    chapterPrefix: "Kapitel",
    theLieu: "Der Ort",
    theHeure: "Die Stunde",
    silhouette: "Silhouette",
    section1Eyebrow: "§ 01",
    section1Label: "Die Materie",
    section2Eyebrow: "§ 02",
    section2Label: "Sinnliche Noten",
    section2Title1: "Wie dieses Paar",
    section2Title2: "einen Ort bewohnt.",
    section2Body:
      "Vier Noten – weder Parfum noch Material: eine Art, das Licht zu halten.",
    noteLabel: (n) => `Note 0${n}`,
    lireQuatreAtmospheres: "„Vier Atmosphären“ lesen",
    section3Eyebrow: "§ 03",
    section3Label: "Kleine Auflage",
    prixParPiece: "Preis pro Stück",
    niPlusNiMoins: "Nicht mehr, nicht weniger",
    editionBreveBody:
      "Von Hand nummeriert, im Inneren des linken Bügels. Geliefert im eigenen Etui – persönlich in Paris übergeben, überall sonst in Europa per verfolgtem Versand.",
    twoWays: "Zwei Wege, es zu empfangen",
    way1Title: "Privater Termin",
    way1Body:
      "Paris, Berlin oder London. Anprobe, Anpassung, danach Korrektur- oder Sonnengläser.",
    way2Title: "Lieferung im Etui",
    way2Body: "Persönlich in Paris; überall sonst in Europa per verfolgtem Versand.",
    ctaCollection: "Zur Kollektion",
    ctaEcrire: "Dem Haus schreiben",
    section4Eyebrow: "§ 04",
    section4Label: "Die drei weiteren Stücke",
    othersPieces: "Die drei weiteren Stücke",
  },
  atelier: {
    metaTitle: "Das Atelier",
    metaDescription:
      "Ein kleines französisches Brillenhaus. Kleine Auflage, mit Sorgfalt gefertigt, von Hand nummeriert.",
    heroEyebrowNum: "Das Haus",
    heroEyebrowLabel: "Atelier",
    heroTitle1: "Vierzehn Hände,",
    heroTitle2: "ein einziger Blick.",
    heroLede:
      "Ein diskretes Atelier. Eine kleine Auflage. Jedes Stück von Hand entworfen, montiert und geprüft.",
    houseEyebrow: "Das Haus",
    houseBody: "Kleines französisches Brillenhaus.",
    editionEyebrow: "Die Auflage",
    editionBody: "Vier Stücke im ersten Jahr. Von Hand nummeriert, eines nach dem anderen.",
    ruleEyebrow: "Die Regel",
    ruleQuote: "„Was von Hand gemacht werden kann, wird von Hand gemacht.“",
    section1Eyebrow: "§ 01",
    section1Label: "Die Geste",
    section1Title1: "Handgriffe lassen sich",
    section1Title2: "nicht delegieren.",
    section1Body:
      "Jedes Paar durchläuft eine Reihe präziser Handgriffe. Eine Maschine kann schneller sein; sie kann nicht entscheiden, wann sie aufhört.",
    gestes: [
      { n: "I", label: "Anriss" },
      { n: "II", label: "Zuschnitt" },
      { n: "III", label: "Montage" },
      { n: "IV", label: "Feilen" },
      { n: "V", label: "Polieren" },
      { n: "VI", label: "Prüfung" },
      { n: "VII", label: "Finish" },
    ],
    gesteWord: "Handgriff",
    piece4Body:
      "Ein Stück verlässt das Atelier nicht, solange es das Licht noch wie ein Metall auffängt. Wir wollen, dass es das Licht wie eine Haut hält.",
    section2Eyebrow: "§ 02",
    section2Label: "Die Zurückhaltung",
    section2Title1: "Was wir bewusst",
    section2Title2: "wenig hinzufügen.",
    section2Body:
      "Vier Stücke im ersten Jahr. Nicht mehr. Ein Haus baut sich durch das, was es der Welt nicht hinzufügt.",
    principles: [
      { t: "Kein Zwischenhandel", b: "Wir verkaufen direkt, online. Die Marge dient dem Stück, nicht dem Schaufenster." },
      { t: "Kein Übermaß", b: "Eine kleine Auflage. Nicht mehr, nicht weniger, als es Sinn ergibt." },
      { t: "Keine unnötige Beilage", b: "Ein Etui, ein Paar, eine Nummer. Nichts anderes verlässt das Haus." },
    ],
    principleWord: "Prinzip",
    ctaTitle1: "Sehen Sie die Welt",
    ctaTitle2: "in Ihrer eigenen Dimension.",
    ctaBody: "Die Roi-Kollektion entdecken Sie online. Vier Stücke, ein einziger Blick.",
    cta: "Zur Kollektion",
  },
  avis: {
    metaTitle: "Stimmen",
    metaDescription:
      "Was das Haus hört. Die ersten Zeugnisse kommen – das Wort ergreift man in Vertrauen.",
    eyebrowNum: "Stimmen",
    eyebrowLabel: "Was das Haus hört",
    title1: "Das Wort,",
    title2: "wenn es kommt.",
    lede:
      "Wir erfinden keine Stimmen. Die ersten Zeugnisse werden von jenen kommen, die Roi tragen.",
    testimonial: (n) => `Zeugnis ${n}`,
    bientot: "„Bald.“",
    aParaitre: "Erscheint",
    ariaLabel: "Platzhalter für kommende Zeugnisse",
    ctaBody:
      "Tragen Sie Roi? Schreiben Sie uns ein Wort – wir veröffentlichen die Zeugnisse, die das Stück ehrlich beschreiben, ohne Retusche.",
    cta: "Ein Wort teilen",
  },
  faq: {
    metaTitle: "Fragen",
    metaDescription:
      "Was uns häufig gefragt wird: das Produkt, die Bestellung, die Lieferung, die Rücksendung, die Pflege.",
    eyebrowNum: "FAQ",
    eyebrowLabel: "Was uns gefragt wird",
    title1: "Die Fragen,",
    title2: "die Antworten.",
    lede:
      "Einige endgültige Antworten folgen zur Eröffnung des Geschäfts. Die anderen stehen bereits hier.",
    footerBody:
      "Eine Frage, die hier nicht steht? Schreiben Sie uns – wir antworten persönlich.",
    footerCta: "Meine Frage stellen",
    pending: "Wird derzeit verfasst.",
    sections: [
      {
        title: "Das Stück",
        eyebrow: "§ 01 · Das Produkt",
        qas: [
          { q: "Was kostet ein Roi-Stück?", a: "Jedes Stück der Roi-Kollektion wird zu 78,90 € angeboten. Nicht mehr, nicht weniger." },
          { q: "Wie viele Modelle umfasst die Kollektion?", a: "Die erste Kollektion umfasst vier Stücke: Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude." },
          { q: "Ist jedes Exemplar nummeriert?", a: "Ja. Jedes Exemplar ist von Hand nummeriert, Stück für Stück." },
          { q: "Kann ich zwischen mehreren Farbtönen wählen?", a: "Jedes Stück hat einen festgelegten Farbton. Die vier Atmosphären entsprechen den vier Stücken." },
        ],
      },
      {
        title: "Die Bestellung",
        eyebrow: "§ 02 · Bestellen",
        qas: [
          {
            q: "Wie kann ich bestellen?",
            a: "Die Bestellung erfolgt online, direkt von der Seite des jeweiligen Stücks.",
            link: { text: "Zur Kollektion", before: " ", after: ".", href: "/collection" },
          },
          { q: "Welche Zahlungsmittel akzeptieren Sie?", a: "Wird derzeit verfasst. Die endgültigen Zahlungsmittel werden zur Eröffnung des Geschäfts veröffentlicht.", pending: true },
          { q: "Kann ich meine Bestellung nach der Zahlung stornieren?", a: "Wird derzeit verfasst. Die Stornobedingungen werden zur Eröffnung des Geschäfts veröffentlicht.", pending: true },
        ],
      },
      {
        title: "Die Lieferung",
        eyebrow: "§ 03 · Lieferung",
        qas: [
          { q: "Wohin liefern Sie?", a: "Wird derzeit verfasst. Die Liefergebiete werden zur Eröffnung des Geschäfts bekanntgegeben.", pending: true },
          { q: "Welche Lieferzeiten gelten?", a: "Wird derzeit verfasst. Richtwerte werden zur Eröffnung bekanntgegeben.", pending: true },
          { q: "Wie hoch sind die Versandkosten?", a: "Wird derzeit verfasst. Die Übersicht folgt zur Eröffnung.", pending: true },
        ],
      },
      {
        title: "Die Rücksendung",
        eyebrow: "§ 04 · Rücksendung & Umtausch",
        qas: [
          { q: "Kann ich mein Stück zurücksenden?", a: "Wird derzeit verfasst. Die Rücksendebedingungen werden zur Eröffnung des Geschäfts veröffentlicht. Für Verbraucher in der Europäischen Union gilt in jedem Fall das gesetzliche vierzehntägige Widerrufsrecht.", pending: true },
          { q: "Wie sende ich zurück?", a: "Wird derzeit verfasst.", pending: true },
        ],
      },
      {
        title: "Die Pflege",
        eyebrow: "§ 05 · Pflege",
        qas: [
          { q: "Wie reinige ich mein Stück?", a: "Verwenden Sie ein sauberes Mikrofasertuch, trocken oder leicht angefeuchtet. Vermeiden Sie scharfe Reiniger, Lösungsmittel und Alkohol – sie greifen die Oberfläche an." },
          { q: "Wie bewahre ich mein Stück auf?", a: "Im dafür vorgesehenen Etui, geschützt vor Hitze und dauerhaft direktem Licht." },
          { q: "Was tun bei loser Schraube oder verbogenem Bügel?", a: "Ein Optiker kann anpassen oder nachziehen. Für eine Anpassung durch das Haus schreiben Sie uns." },
        ],
      },
    ],
  },
  conseil: {
    metaTitle: "Persönliche Beratung",
    metaDescription:
      "Ein Wort an das Haus. Ein Etui öffnet sich, eine Karte erwartet Sie – und unsere Beratung gilt persönlich Ihnen.",
    eyebrowNum: "Beratung",
    eyebrowLabel: "Das Haus hört zu",
    title1: "Beraten",
    title2: "Sie mich.",
    lede:
      "Ein Gespräch unter vier Augen. Öffnen Sie das Etui, legen Sie dem Haus ein paar Worte hinein.",
    captionA: "DIE KORRESPONDENZ",
    captionB: "01 — EIN WORT AN DAS HAUS",
    openLabel: "Etui öffnen",
    openAria: "Beratungs-Etui öffnen",
    lidLine1: "L’Atelier d’Or",
    lidLine2: "PARIS",
    baseSignature: "FÜR IHREN BLICK GEMACHT",
    cardBrand: "L’Atelier d’Or",
    cardNumber: "PRIVATE KORRESPONDENZ",
    cardHeader: "Ihre persönliche Beratung",
    nameLabel: "Ihr Name",
    emailLabel: "Ihre E-Mail",
    messageLabel: "Wie können wir Sie beraten?",
    privacyLink: "Ihre Worte bleiben unter uns.",
    submit: "Meine Anfrage senden",
    submitting: "Wird gesendet…",
    thanksTitle: "Danke.",
    thanksBody: "Wir werden Ihnen persönlich antworten.",
    emailTitle: "An Ihnen ist es zu unterschreiben.",
    emailBody1:
      "Senden Sie Ihre Nachricht aus Ihrem Mail-Programm. Falls es sich nicht geöffnet hat, schreiben Sie an",
    emailBody2: ".",
    emailBackToCard: "Zurück zu meiner Karte",
    emailStowCard: "Meine Karte ablegen ↘",
    footnoteA: "EIN ETUI. EIN PAAR WORTE. IHR BLICK.",
    footnoteB: "L’Atelier d’Or — Paris",
    errorEmpty: "Ein paar Worte und Ihr Name, damit wir antworten können.",
    errorSetup: "Der Korrespondenzdienst wird derzeit eingerichtet. Bitte später erneut versuchen.",
    errorSend: "Ihre Nachricht wurde nicht gesendet. Ihre Worte bleiben erhalten; bitte erneut versuchen.",
    pocket: "ZU IHREN HÄNDEN",
    noscriptWrite: "Für eine persönliche Beratung schreiben Sie an",
  },
  journal: {
    metaTitle: "Journal",
    metaDescription:
      "Die Hefte des Hauses. Vorerst drei Hefte. Ein bis zwei pro Saison, wenn wir etwas zu sagen haben.",
    eyebrowNum: "Journal",
    eyebrowLabel: "Die Hefte des Hauses",
    title1: "Ein Heft,",
    title2: "wenn wir",
    title3: "etwas zu sagen haben.",
    lede:
      "Vorerst drei Hefte. Wir veröffentlichen ein oder zwei pro Saison – und niemals anders.",
    readCahier: "Heft lesen",
  },
  cahier: {
    labelChapter: (numeral) => `Heft ${numeral}`,
    signatureSuffix: "L’Atelier d’Or",
    piecesEyebrowNum: "§ Roi",
    piecesEyebrowLabel: "Die Stücke entdecken",
    othersEyebrowNum: "§ Journal",
    othersEyebrowLabel: "Die anderen Hefte",
    cahierN: (n) => `Heft ${n}`,
  },
  legal: {
    articleWord: "Artikel",
    mentions: {
      metaTitle: "Impressum",
      metaDescription: "Rechtliche Angaben zur Website von L’Atelier d’Or. Gesellschaft in Gründung.",
      numeral: "Heft — Diskretion",
      rubric: "Impressum",
      title: "Heft — Diskretion.",
      chapo: "Was das Haus in aller Form ist. Nicht mehr, nicht weniger.",
      sections: [
        {
          title: "Status der Website",
          body: [
            "L’Atelier d’Or ist ein Haus in Gründung. Die vorliegende Website wird zu redaktionellen Zwecken bereitgestellt und führt derzeit keine Verkäufe an die Öffentlichkeit durch.",
            "Die endgültigen rechtlichen Angaben – Firma, Sitz, Handelsregister/SIRET, Kapital, verantwortlich für die Veröffentlichung, Hosting – werden hier veröffentlicht, sobald die Gesellschaft eingetragen ist.",
          ],
        },
        {
          title: "Herausgeber",
          body: [
            "L’Atelier d’Or (vorläufige Bezeichnung).",
            "Kontaktdaten des Herausgebers werden auf schriftliche Anfrage über das Kontaktformular mitgeteilt.",
          ],
        },
        {
          title: "Hosting",
          body: [
            "Die Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA, gehostet.",
          ],
        },
        {
          title: "Urheberrecht",
          body: [
            "Sämtliche Inhalte der Website – Texte, Fotografien, Zeichnungen, Marken, Logos – sind nach französischem und internationalem Recht des geistigen Eigentums geschützt.",
            "Jede Vervielfältigung, Darstellung oder Verbreitung, ganz oder teilweise, bedarf der vorherigen schriftlichen Zustimmung des Hauses.",
          ],
        },
        {
          title: "Kontakt",
          body: [
            "Anfragen zu Inhalt oder Nutzung der Website richten Sie bitte über die Seite „Beratung“.",
          ],
        },
      ],
    },
    privacy: {
      metaTitle: "Datenschutz",
      metaDescription: "Was das Haus erhebt, was es nie erheben wird, und Ihre Rechte.",
      numeral: "Heft — Diskretion",
      rubric: "Datenschutz",
      title: "Ihre Kontaktdaten verlassen niemals das Haus.",
      chapo:
        "Was wir erheben, was wir niemals erheben werden, und was Sie jederzeit von uns verlangen können.",
      sections: [
        {
          title: "Was das Haus erhebt",
          body: [
            "Ausschließlich die Angaben, die Sie uns freiwillig über die Seite „Beratung“ übermitteln: Name, E-Mail-Adresse und die Nachricht, die Sie beifügen.",
            "Wir erheben keinerlei Verhaltensdaten, keine Werbe-Profile und keine Tracking-Identifikatoren Dritter.",
          ],
        },
        {
          title: "Was das Haus nicht tut",
          body: [
            "Wir verkaufen Ihre Kontaktdaten nicht. Wir teilen sie mit keiner Werbeagentur, keinem Werbenetzwerk und keinem kommerziellen Partner.",
            "Wir setzen keine Tracker zu Zwecken der Fremdreichweitenmessung und keine Retargeting-Werkzeuge ein.",
          ],
        },
        {
          title: "Cookies",
          body: [
            "Die Website verwendet ausschließlich unbedingt erforderliche Cookies – Anzeige, Barrierefreiheits-Präferenzen, Cache.",
            "Keine Cookies zur Fremdreichweitenmessung, keine Werbetracker.",
          ],
        },
        {
          title: "Ihre Rechte",
          body: [
            "Gemäß Datenschutz-Grundverordnung (DSGVO) haben Sie das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Übertragbarkeit Ihrer personenbezogenen Daten.",
            "Sie können diese Rechte über die Seite „Beratung“ geltend machen. Wir antworten innerhalb von vierundzwanzig Werkstunden.",
          ],
        },
        {
          title: "Speicherdauer",
          body: [
            "Der Schriftverkehr wird für die Dauer des Gesprächs aufbewahrt und auf einfache Anfrage gelöscht. Keine verlängerte Speicherung ohne angegebenen Grund.",
          ],
        },
      ],
    },
    a11y: {
      metaTitle: "Barrierefreiheit",
      metaDescription: "Unser Anspruch an Barrierefreiheit: WCAG 2.2 AA, Respekt vor System-Bewegungspräferenzen, Kontakt.",
      numeral: "Heft — Diskretion",
      rubric: "Barrierefreiheit",
      title: "Eine Lesung, für Auge und Ohr, für alle.",
      chapo: "Die Website strebt WCAG 2.2 AA an und respektiert die Bewegungs-Präferenzen des Systems.",
      sections: [
        {
          title: "Unser Anspruch",
          body: [
            "Die Website ist so gestaltet, dass sie das Konformitätsniveau WCAG 2.2 AA erreicht (Web Content Accessibility Guidelines).",
            "Wir prüfen regelmäßig Kontrast, Inhaltsreihenfolge, Tastaturnavigation und Kompatibilität mit Bildschirmlesern.",
          ],
        },
        {
          title: "Reduzierte Bewegung",
          body: [
            "Einstiegs-, Enthüllungs- und Übergangsanimationen der Website werden automatisch deaktiviert, sobald Ihr System auf „reduzierte Animationen“ (prefers-reduced-motion) eingestellt ist.",
            "Keine für das Verständnis wesentliche Animation ist vorhanden.",
          ],
        },
        {
          title: "Navigation",
          body: [
            "Die gesamte Navigation ist per Tastatur erreichbar. Interaktive Elemente verfügen über einen sichtbaren Fokus-Zustand.",
            "Links und Schaltflächen werden in ganzen Worten benannt, ohne Fachjargon.",
          ],
        },
        {
          title: "Meldung",
          body: [
            "Falls Sie auf eine Zugangs-Schwierigkeit stoßen, schreiben Sie uns über die Seite „Beratung“. Wir antworten innerhalb von vierundzwanzig Werkstunden und beheben, sofern möglich, unverzüglich.",
          ],
        },
      ],
    },
  },
  pieceSwitcher: {
    label: "Weitere Stücke",
    aria: (name) => `${name} – Stück ansehen`,
  },
  pieces: {
    "roi-rouge": {
      tagline: "Rechteck, rotes Acetat mit goldener Ausführung.",
      chapter: "Kapitel I · Der Salon",
      place: "Ein privater Salon, spät am Abend.",
      time: "Später Abend",
      silhouette: "Rechteck mit weichen Ecken, klarer Kante.",
      materie: "In der Masse gefärbtes Acetat, goldene Ausführung an den Scharnieren.",
      details: [
        "Rechteck-Silhouette",
        "Rotes Acetat in der Masse gefärbt",
        "Goldene Ausführung an den Scharnieren",
      ],
      notes: ["patiniertes Leder", "heller Tabak", "langer Pfeffer", "schwarzes Wachs"],
      scene: "Der Samt hält das Licht länger als die Haut.",
      teintes: [{ name: "Rouge Ember" }, { name: "Rouge Profond" }],
    },
    "roi-noir": {
      tagline: "Panto, waldgrünes Acetat mit Bronze-Nieten.",
      chapter: "Kapitel II · Die Jagd",
      place: "Ein Pavillon am Waldrand, am späten Nachmittag.",
      time: "Vor dem Dîner",
      silhouette: "Hohe Panto-Form, geschlossene Linie, weiche Kante.",
      materie: "Tiefgrünes Acetat, Bronze-Nieten mit matter Ausführung.",
      details: ["Hohe Panto-Silhouette", "Waldgrünes Acetat", "Matte Bronze-Nieten"],
      notes: ["Moos", "Zeder", "Sattelleder", "Pflanzentinte"],
      scene: "Feuchtes Holz, trockener Tweed. Nichts zu viel.",
      teintes: [{ name: "Noir Encre" }, { name: "Noir Fumé" }],
    },
    "roi-cristal": {
      tagline: "Oval, Kristall-Acetat mit silbernen Scharnieren.",
      chapter: "Kapitel III · Die Kapelle",
      place: "Eine Landkapelle, am frühen Morgen.",
      time: "Früher Morgen",
      silhouette: "Gestrecktes Oval, sehr feine kristalline Kante.",
      materie: "Transluzentes Kristall-Acetat, silberne Ausführung.",
      details: [
        "Gestreckte Oval-Silhouette",
        "Transluzentes Kristall-Acetat",
        "Silberne Ausführung an den Scharnieren",
      ],
      notes: ["Iris", "klares Wasser", "frische Mandel", "Seidenpapier"],
      scene: "Ein blasser Tag, ein Licht, das niemanden verrät.",
      teintes: [{ name: "Blanc de Neige" }, { name: "Blanc Nacré" }],
    },
    "roi-emeraude": {
      tagline: "Panto, smaragdgrünes Acetat mit goldener Ausführung.",
      chapter: "Kapitel IV · Das Dîner",
      place: "Ein Dîner in einer Orangerie, unter den Bäumen.",
      time: "Am Abend",
      silhouette: "Maskuline Panto-Form, gemeißelte Kante, lange Bügel.",
      materie: "Smaragdgrünes Acetat, goldene Ausführung am Rand.",
      details: [
        "Maskuline Panto-Silhouette",
        "Von Hand geschnittenes Smaragd-Acetat",
        "Goldene Ausführung am Rand",
      ],
      notes: ["Gardenie", "reife Feige", "gepuderte Veilchen", "bernsteinfarbener Wein"],
      scene: "Die Gläser klirren, die Kerzen flackern, jemand lacht leise.",
      teintes: [{ name: "Vert Émeraude" }, { name: "Vert Forêt" }],
    },
  },
  cahiers: {
    "geste-juste": {
      rubric: "Geste",
      title: "Die richtige Geste, drei Zentimeter vom Gesicht.",
      chapo:
        "Ein paar Grundsätze, die sich das Haus gibt – schlicht gehalten, damit sie tragen.",
      read: "5 Min",
      date: "September",
      body: [
        "Eine Brille trägt man drei Zentimeter vom Gesicht entfernt. Dieses Detail genügt, um die Art zu ändern, wie man jede Krümmung, jede Kante, jeden Winkel wählt.",
        "Wir montieren jedes Stück von Hand. Das heißt: in jedem Schritt zu entscheiden, wann man aufhört. Eine Maschine kann schneller sein; sie weiß nicht, im richtigen Moment anzuhalten.",
        "Der Finish ist der einzige Moment, in dem man alles noch einmal liest. Ein Stück verlässt das Atelier nicht, solange es diese Stille noch nicht hat – diese Art, das Licht wie eine Haut zu halten.",
        "Jedes Exemplar wird von Hand nummeriert. Nichts weiter. Nur das trennt Ihr Paar von unserem.",
      ],
    },
    "quatre-atmospheres": {
      rubric: "Kollektion",
      title: "Vier Atmosphären, ein einziger Blick.",
      chapo:
        "Die erste Kollektion zeichnet nicht vier Fassungen. Sie zeichnet vier Arten, einen Raum zu betreten.",
      read: "4 Min",
      date: "September",
      body: [
        "Roi. Vier Atmosphären – der Salon, die Jagd, die Kapelle, das Dîner. Vier Arten, einen Raum zu betreten.",
        "Roi Rouge gehört dem Abend: ein privater Salon, das Ende einer Soirée, die Farbe, die das Licht einen Augenblick länger hält als die Haut.",
        "Roi Noir ist ein langer Nachmittag: ein Pavillon am Waldrand, der trockene Tweed gegen das feuchte Holz. Nichts zu viel.",
        "Roi Cristal ist ein blasser Morgen, eine Landkapelle: ein Licht, das niemanden verrät.",
        "Roi Émeraude ist das Dîner unter den Bäumen, in einer Orangerie. Die Gläser klirren, die Kerzen flackern, jemand lacht leise.",
        "Kleine Auflage. Von Hand nummeriert. Direkt online verkauft.",
      ],
    },
    "quatre-vingts-euros": {
      rubric: "Auflage",
      title: "Warum eine kleine Auflage und ein fairer Preis.",
      chapo:
        "78,90 € pro Stück. Kein Schaufenster, kein Zwischenhandel. Eine Haltung, keine Provokation.",
      read: "4 Min",
      date: "August",
      body: [
        "Wir verkaufen direkt. Ein Stück soll nicht drei Schaufenster und zwei Kataloge durchlaufen, bevor es auf ein Gesicht kommt.",
        "Wir wollen, dass Roi getragen wird, nicht verwahrt. Dass es zu Gesichtern gehört, zu aktiven Leben – nicht zu Schaufenstern.",
        "Der Luxus spielt sich hier nicht im Preis ab. Er spielt sich in der Materie, in der Geste, in der Zurückhaltung ab. Vier Stücke im ersten Jahr. Nicht mehr.",
        "Ein Haus baut sich durch das, was es der Welt nicht hinzufügt. Wir verweigern drei Dinge: das überflüssige Schaufenster, den Zwischenhandel, die Beilage ohne Nutzen.",
        "Nichts zu viel, nichts zu wenig. Das ist alles.",
      ],
    },
  },
  langSwitcher: {
    label: "Sprache",
    fr: "Français",
    de: "Deutsch",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { fr, de };
