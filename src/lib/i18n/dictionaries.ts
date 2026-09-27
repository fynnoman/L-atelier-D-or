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
    feedback: string;
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
    labelRetractation: string;
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
    originEyebrow: string;
    originLabel: string;
    originTitle: string;
    originParas: string[];
    approachEyebrow: string;
    approachLabel: string;
    approachTitle: string;
    approachParas: string[];
    principles: { t: string; b: string }[];
    principleWord: string;
    collectionEyebrow: string;
    collectionLabel: string;
    collectionTitle: string;
    collectionBody: string;
    materialsEyebrow: string;
    materialsLabel: string;
    materialsTitle: string;
    materialsIntro: string;
    materialsItems: { t: string; b: string }[];
    ctaEyebrow: string;
    ctaTitle1: string;
    ctaTitle2: string;
    ctaBody: string;
    cta: string;
  };
  feedback: {
    metaTitle: string;
    metaDescription: string;
    eyebrowNum: string;
    eyebrowLabel: string;
    title1: string;
    title2: string;
    lede: string;
    formAria: string;
    nameLabel: string;
    emailLabel: string;
    modelLabel: string;
    modelPlaceholder: string;
    ratingLabel: string;
    ratingOptions: string[];
    messageLabel: string;
    consent: string;
    submit: string;
    submitting: string;
    thanksTitle: string;
    thanksBody: string;
    errorEmpty: string;
    errorSetup: string;
    errorSend: string;
    conseilFooterBody: string;
    conseilFooterCta: string;
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
    retractation: {
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
    editionBreve: "",
    numeroteeALaMain: "",
    petiteMaison: "Maison française",
    ventEnLigne: "Vente en ligne.",
    voir: "Voir",
    voirLaPiece: "Voir la pièce",
    voirLaCollection: "Voir la collection",
    toutLaCollection: "Toute la collection",
    conseillez: "Demander conseil",
    ecrireLaMaison: "Écrire à la maison",
    lAtelier: "L’Atelier",
    decouvrirLAtelier: "Découvrir l’atelier",
    defiler: "Défiler",
    passerIntro: "Passer l’intro",
    menu: "Menu",
    ouvrirMenu: "Ouvrir le menu",
    fermerMenu: "Fermer le menu",
    skipToContent: "Aller au contenu",
    voyezLeMonde1: "Voyez le monde selon",
    voyezLeMonde2: "votre propre perspective.",
    quatrePiecesParAn: "Roi. La collection.",
    editionBreveDescription: "",
    edition: "",
    numeral: "Numéral",
    pageOf: (n) => `Page ${n}`,
    remisNumeroteALaMain: "Roi · Collection I",
  },
  nav: {
    edition: "",
    collection: "Collection",
    atelier: "Atelier",
    journal: "Journal",
    avis: "Avis",
    questions: "Questions",
    conseil: "Conseil",
    feedback: "Feedback",
    maisonEyebrow: "Maison",
    contactEyebrow: "Contact",
    houseIntro: "Maison française de lunetterie.\nParis · Berlin · Londres.",
    contactWriteUs: "Nous écrire",
    ctaCollection: "Voir la collection",
  },
  footer: {
    petiteMaisonFr: "Maison française de lunetterie",
    ligne1: "Maison française de lunetterie.",
    ligne2: "Vente en ligne, sur rendez-vous à Paris, Berlin et Londres.",
    columnMaison: "Maison",
    columnCollection: "Collection",
    columnMentions: "Mentions",
    labelPremiereCollection: "",
    labelMentionsLegales: "Mentions légales",
    labelConfidentialite: "Confidentialité",
    labelAccessibilite: "Accessibilité",
    labelRetractation: "Rétractation",
    copyright: "© L’Atelier d’Or",
    editorialTag: "Maison française de lunetterie",
    editorialTag2: "Paris · Berlin · Londres",
  },
  newsletter: {
    label: "La lettre de la maison",
    description:
      "Nouvelles pièces, journal, rendez-vous. Envoyée avec parcimonie.",
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
      eyebrow: "Roi · Collection I",
      title1: "Voyez le monde selon",
      title2: "votre propre perspective.",
      lede: "Roi. La collection en quatre pièces.",
      ctaCollection: "Voir la collection",
      ctaConseil: "Demander conseil",
      ctaAtelier: "L’Atelier",
      scroll: "Défiler",
      edition: "",
    },
    showcase: {
      eyebrow: "Collection",
      title1: "Roi.",
      title2: "Quatre pièces, un seul regard.",
      lede: "Quatre atmosphères, quatre heures, quatre manières d’entrer dans une pièce.",
      piece: "Pièce",
      footerLine: "Roi · Collection I",
      link: "Toute la collection",
    },
    alternating: {
      voirLaPiece: "Voir la pièce",
    },
    avisTeaser: {
      eyebrow: "Feedback",
      title1: "Vous portez Roi ?",
      title2: "Dites-nous quelques mots.",
      body: "Un retour honnête vaut mieux qu’un slogan. Écrivez-nous ce que vous portez, comment vous le portez, ce qui pourrait être meilleur.",
      ctaShare: "Partager un retour",
      ctaSee: "Demander conseil",
    },
    endCall: {
      eyebrow: "Roi · Collection I",
      line1: "Voyez le monde selon",
      line2: "votre propre perspective.",
      body: "Roi. Quatre pièces, un seul regard.",
      ctaCollection: "Voir la collection",
      ctaAtelier: "Découvrir l’atelier",
    },
  },
  collectionIndex: {
    metaTitle: "La Collection — Roi.",
    metaDescription:
      "Roi. Quatre pièces : Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude. Acétate italien, montage à la main, 78,90 € l’exemplaire.",
    breadcrumbHome: "Accueil",
    breadcrumbCollection: "Collection",
    eyebrowNumeral: "Collection I",
    eyebrowLabel: "Roi",
    title: ["Roi.", "Quatre atmosphères,", "un seul regard."],
    lede:
      "Quatre pièces, quatre atmosphères.\nUne écriture éditoriale, une seule signature.",
    subtitles: "Le Salon · La Chasse · La Chapelle · Le Dîner",
    subtitles2: "Paris · Berlin · Londres",
    editorialTitle1: "Roi se porte.",
    editorialTitle2: "Elle ne s’expose pas.",
    editorialBody:
      "La collection n’est pas présentée en vitrine. Nous la montrons sur rendez-vous, entre quatre yeux, à Paris, Berlin et Londres.",
    editorialCta: "Découvrir l’atelier",
  },
  piece: {
    metaDescriptionSuffix: (name, price) =>
      `${name} — acétate italien, montage à la main. ${price}.`,
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
    section3Label: "L’acquérir",
    prixParPiece: "Prix par pièce",
    niPlusNiMoins: "Verres correcteurs ou solaires inclus.",
    editionBreveBody:
      "Livrée dans son écrin dédié. Remise en main propre à Paris, transport suivi ailleurs en Europe.",
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
    metaTitle: "La Maison",
    metaDescription:
      "L’Atelier d’Or, maison française de lunetterie. Origine, démarche, matériaux et détails de la collection Roi.",
    heroEyebrowNum: "La Maison",
    heroEyebrowLabel: "L’Atelier d’Or",
    heroTitle1: "Une maison",
    heroTitle2: "française de lunetterie.",
    heroLede:
      "L’Atelier d’Or dessine et fabrique des lunettes en France. Une seule collection à la fois, pensée comme un objet éditorial plus que comme un produit.",
    originEyebrow: "§ 01",
    originLabel: "L’origine",
    originTitle: "Une maison, une signature.",
    originParas: [
      "L’Atelier d’Or est né du besoin d’une lunetterie plus claire : un dessin, une matière, un geste. La maison choisit d’écrire une collection à la fois, sans catalogue, sans surenchère.",
      "L’écriture éditoriale précède la pièce. Chaque monture s’inscrit dans un chapitre — un lieu, une heure, une atmosphère — et non dans une saison commerciale.",
      "Le studio de design est en France ; l’acétate vient d’Italie, choisi plaque par plaque ; le montage est effectué à la main, à Paris.",
    ],
    approachEyebrow: "§ 02",
    approachLabel: "La démarche",
    approachTitle: "Trois principes qui tiennent la ligne.",
    approachParas: [
      "Nous ne cherchons pas la nouveauté à tout prix. Nous cherchons la justesse d’un dessin, la densité d’une matière, l’équité d’un prix. Ce sont les trois seuls arbitres du travail.",
    ],
    principles: [
      {
        t: "Un dessin éditorial",
        b: "Chaque pièce s’écrit avant d’être dessinée. Le trait vient d’un lieu, d’un rythme, d’une lumière — pas d’une tendance de saison.",
      },
      {
        t: "Une matière choisie",
        b: "Acétate italien coloré dans la masse, charnières et rivets métalliques finis à la main. Nous choisissons la plaque comme un tissu.",
      },
      {
        t: "Un circuit direct",
        b: "Vente en ligne et sur rendez-vous à Paris, Berlin, Londres. Le prix reflète la pièce, jamais l’intermédiaire.",
      },
    ],
    principleWord: "Principe",
    collectionEyebrow: "§ 03",
    collectionLabel: "La collection",
    collectionTitle: "Roi — quatre pièces, un seul regard.",
    collectionBody:
      "La première collection, Roi, décline quatre atmosphères : le salon, la chasse, la chapelle, le dîner. Quatre pièces qui partagent un dessin, quatre teintes qui ouvrent quatre façons d’entrer dans une pièce.",
    materialsEyebrow: "§ 04",
    materialsLabel: "Matières & détails",
    materialsTitle: "Ce qui compose une pièce.",
    materialsIntro:
      "Les matières sont choisies pour leur densité, leur tenue de couleur et leur comportement à la main. Les détails s’ajoutent avec parcimonie.",
    materialsItems: [
      {
        t: "Acétate italien",
        b: "Coloré dans la masse, plaque sélectionnée pour sa profondeur et sa tenue à la lumière. Poli à la main jusqu’au silence.",
      },
      {
        t: "Charnières métalliques",
        b: "Charnières en laiton finies dorées, argentées ou bronze selon la pièce. Vis apparentes, réglage possible chez tout opticien.",
      },
      {
        t: "Silhouettes calibrées",
        b: "Rectangle, panto haute, ovale allongé, panto masculine. Quatre silhouettes retenues sur plusieurs dizaines de dessins d’étude.",
      },
      {
        t: "Verres à la demande",
        b: "Correcteurs ou solaires, montés par notre maître opticien. Inclus au prix de la pièce.",
      },
    ],
    ctaEyebrow: "Collection",
    ctaTitle1: "Voyez le monde selon",
    ctaTitle2: "votre propre perspective.",
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
    retractation: {
      metaTitle: "Droit de rétractation",
      metaDescription:
        "Vos droits d’acquéreur : délai de rétractation, procédure, remboursement.",
      numeral: "Cahier — Discrétion",
      rubric: "Rétractation",
      title: "Un délai, un geste, un remboursement.",
      chapo:
        "Vous disposez d’un droit de rétractation de quatorze jours à compter de la livraison de votre pièce.",
      sections: [
        {
          title: "Délai",
          body: [
            "Vous disposez d’un délai de quatorze jours calendaires à compter du jour de la réception de la pièce pour exercer votre droit de rétractation, sans avoir à justifier de motif.",
            "Ce droit s’applique aux acheteurs consommateurs au sein de l’Union européenne, conformément au Code de la consommation et à la directive européenne 2011/83/UE.",
          ],
        },
        {
          title: "Comment nous prévenir",
          body: [
            "Pour exercer votre droit de rétractation, écrivez-nous via la page « Conseil » ou par courriel, en indiquant le nom sur la commande et le numéro de la pièce, avant l’expiration du délai de quatorze jours.",
            "Une déclaration écrite dénuée d’ambiguïté suffit. Nous accusons réception sans délai et vous transmettons la procédure de retour.",
          ],
        },
        {
          title: "Retour de la pièce",
          body: [
            "La pièce doit nous être retournée dans son écrin, complète et non altérée, dans les quatorze jours suivant votre déclaration.",
            "Les frais de retour restent à votre charge, sauf indication contraire de notre part.",
          ],
        },
        {
          title: "Remboursement",
          body: [
            "Le remboursement de la pièce est effectué au plus tard quatorze jours après réception du retour, par le moyen de paiement utilisé lors de l’achat, sauf accord contraire.",
            "Les frais de livraison initiaux sont remboursés dans les mêmes délais, à l’exception du surcoût lié à un mode de livraison plus onéreux que la livraison standard.",
          ],
        },
        {
          title: "Exceptions",
          body: [
            "Les pièces personnalisées — montage de verres correcteurs à votre correction visuelle — ne sont pas soumises au droit de rétractation, conformément à l’article L.221-28 du Code de la consommation.",
            "Pour toute question relative à ce cas particulier, écrivez-nous : nous étudions chaque situation.",
          ],
        },
      ],
    },
  },
  feedback: {
    metaTitle: "Feedback",
    metaDescription:
      "Un retour honnête sur la collection Roi. Ce que vous portez, ce qui pourrait être meilleur.",
    eyebrowNum: "Feedback",
    eyebrowLabel: "Un retour à la maison",
    title1: "Ce que vous",
    title2: "avez à nous dire.",
    lede:
      "Un retour bref et honnête vaut mieux qu’un long compliment. Nous lisons chaque message et publions les retours qui décrivent la pièce sans retouche.",
    formAria: "Formulaire de retour d’expérience",
    nameLabel: "Votre nom",
    emailLabel: "Votre e-mail",
    modelLabel: "Pièce concernée",
    modelPlaceholder: "Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude…",
    ratingLabel: "Votre appréciation",
    ratingOptions: ["Excellente", "Bonne", "Passable", "À revoir"],
    messageLabel: "Votre retour",
    consent: "J’accepte que ce retour puisse être cité, sans mon nom, sur la page Avis.",
    submit: "Envoyer mon retour",
    submitting: "Envoi en cours…",
    thanksTitle: "Merci.",
    thanksBody: "Nous avons bien reçu votre retour. Nous vous répondons personnellement.",
    errorEmpty: "Quelques mots et votre nom, pour que nous puissions vous répondre.",
    errorSetup: "Le service est en cours d’installation. Réessayez plus tard.",
    errorSend: "Votre message n’a pas été envoyé. Vos mots sont conservés ; veuillez réessayer.",
    conseilFooterBody:
      "Une question plus personnelle, un conseil sur une pièce, un ajustement ?",
    conseilFooterCta: "Demander conseil",
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
    editionBreve: "",
    numeroteeALaMain: "",
    petiteMaison: "Französisches Haus",
    ventEnLigne: "Online-Verkauf.",
    voir: "Ansehen",
    voirLaPiece: "Zum Stück",
    voirLaCollection: "Zur Kollektion",
    toutLaCollection: "Ganze Kollektion",
    conseillez: "Beratung anfragen",
    ecrireLaMaison: "Dem Haus schreiben",
    lAtelier: "Atelier",
    decouvrirLAtelier: "Atelier entdecken",
    defiler: "Scrollen",
    passerIntro: "Intro überspringen",
    menu: "Menü",
    ouvrirMenu: "Menü öffnen",
    fermerMenu: "Menü schließen",
    skipToContent: "Zum Inhalt springen",
    voyezLeMonde1: "Sehen Sie die Welt aus",
    voyezLeMonde2: "Ihrer eigenen Perspektive.",
    quatrePiecesParAn: "Roi. Die Kollektion.",
    editionBreveDescription: "",
    edition: "",
    numeral: "Nummer",
    pageOf: (n) => `Seite ${n}`,
    remisNumeroteALaMain: "Roi · Kollektion I",
  },
  nav: {
    edition: "",
    collection: "Kollektion",
    atelier: "Atelier",
    journal: "Journal",
    avis: "Stimmen",
    questions: "Fragen",
    conseil: "Beratung",
    feedback: "Feedback",
    maisonEyebrow: "Haus",
    contactEyebrow: "Kontakt",
    houseIntro: "Französisches Brillenhaus.\nParis · Berlin · London.",
    contactWriteUs: "Schreiben Sie uns",
    ctaCollection: "Zur Kollektion",
  },
  footer: {
    petiteMaisonFr: "Französisches Brillenhaus",
    ligne1: "Französisches Brillenhaus.",
    ligne2: "Online-Verkauf, nach Termin in Paris, Berlin und London.",
    columnMaison: "Haus",
    columnCollection: "Kollektion",
    columnMentions: "Rechtliches",
    labelPremiereCollection: "",
    labelMentionsLegales: "Impressum",
    labelConfidentialite: "Datenschutz",
    labelAccessibilite: "Barrierefreiheit",
    labelRetractation: "Widerrufsrecht",
    copyright: "© L’Atelier d’Or",
    editorialTag: "Französisches Brillenhaus",
    editorialTag2: "Paris · Berlin · London",
  },
  newsletter: {
    label: "Der Brief des Hauses",
    description:
      "Neue Stücke, Journal, Termine. Mit Zurückhaltung verschickt.",
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
      eyebrow: "Roi · Kollektion I",
      title1: "Sehen Sie die Welt aus",
      title2: "Ihrer eigenen Perspektive.",
      lede: "Roi. Die Kollektion in vier Stücken.",
      ctaCollection: "Zur Kollektion",
      ctaConseil: "Beratung anfragen",
      ctaAtelier: "Atelier",
      scroll: "Scrollen",
      edition: "",
    },
    showcase: {
      eyebrow: "Kollektion",
      title1: "Roi.",
      title2: "Vier Stücke, ein einziger Blick.",
      lede: "Vier Atmosphären, vier Stunden, vier Arten, einen Raum zu betreten.",
      piece: "Stück",
      footerLine: "Roi · Kollektion I",
      link: "Ganze Kollektion",
    },
    alternating: {
      voirLaPiece: "Zum Stück",
    },
    avisTeaser: {
      eyebrow: "Feedback",
      title1: "Tragen Sie Roi?",
      title2: "Sagen Sie uns ein paar Worte.",
      body: "Ein ehrliches Feedback ist mehr wert als ein Slogan. Schreiben Sie uns, was Sie tragen, wie Sie es tragen, was besser sein könnte.",
      ctaShare: "Feedback teilen",
      ctaSee: "Beratung anfragen",
    },
    endCall: {
      eyebrow: "Roi · Kollektion I",
      line1: "Sehen Sie die Welt aus",
      line2: "Ihrer eigenen Perspektive.",
      body: "Roi. Vier Stücke, ein einziger Blick.",
      ctaCollection: "Zur Kollektion",
      ctaAtelier: "Atelier entdecken",
    },
  },
  collectionIndex: {
    metaTitle: "Die Kollektion – Roi.",
    metaDescription:
      "Roi. Vier Stücke: Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude. Italienisches Acetat, Handmontage, 78,90 € pro Stück.",
    breadcrumbHome: "Startseite",
    breadcrumbCollection: "Kollektion",
    eyebrowNumeral: "Kollektion I",
    eyebrowLabel: "Roi",
    title: ["Roi.", "Vier Atmosphären,", "ein einziger Blick."],
    lede:
      "Vier Stücke, vier Atmosphären.\nEine editoriale Handschrift, eine einzige Signatur.",
    subtitles: "Der Salon · Die Jagd · Die Kapelle · Das Dîner",
    subtitles2: "Paris · Berlin · London",
    editorialTitle1: "Roi wird getragen.",
    editorialTitle2: "Nicht ausgestellt.",
    editorialBody:
      "Die Kollektion steht in keinem Schaufenster. Wir zeigen sie nach Terminvereinbarung, unter vier Augen, in Paris, Berlin und London.",
    editorialCta: "Atelier entdecken",
  },
  piece: {
    metaDescriptionSuffix: (name, price) =>
      `${name} – italienisches Acetat, Handmontage. ${price}.`,
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
    section3Label: "Erwerben",
    prixParPiece: "Preis pro Stück",
    niPlusNiMoins: "Korrektur- oder Sonnengläser inklusive.",
    editionBreveBody:
      "Geliefert im eigenen Etui. Persönliche Übergabe in Paris, in Europa per verfolgtem Versand.",
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
    metaTitle: "Das Haus",
    metaDescription:
      "L’Atelier d’Or, französisches Brillenhaus. Herkunft, Haltung, Materialien und Details der Kollektion Roi.",
    heroEyebrowNum: "Das Haus",
    heroEyebrowLabel: "L’Atelier d’Or",
    heroTitle1: "Ein französisches",
    heroTitle2: "Brillenhaus.",
    heroLede:
      "L’Atelier d’Or entwirft und fertigt Brillen in Frankreich. Jeweils eine Kollektion, gedacht als editoriales Objekt, nicht als Produkt einer Saison.",
    originEyebrow: "§ 01",
    originLabel: "Die Herkunft",
    originTitle: "Ein Haus, eine Handschrift.",
    originParas: [
      "L’Atelier d’Or entstand aus dem Wunsch nach einer klareren Brillenwelt: ein Entwurf, ein Material, eine Geste. Das Haus schreibt jeweils eine Kollektion, ohne Katalog, ohne Überangebot.",
      "Die editoriale Handschrift geht dem Objekt voraus. Jede Fassung steht in einem Kapitel – ein Ort, eine Stunde, eine Atmosphäre – und nicht in einer kommerziellen Saison.",
      "Das Designstudio arbeitet in Frankreich. Das Acetat kommt aus Italien, Platte für Platte ausgewählt. Die Montage erfolgt in Paris, von Hand.",
    ],
    approachEyebrow: "§ 02",
    approachLabel: "Die Haltung",
    approachTitle: "Drei Prinzipien, die die Linie halten.",
    approachParas: [
      "Wir suchen nicht das Neue um jeden Preis. Wir suchen die Richtigkeit eines Entwurfs, die Dichte eines Materials, die Fairness eines Preises. Das sind die drei einzigen Maßstäbe der Arbeit.",
    ],
    principles: [
      {
        t: "Editorialer Entwurf",
        b: "Jede Fassung wird geschrieben, bevor sie gezeichnet wird. Der Strich kommt von einem Ort, einem Rhythmus, einem Licht – nicht aus dem Saison-Trend.",
      },
      {
        t: "Gewähltes Material",
        b: "Italienisches Acetat, in der Masse gefärbt. Scharniere und Nieten aus Metall, von Hand finisiert. Wir wählen die Platte wie einen Stoff.",
      },
      {
        t: "Direkter Weg",
        b: "Online-Verkauf und private Termine in Paris, Berlin, London. Der Preis steht für das Stück, nie für die Zwischenhändler.",
      },
    ],
    principleWord: "Prinzip",
    collectionEyebrow: "§ 03",
    collectionLabel: "Die Kollektion",
    collectionTitle: "Roi – vier Stücke, ein einziger Blick.",
    collectionBody:
      "Die erste Kollektion, Roi, entfaltet vier Atmosphären: den Salon, die Jagd, die Kapelle, das Dîner. Vier Fassungen mit einer gemeinsamen Handschrift, vier Farben, die vier Arten öffnen, einen Raum zu betreten.",
    materialsEyebrow: "§ 04",
    materialsLabel: "Materialien & Details",
    materialsTitle: "Was ein Stück zusammensetzt.",
    materialsIntro:
      "Die Materialien werden nach Dichte, Farbtreue und Verhalten in der Hand gewählt. Details werden mit Zurückhaltung hinzugefügt.",
    materialsItems: [
      {
        t: "Italienisches Acetat",
        b: "In der Masse gefärbt, die Platte für ihre Tiefe und ihr Lichtverhalten ausgesucht. Von Hand poliert, bis das Material ruhig wird.",
      },
      {
        t: "Metallscharniere",
        b: "Messing, je nach Stück golden, silbern oder bronze. Sichtbare Schrauben, bei jedem Optiker justierbar.",
      },
      {
        t: "Kalibrierte Silhouetten",
        b: "Rechteck, hohe Panto-Form, gestrecktes Oval, maskuline Panto-Form. Vier Silhouetten aus dutzenden Studienzeichnungen.",
      },
      {
        t: "Gläser nach Wunsch",
        b: "Korrektur- oder Sonnengläser, montiert durch unseren Meisteroptiker. Im Preis inbegriffen.",
      },
    ],
    ctaEyebrow: "Kollektion",
    ctaTitle1: "Sehen Sie die Welt aus",
    ctaTitle2: "Ihrer eigenen Perspektive.",
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
    retractation: {
      metaTitle: "Widerrufsrecht",
      metaDescription:
        "Ihre Rechte als Käufer: Widerrufsfrist, Verfahren, Erstattung.",
      numeral: "Heft — Diskretion",
      rubric: "Widerrufsrecht",
      title: "Eine Frist, eine Geste, eine Erstattung.",
      chapo:
        "Sie haben ab Lieferung ein vierzehntägiges Widerrufsrecht.",
      sections: [
        {
          title: "Frist",
          body: [
            "Sie haben ab dem Tag des Erhalts des Stücks vierzehn Kalendertage Zeit, Ihr Widerrufsrecht ohne Angabe von Gründen auszuüben.",
            "Dieses Recht gilt für Verbraucher in der Europäischen Union gemäß den nationalen Regelungen und der EU-Richtlinie 2011/83/EU.",
          ],
        },
        {
          title: "Wie Sie uns informieren",
          body: [
            "Um Ihr Widerrufsrecht auszuüben, schreiben Sie uns über die Seite „Beratung“ oder per E-Mail. Nennen Sie den Namen auf der Bestellung und die Stücknummer, bevor die vierzehn Tage abgelaufen sind.",
            "Eine schriftliche eindeutige Erklärung genügt. Wir bestätigen den Erhalt unverzüglich und übermitteln Ihnen das Rücksendeverfahren.",
          ],
        },
        {
          title: "Rücksendung des Stücks",
          body: [
            "Das Stück muss uns im eigenen Etui, vollständig und unverändert, innerhalb von vierzehn Tagen nach Ihrer Erklärung zugesandt werden.",
            "Die Rücksendekosten trägt der Käufer, sofern nicht ausdrücklich anders vereinbart.",
          ],
        },
        {
          title: "Erstattung",
          body: [
            "Die Erstattung des Stücks erfolgt spätestens vierzehn Tage nach Eingang der Rücksendung, über das ursprünglich verwendete Zahlungsmittel, sofern nicht anders vereinbart.",
            "Die ursprünglichen Lieferkosten werden im selben Zeitraum erstattet, mit Ausnahme etwaiger Mehrkosten, die durch die Wahl einer teureren Versandart entstanden sind.",
          ],
        },
        {
          title: "Ausnahmen",
          body: [
            "Individualisierte Stücke – Montage von Korrekturgläsern nach Ihrer persönlichen Sehstärke – sind vom Widerrufsrecht ausgenommen, gemäß den geltenden Verbraucherschutzregelungen.",
            "Für Fragen zu diesem Sonderfall schreiben Sie uns: wir prüfen jede Situation.",
          ],
        },
      ],
    },
  },
  feedback: {
    metaTitle: "Feedback",
    metaDescription:
      "Ein ehrliches Feedback zur Kollektion Roi. Was Sie tragen, was besser sein könnte.",
    eyebrowNum: "Feedback",
    eyebrowLabel: "Eine Rückmeldung an das Haus",
    title1: "Was Sie",
    title2: "uns sagen möchten.",
    lede:
      "Ein kurzes, ehrliches Feedback ist mehr wert als ein langes Kompliment. Wir lesen jede Nachricht und veröffentlichen nur solche, die das Stück ohne Retusche beschreiben.",
    formAria: "Formular für Ihre Rückmeldung",
    nameLabel: "Ihr Name",
    emailLabel: "Ihre E-Mail",
    modelLabel: "Betreffendes Stück",
    modelPlaceholder: "Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude…",
    ratingLabel: "Ihre Einschätzung",
    ratingOptions: ["Ausgezeichnet", "Gut", "Ausreichend", "Zu überarbeiten"],
    messageLabel: "Ihre Rückmeldung",
    consent: "Ich bin einverstanden, dass diese Rückmeldung – ohne meinen Namen – auf der Stimmen-Seite zitiert werden darf.",
    submit: "Feedback senden",
    submitting: "Wird gesendet…",
    thanksTitle: "Danke.",
    thanksBody: "Ihre Rückmeldung ist eingegangen. Wir antworten persönlich.",
    errorEmpty: "Ein paar Worte und Ihr Name, damit wir antworten können.",
    errorSetup: "Der Dienst wird derzeit eingerichtet. Bitte später erneut versuchen.",
    errorSend: "Ihre Nachricht wurde nicht gesendet. Ihre Worte bleiben erhalten; bitte erneut versuchen.",
    conseilFooterBody:
      "Sie haben eine persönlichere Frage, brauchen Beratung zu einem Stück oder eine Anpassung?",
    conseilFooterCta: "Beratung anfragen",
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
