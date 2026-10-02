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
    promiseEyebrow: string;
    promiseTitle: string;
    promisePoints: { t: string; b: string }[];
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
    processEyebrow: string;
    processTitle: string;
    processLede: string;
    steps: { t: string; b: string }[];
    rendezvousEyebrow: string;
    rendezvousTitle: string;
    rendezvousBody: string;
    rendezvousCities: string[];
    expectEyebrow: string;
    expectTitle: string;
    expectItems: string[];
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
    petiteMaison: "Maison de lunetterie",
    ventEnLigne: "Vente en ligne.",
    voir: "Voir",
    voirLaPiece: "Voir la pièce",
    voirLaCollection: "Voir la collection",
    toutLaCollection: "Toute la collection",
    conseillez: "Demander conseil",
    ecrireLaMaison: "Écrire à la maison",
    lAtelier: "L’Atelier",
    decouvrirLAtelier: "Découvrir la maison",
    defiler: "Défiler",
    passerIntro: "Passer l’intro",
    menu: "Menu",
    ouvrirMenu: "Ouvrir le menu",
    fermerMenu: "Fermer le menu",
    skipToContent: "Aller au contenu",
    voyezLeMonde1: "Voyez le monde depuis",
    voyezLeMonde2: "votre propre perspective.",
    quatrePiecesParAn: "Roi. La collection.",
    editionBreveDescription: "",
    edition: "",
    numeral: "N°",
    pageOf: (n) => `Page ${n}`,
    remisNumeroteALaMain: "Roi · La collection",
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
    labelRetractation: "Droit de rétractation",
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
      eyebrow: "Roi · La collection",
      title1: "Voyez le monde depuis",
      title2: "votre propre perspective.",
      lede: "Roi. La collection.",
      ctaCollection: "Voir la collection",
      ctaConseil: "Demander conseil",
      ctaAtelier: "La maison",
      scroll: "Défiler",
      edition: "",
    },
    showcase: {
      eyebrow: "La collection",
      title1: "Roi.",
      title2: "Une signature, quatre pièces.",
      lede: "Acétate italien, montage à la main, charnières métalliques. Quatre pièces à porter chaque jour.",
      piece: "Pièce",
      footerLine: "Roi · La collection",
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
      eyebrow: "Roi · La collection",
      line1: "Voyez le monde depuis",
      line2: "votre propre perspective.",
      body: "Roi. Une signature, quatre pièces.",
      ctaCollection: "Voir la collection",
      ctaAtelier: "Découvrir la maison",
    },
  },
  collectionIndex: {
    metaTitle: "La Collection — Roi.",
    metaDescription:
      "Roi. Quatre pièces : Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude. Acétate italien, montage à la main, 78,90 € l’exemplaire.",
    breadcrumbHome: "Accueil",
    breadcrumbCollection: "Collection",
    eyebrowNumeral: "",
    eyebrowLabel: "Roi",
    title: ["Roi.", "Une signature,", "quatre pièces."],
    lede:
      "Acétate italien, charnières métalliques, montage à la main.\nUne écriture éditoriale, une seule signature.",
    subtitles: "Rouge · Noir · Cristal · Émeraude",
    subtitles2: "Paris · Berlin · Londres",
    editorialTitle1: "Roi se porte.",
    editorialTitle2: "Elle ne s’expose pas.",
    editorialBody:
      "La collection n’est pas présentée en vitrine. Nous la montrons sur rendez-vous, entre quatre yeux, à Paris, Berlin et Londres.",
    editorialCta: "Découvrir la maison",
  },
  piece: {
    metaDescriptionSuffix: (name, price) =>
      `${name} — acétate italien, montage à la main. ${price}.`,
    chapterPrefix: "",
    theLieu: "Le lieu",
    theHeure: "L’heure",
    silhouette: "Silhouette",
    section1Eyebrow: "",
    section1Label: "La matière",
    section2Eyebrow: "",
    section2Label: "Notes sensorielles",
    section2Title1: "Comment cette paire",
    section2Title2: "habite un lieu.",
    section2Body:
      "Quatre notes — ni parfum, ni matière : une manière de tenir la lumière.",
    noteLabel: (n) => `Note 0${n}`,
    lireQuatreAtmospheres: "Lire le journal",
    section3Eyebrow: "",
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
    section4Eyebrow: "",
    section4Label: "Les trois autres pièces",
    othersPieces: "Les trois autres pièces",
  },
  atelier: {
    metaTitle: "La Maison",
    metaDescription:
      "L’Atelier d’Or, maison française de lunetterie. Histoire, savoir-faire, matériaux et détails de la collection Roi.",
    heroEyebrowNum: "",
    heroEyebrowLabel: "La maison",
    heroTitle1: "Une maison",
    heroTitle2: "française de lunetterie.",
    heroLede:
      "L’Atelier d’Or dessine et fabrique des lunettes en France. Acétate italien, charnières métalliques, montage à la main, une collection pensée pour être portée chaque jour.",
    originEyebrow: "",
    originLabel: "Histoire",
    originTitle: "D’un atelier parisien à la collection Roi.",
    originParas: [
      "L’Atelier d’Or est née d’un désaccord : la lunetterie contemporaine confondait trop souvent accessoire et objet jetable. La maison a été fondée pour y répondre par une seule chose — une pièce dessinée pour durer, à porter plusieurs années sans qu’elle vieillisse.",
      "Le studio est installé à Paris. Les acétates sont choisis en Italie, auprès des mêmes manufactures qui fournissent les grandes maisons depuis plus d’un siècle. Chaque plaque est examinée pour sa profondeur, sa densité, sa tenue à la lumière.",
      "La monture est ensuite montée à la main, à Paris, dans un atelier partenaire. Le fini est contrôlé à chaque étape : rivets, charnières, polissage. Rien n’est délégué à la machine lorsque l’œil humain fait mieux.",
    ],
    approachEyebrow: "",
    approachLabel: "Design",
    approachTitle: "Trois principes qui tiennent la ligne.",
    approachParas: [
      "Nous ne cherchons pas la nouveauté à tout prix. Nous cherchons la justesse d’un dessin, la densité d’une matière, l’équité d’un prix. Ce sont les trois seuls arbitres du travail.",
    ],
    principles: [
      {
        t: "Un dessin durable",
        b: "La silhouette doit tenir cinq ou dix ans, pas une saison. Chaque courbe est travaillée pour résister à la mode.",
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
    collectionEyebrow: "",
    collectionLabel: "La collection",
    collectionTitle: "Roi — une signature, quatre pièces.",
    collectionBody:
      "Roi réunit quatre pièces : Rouge, Noir, Cristal, Émeraude. Une même signature de dessin, quatre teintes d’acétate italien, quatre finitions métalliques. Pensée pour être portée du matin au soir, en ville comme en intérieur.",
    materialsEyebrow: "",
    materialsLabel: "Matériaux & détails",
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
    ctaTitle1: "Voyez le monde depuis",
    ctaTitle2: "votre propre perspective.",
    ctaBody: "La collection Roi se découvre en ligne. Une signature, quatre pièces.",
    cta: "Voir la collection",
  },
  avis: {
    metaTitle: "Avis",
    metaDescription:
      "Ce que la maison entend. Les premiers témoignages arrivent — la parole se prend en confiance.",
    eyebrowNum: "",
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
    eyebrowNum: "",
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
        eyebrow: "Le produit",
        qas: [
          { q: "Combien coûte une pièce Roi ?", a: "Chaque pièce de la collection Roi est proposée à 78,90 €. Ni plus, ni moins." },
          { q: "Combien de modèles composent la collection ?", a: "La première collection comprend quatre pièces : Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude." },
          { q: "Chaque exemplaire est-il numéroté ?", a: "Oui. Chaque exemplaire est numéroté à la main, un par un." },
          { q: "Puis-je choisir entre plusieurs coloris ?", a: "Chaque pièce a une teinte définie. Les quatre atmosphères correspondent aux quatre pièces." },
        ],
      },
      {
        title: "La commande",
        eyebrow: "Commander",
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
        eyebrow: "Livraison",
        qas: [
          { q: "Où livrez-vous ?", a: "En cours de rédaction. Les zones de livraison seront communiquées à l’ouverture de la boutique.", pending: true },
          { q: "Quels sont les délais ?", a: "En cours de rédaction. Les délais indicatifs seront communiqués à l’ouverture.", pending: true },
          { q: "Quels sont les frais de port ?", a: "En cours de rédaction. La grille sera publiée à l’ouverture.", pending: true },
        ],
      },
      {
        title: "Le retour",
        eyebrow: "Retour & échange",
        qas: [
          { q: "Puis-je retourner ma pièce ?", a: "En cours de rédaction. Les conditions de retour seront publiées à l’ouverture de la boutique. Le droit de rétractation légal de quatorze jours s’applique en tout état de cause aux acheteurs consommateurs dans l’Union européenne.", pending: true },
          { q: "Comment procéder à un retour ?", a: "En cours de rédaction.", pending: true },
        ],
      },
      {
        title: "L’entretien",
        eyebrow: "Entretien",
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
    eyebrowNum: "",
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
    processEyebrow: "Comment nous conseillons",
    processTitle: "Un conseil tenu par un maître opticien.",
    processLede:
      "Pas un formulaire automatisé. Chaque demande est lue, étudiée et suivie d’une réponse personnelle sous vingt-quatre heures ouvrées.",
    steps: [
      {
        t: "Vous nous écrivez",
        b: "Dites-nous ce que vous cherchez : silhouette, teinte, correction, usage quotidien. Nous lisons chaque mot.",
      },
      {
        t: "Nous étudions",
        b: "Un maître opticien étudie votre demande en regard de la collection. Nous choisissons la pièce qui épouse votre visage, pas la plus vendue.",
      },
      {
        t: "Nous répondons",
        b: "Vous recevez un conseil écrit sous vingt-quatre heures ouvrées : silhouette recommandée, teinte, notes de port, et prochaine étape — essai ou commande.",
      },
    ],
    rendezvousEyebrow: "Rendez-vous privé",
    rendezvousTitle: "Essayer les pièces, en vrai.",
    rendezvousBody:
      "Si vous préférez un essai avant commande, un rendez-vous privé peut être organisé à Paris, Berlin ou Londres. Précisez-le dans votre message, nous vous proposerons un créneau.",
    rendezvousCities: ["Paris", "Berlin", "Londres"],
    expectEyebrow: "Ce que vous recevez",
    expectTitle: "Ce qu’un conseil contient.",
    expectItems: [
      "Une recommandation précise de silhouette, en fonction de votre visage et de votre usage.",
      "Une suggestion de teinte, en regard de votre carnation et de votre dressing.",
      "Un avis de port — chaque jour, soir, travail — pour que la pièce trouve sa place.",
      "La prochaine étape : commande en ligne ou rendez-vous privé.",
    ],
  },
  journal: {
    metaTitle: "Journal",
    metaDescription:
      "Les notes de la maison. Design, matériaux, savoir-faire — ce qui compose la collection Roi.",
    eyebrowNum: "",
    eyebrowLabel: "Les notes de la maison",
    title1: "Les notes",
    title2: "de la maison.",
    title3: "",
    lede:
      "Design, matériaux, savoir-faire. Les textes qui éclairent la collection Roi.",
    readCahier: "Lire la note",
  },
  cahier: {
    labelChapter: (numeral) => `${numeral}`,
    signatureSuffix: "L’Atelier d’Or",
    piecesEyebrowNum: "",
    piecesEyebrowLabel: "Découvrir les pièces",
    othersEyebrowNum: "",
    othersEyebrowLabel: "Les autres notes",
    cahierN: (n) => `Note ${n}`,
  },
  legal: {
    articleWord: "Article",
    mentions: {
      metaTitle: "Mentions légales",
      metaDescription: "Informations légales du site de L’Atelier d’Or. Site en cours de constitution.",
      numeral: "",
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
      numeral: "",
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
      numeral: "",
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
      numeral: "",
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
    eyebrowNum: "",
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
    promiseEyebrow: "Ce que nous en faisons",
    promiseTitle: "Chaque retour change la pièce suivante.",
    promisePoints: [
      {
        t: "Nous lisons tout",
        b: "Chaque message est lu par l’équipe produit, pas par un filtre automatique. Les retours tiennent lieu de brief interne.",
      },
      {
        t: "Nous ajustons",
        b: "Un commentaire récurrent sur une courbe, une teinte, un détail devient une correction. La collection suivante en porte la trace.",
      },
      {
        t: "Nous citons, avec votre accord",
        b: "Les retours que vous nous autorisez à citer apparaîtront sur la page Avis, sans votre nom, dans la forme exacte que vous avez écrite.",
      },
    ],
  },
  pieceSwitcher: {
    label: "Autres pièces",
    aria: (name) => `${name} — voir la pièce`,
  },
  pieces: {
    "roi-rouge": {
      tagline: "Rectangle, acétate rouge à finition dorée.",
      chapter: "Le Salon",
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
      chapter: "La Chasse",
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
      chapter: "La Chapelle",
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
      chapter: "Le Dîner",
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
      rubric: "Savoir-faire",
      title: "Le geste juste, à trois centimètres du visage.",
      chapo:
        "Pourquoi le montage à la main reste la seule manière de tenir la ligne d’une monture.",
      read: "5 min",
      date: "Septembre",
      body: [
        "Une paire de lunettes se porte à trois centimètres du visage. Ce détail suffit à changer la manière dont on choisit chaque courbe, chaque arête, chaque angle.",
        "Nous montons chaque pièce à la main. Cela veut dire décider, à chaque étape, quand s’arrêter. Une machine peut aller plus vite ; elle ne sait pas s’arrêter au bon moment.",
        "Le fini est le seul instant où l’on relit tout le reste. Une pièce ne quitte l’atelier qu’une fois qu’elle a ce silence — cette manière de tenir la lumière comme une peau.",
        "Rien de plus. C’est la seule chose qui sépare une pièce bien faite d’une pièce qui l’est à peu près.",
      ],
    },
    "quatre-atmospheres": {
      rubric: "Collection",
      title: "Rouge, Noir, Cristal, Émeraude.",
      chapo:
        "Quatre pièces, une même signature. Rectangle, Panto, Oval, Panto masculine : voici ce qui compose Roi.",
      read: "4 min",
      date: "Septembre",
      body: [
        "Roi réunit quatre pièces. Rouge, Noir, Cristal, Émeraude. Une même main de dessin, quatre teintes d’acétate italien, quatre finitions métalliques.",
        "Roi Rouge est une silhouette rectangle, acétate rouge coloré dans la masse, charnières dorées. Pour les visages qui demandent une arête franche.",
        "Roi Noir est une panto haute, acétate vert sous-bois, rivets bronze mats. La monture la plus fermée de la collection.",
        "Roi Cristal est un ovale allongé, acétate cristal translucide, charnières argentées. La plus discrète, la plus lumineuse.",
        "Roi Émeraude est une panto masculine, acétate émeraude, finition dorée. Branches longues, arête sculptée. Pour les visages qui demandent de la hauteur.",
      ],
    },
    "quatre-vingts-euros": {
      rubric: "Design",
      title: "Pourquoi un prix juste change la pièce.",
      chapo:
        "78,90 € par pièce. Vente directe, acétate italien, montage à la main. Comment nous y arrivons.",
      read: "4 min",
      date: "Août",
      body: [
        "Le prix d’une monture de lunetterie n’est pas une fatalité. La majeure partie est captée par la distribution : trois vitrines et deux catalogues entre l’atelier et le visage.",
        "Nous vendons en direct. Pas de boutique physique, pas d’intermédiaire. Le prix reflète la pièce — l’acétate, le métal, le temps de montage — et rien d’autre.",
        "Nous travaillons avec un atelier partenaire à Paris. L’acétate vient d’Italie, chez des manufactures qui fournissent les grandes maisons depuis des générations. Nous choisissons les plaques nous-mêmes.",
        "Chaque pièce est contrôlée à chaque étape : coupe, fraisage, cintrage, polissage, rivetage, finition. Le fini est inspecté à l’œil nu, à la main, sous lumière rasante.",
        "Un prix juste n’est pas un prix bas. C’est un prix qui dit la vérité de la pièce — ce qu’elle contient, ce qu’elle a coûté à produire, ce qu’elle vaut à porter.",
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
    petiteMaison: "Französisches Brillenhaus",
    ventEnLigne: "Online-Verkauf.",
    voir: "Ansehen",
    voirLaPiece: "Zum Stück",
    voirLaCollection: "Zur Kollektion",
    toutLaCollection: "Ganze Kollektion",
    conseillez: "Beratung anfragen",
    ecrireLaMaison: "Dem Haus schreiben",
    lAtelier: "Die Maison",
    decouvrirLAtelier: "Die Maison entdecken",
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
    numeral: "Nr.",
    pageOf: (n) => `Seite ${n}`,
    remisNumeroteALaMain: "Roi · Die Kollektion",
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
    labelRetractation: "Widerrufsbelehrung",
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
      eyebrow: "Roi · Die Kollektion",
      title1: "Sehen Sie die Welt aus",
      title2: "Ihrer eigenen Perspektive.",
      lede: "Roi. Die Kollektion.",
      ctaCollection: "Zur Kollektion",
      ctaConseil: "Beratung anfragen",
      ctaAtelier: "Die Maison",
      scroll: "Scrollen",
      edition: "",
    },
    showcase: {
      eyebrow: "Die Kollektion",
      title1: "Roi.",
      title2: "Eine Handschrift, vier Stücke.",
      lede: "Italienisches Acetat, Metallscharniere, Handmontage. Vier Fassungen, jeden Tag zu tragen.",
      piece: "Stück",
      footerLine: "Roi · Die Kollektion",
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
      eyebrow: "Roi · Die Kollektion",
      line1: "Sehen Sie die Welt aus",
      line2: "Ihrer eigenen Perspektive.",
      body: "Roi. Eine Handschrift, vier Stücke.",
      ctaCollection: "Zur Kollektion",
      ctaAtelier: "Die Maison entdecken",
    },
  },
  collectionIndex: {
    metaTitle: "Die Kollektion – Roi.",
    metaDescription:
      "Roi. Vier Fassungen: Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude. Italienisches Acetat, Handmontage, 78,90 € pro Stück.",
    breadcrumbHome: "Startseite",
    breadcrumbCollection: "Kollektion",
    eyebrowNumeral: "",
    eyebrowLabel: "Roi",
    title: ["Roi.", "Eine Handschrift,", "vier Stücke."],
    lede:
      "Italienisches Acetat, Metallscharniere, Handmontage.\nEine editoriale Handschrift, eine Signatur.",
    subtitles: "Rouge · Noir · Cristal · Émeraude",
    subtitles2: "Paris · Berlin · London",
    editorialTitle1: "Roi wird getragen.",
    editorialTitle2: "Nicht ausgestellt.",
    editorialBody:
      "Die Kollektion steht in keinem Schaufenster. Wir zeigen sie nach Terminvereinbarung, unter vier Augen, in Paris, Berlin und London.",
    editorialCta: "Die Maison entdecken",
  },
  piece: {
    metaDescriptionSuffix: (name, price) =>
      `${name} – italienisches Acetat, Handmontage. ${price}.`,
    chapterPrefix: "",
    theLieu: "Der Ort",
    theHeure: "Die Stunde",
    silhouette: "Silhouette",
    section1Eyebrow: "",
    section1Label: "Material",
    section2Eyebrow: "",
    section2Label: "Sinnliche Noten",
    section2Title1: "Wie dieses Paar",
    section2Title2: "einen Ort bewohnt.",
    section2Body:
      "Vier Noten – weder Parfum noch Material: eine Art, das Licht zu halten.",
    noteLabel: (n) => `Note 0${n}`,
    lireQuatreAtmospheres: "Journal lesen",
    section3Eyebrow: "",
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
    section4Eyebrow: "",
    section4Label: "Die drei weiteren Stücke",
    othersPieces: "Die drei weiteren Stücke",
  },
  atelier: {
    metaTitle: "Die Maison",
    metaDescription:
      "L’Atelier d’Or, französisches Brillenhaus. Geschichte, Handwerk, Materialien und Details der Kollektion Roi.",
    heroEyebrowNum: "",
    heroEyebrowLabel: "Die Maison",
    heroTitle1: "Ein französisches",
    heroTitle2: "Brillenhaus.",
    heroLede:
      "L’Atelier d’Or entwirft und fertigt Brillen in Frankreich. Italienisches Acetat, Metallscharniere, Handmontage. Eine Kollektion, gedacht zum täglichen Tragen.",
    originEyebrow: "",
    originLabel: "Geschichte",
    originTitle: "Vom Pariser Atelier zur Kollektion Roi.",
    originParas: [
      "L’Atelier d’Or entstand aus einem Unbehagen: zeitgenössische Brillenwelten verwechseln zu oft Accessoire mit Wegwerfobjekt. Das Haus wurde gegründet, um darauf eine einzige Antwort zu geben — eine Fassung, die über Jahre getragen wird, ohne zu altern.",
      "Das Studio arbeitet in Paris. Die Acetate werden in Italien ausgewählt, bei denselben Manufakturen, die seit über einem Jahrhundert die großen Häuser beliefern. Jede Platte wird auf Tiefe, Dichte und Lichtverhalten geprüft.",
      "Die Fassung wird anschließend von Hand in Paris montiert, in einer Partner-Werkstatt. Jeder Schritt wird kontrolliert: Nieten, Scharniere, Politur. Nichts wird an die Maschine abgegeben, wo das menschliche Auge besser ist.",
    ],
    approachEyebrow: "",
    approachLabel: "Design",
    approachTitle: "Drei Prinzipien, die die Linie halten.",
    approachParas: [
      "Wir suchen nicht das Neue um jeden Preis. Wir suchen die Richtigkeit eines Entwurfs, die Dichte eines Materials, die Fairness eines Preises. Das sind die drei einzigen Maßstäbe der Arbeit.",
    ],
    principles: [
      {
        t: "Ein beständiger Entwurf",
        b: "Die Silhouette soll fünf oder zehn Jahre tragen, nicht eine Saison. Jede Kurve wird so gearbeitet, dass sie der Mode standhält.",
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
    collectionEyebrow: "",
    collectionLabel: "Die Kollektion",
    collectionTitle: "Roi – eine Handschrift, vier Stücke.",
    collectionBody:
      "Roi vereint vier Fassungen: Rouge, Noir, Cristal, Émeraude. Dieselbe Handschrift des Entwurfs, vier Töne italienisches Acetat, vier Metall-Finishes. Zum Tragen vom Morgen bis in den Abend, in der Stadt wie zu Hause.",
    materialsEyebrow: "",
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
    ctaBody: "Die Roi-Kollektion entdecken Sie online. Eine Handschrift, vier Stücke.",
    cta: "Zur Kollektion",
  },
  avis: {
    metaTitle: "Stimmen",
    metaDescription:
      "Was das Haus hört. Die ersten Zeugnisse kommen – das Wort ergreift man in Vertrauen.",
    eyebrowNum: "",
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
    eyebrowNum: "",
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
        eyebrow: "Das Produkt",
        qas: [
          { q: "Was kostet ein Roi-Stück?", a: "Jedes Stück der Roi-Kollektion wird zu 78,90 € angeboten. Nicht mehr, nicht weniger." },
          { q: "Wie viele Modelle umfasst die Kollektion?", a: "Die erste Kollektion umfasst vier Stücke: Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude." },
          { q: "Ist jedes Exemplar nummeriert?", a: "Ja. Jedes Exemplar ist von Hand nummeriert, Stück für Stück." },
          { q: "Kann ich zwischen mehreren Farbtönen wählen?", a: "Jedes Stück hat einen festgelegten Farbton. Die vier Atmosphären entsprechen den vier Stücken." },
        ],
      },
      {
        title: "Die Bestellung",
        eyebrow: "Bestellen",
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
        eyebrow: "Lieferung",
        qas: [
          { q: "Wohin liefern Sie?", a: "Wird derzeit verfasst. Die Liefergebiete werden zur Eröffnung des Geschäfts bekanntgegeben.", pending: true },
          { q: "Welche Lieferzeiten gelten?", a: "Wird derzeit verfasst. Richtwerte werden zur Eröffnung bekanntgegeben.", pending: true },
          { q: "Wie hoch sind die Versandkosten?", a: "Wird derzeit verfasst. Die Übersicht folgt zur Eröffnung.", pending: true },
        ],
      },
      {
        title: "Die Rücksendung",
        eyebrow: "Rücksendung & Umtausch",
        qas: [
          { q: "Kann ich mein Stück zurücksenden?", a: "Wird derzeit verfasst. Die Rücksendebedingungen werden zur Eröffnung des Geschäfts veröffentlicht. Für Verbraucher in der Europäischen Union gilt in jedem Fall das gesetzliche vierzehntägige Widerrufsrecht.", pending: true },
          { q: "Wie sende ich zurück?", a: "Wird derzeit verfasst.", pending: true },
        ],
      },
      {
        title: "Die Pflege",
        eyebrow: "Pflege",
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
    eyebrowNum: "",
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
    processEyebrow: "Wie wir beraten",
    processTitle: "Eine Beratung, geführt von einem Meisteroptiker.",
    processLede:
      "Kein automatisiertes Formular. Jede Anfrage wird gelesen, geprüft und innerhalb von vierundzwanzig Werkstunden persönlich beantwortet.",
    steps: [
      {
        t: "Sie schreiben uns",
        b: "Sagen Sie uns, was Sie suchen: Silhouette, Farbton, Korrektur, Alltagsnutzung. Wir lesen jedes Wort.",
      },
      {
        t: "Wir prüfen",
        b: "Ein Meisteroptiker prüft Ihre Anfrage mit Blick auf die Kollektion. Wir wählen das Stück, das zu Ihrem Gesicht passt, nicht das meistverkaufte.",
      },
      {
        t: "Wir antworten",
        b: "Sie erhalten einen schriftlichen Rat innerhalb von vierundzwanzig Werkstunden: empfohlene Silhouette, Farbton, Tragehinweise und der nächste Schritt — Anprobe oder Bestellung.",
      },
    ],
    rendezvousEyebrow: "Privater Termin",
    rendezvousTitle: "Die Stücke in echt anprobieren.",
    rendezvousBody:
      "Wenn Sie vor der Bestellung anprobieren möchten, lässt sich ein privater Termin in Paris, Berlin oder London einrichten. Erwähnen Sie es in Ihrer Nachricht, wir schlagen Ihnen einen Zeitfenster vor.",
    rendezvousCities: ["Paris", "Berlin", "London"],
    expectEyebrow: "Was Sie erhalten",
    expectTitle: "Was in einer Beratung enthalten ist.",
    expectItems: [
      "Eine präzise Empfehlung zur Silhouette, bezogen auf Ihr Gesicht und Ihren Alltag.",
      "Einen Vorschlag zum Farbton, abgestimmt auf Hautton und Garderobe.",
      "Eine Trage-Einschätzung — Alltag, Abend, Arbeit — damit das Stück seinen Platz findet.",
      "Den nächsten Schritt: Online-Bestellung oder privater Termin.",
    ],
  },
  journal: {
    metaTitle: "Journal",
    metaDescription:
      "Die Notizen des Hauses. Design, Materialien, Handwerk – was die Kollektion Roi ausmacht.",
    eyebrowNum: "",
    eyebrowLabel: "Die Notizen des Hauses",
    title1: "Die Notizen",
    title2: "des Hauses.",
    title3: "",
    lede:
      "Design, Materialien, Handwerk. Texte, die die Kollektion Roi erklären.",
    readCahier: "Notiz lesen",
  },
  cahier: {
    labelChapter: (numeral) => `${numeral}`,
    signatureSuffix: "L’Atelier d’Or",
    piecesEyebrowNum: "",
    piecesEyebrowLabel: "Die Stücke entdecken",
    othersEyebrowNum: "",
    othersEyebrowLabel: "Die anderen Notizen",
    cahierN: (n) => `Notiz ${n}`,
  },
  legal: {
    articleWord: "Artikel",
    mentions: {
      metaTitle: "Impressum",
      metaDescription: "Rechtliche Angaben zur Website von L’Atelier d’Or. Gesellschaft in Gründung.",
      numeral: "",
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
      numeral: "",
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
      numeral: "",
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
      numeral: "",
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
    eyebrowNum: "",
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
    promiseEyebrow: "Was wir damit tun",
    promiseTitle: "Jedes Feedback verändert die nächste Fassung.",
    promisePoints: [
      {
        t: "Wir lesen alles",
        b: "Jede Nachricht wird vom Produkt-Team gelesen, nicht von einem automatischen Filter. Rückmeldungen gelten als internes Briefing.",
      },
      {
        t: "Wir passen an",
        b: "Ein wiederkehrender Hinweis zu einer Kurve, einem Ton, einem Detail wird zur Korrektur. Die nächste Kollektion trägt die Spur davon.",
      },
      {
        t: "Wir zitieren, mit Ihrer Zustimmung",
        b: "Rückmeldungen, die Sie uns zum Zitieren freigeben, erscheinen anonymisiert auf der Seite Stimmen – in der Form, wie Sie sie geschrieben haben.",
      },
    ],
  },
  pieceSwitcher: {
    label: "Weitere Stücke",
    aria: (name) => `${name} – Stück ansehen`,
  },
  pieces: {
    "roi-rouge": {
      tagline: "Rechteck, rotes Acetat mit goldener Ausführung.",
      chapter: "Der Salon",
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
      chapter: "Die Jagd",
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
      chapter: "Die Kapelle",
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
      chapter: "Das Dîner",
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
      rubric: "Handwerk",
      title: "Die richtige Geste, drei Zentimeter vom Gesicht.",
      chapo:
        "Warum Handmontage die einzige Art bleibt, die Linie einer Fassung zu halten.",
      read: "5 Min",
      date: "September",
      body: [
        "Eine Brille trägt man drei Zentimeter vom Gesicht entfernt. Dieses Detail genügt, um die Art zu ändern, wie man jede Krümmung, jede Kante, jeden Winkel wählt.",
        "Wir montieren jedes Stück von Hand. Das heißt: in jedem Schritt zu entscheiden, wann man aufhört. Eine Maschine kann schneller sein; sie weiß nicht, im richtigen Moment anzuhalten.",
        "Der Finish ist der einzige Moment, in dem man alles noch einmal liest. Ein Stück verlässt das Atelier nicht, solange es diese Stille noch nicht hat – diese Art, das Licht wie eine Haut zu halten.",
        "Nichts weiter. Nur das trennt eine sauber gearbeitete Fassung von einer, die es ungefähr ist.",
      ],
    },
    "quatre-atmospheres": {
      rubric: "Kollektion",
      title: "Rouge, Noir, Cristal, Émeraude.",
      chapo:
        "Vier Fassungen, eine Handschrift. Rechteck, Panto, Oval, Panto maskulin: woraus Roi besteht.",
      read: "4 Min",
      date: "September",
      body: [
        "Roi vereint vier Fassungen. Rouge, Noir, Cristal, Émeraude. Dieselbe Hand des Entwurfs, vier Töne italienisches Acetat, vier Metall-Finishes.",
        "Roi Rouge ist eine Rechteck-Silhouette, rotes Acetat in der Masse gefärbt, goldene Scharniere. Für Gesichter, die eine klare Kante verlangen.",
        "Roi Noir ist eine hohe Panto-Form, waldgrünes Acetat, matte Bronze-Nieten. Die geschlossenste Fassung der Kollektion.",
        "Roi Cristal ist ein gestrecktes Oval, transluzentes Kristall-Acetat, silberne Scharniere. Die diskreteste, die hellste.",
        "Roi Émeraude ist eine maskuline Panto-Form, smaragdgrünes Acetat, goldene Ausführung. Lange Bügel, gemeißelte Kante. Für Gesichter, die Höhe verlangen.",
      ],
    },
    "quatre-vingts-euros": {
      rubric: "Design",
      title: "Warum ein fairer Preis die Fassung verändert.",
      chapo:
        "78,90 € pro Stück. Direktverkauf, italienisches Acetat, Handmontage. Wie wir dahin kommen.",
      read: "4 Min",
      date: "August",
      body: [
        "Der Preis einer Brillenfassung ist keine Schicksalsfrage. Der größte Teil wird von der Distribution einbehalten: drei Schaufenster und zwei Kataloge zwischen Atelier und Gesicht.",
        "Wir verkaufen direkt. Keine Boutique, kein Zwischenhandel. Der Preis spiegelt das Stück — Acetat, Metall, Montagezeit — und nichts anderes.",
        "Wir arbeiten mit einer Partner-Werkstatt in Paris. Das Acetat kommt aus Italien, von Manufakturen, die seit Generationen die großen Häuser beliefern. Die Platten wählen wir selbst aus.",
        "Jede Fassung wird in jedem Schritt kontrolliert: Zuschnitt, Fräsen, Biegen, Polieren, Nieten, Finish. Der Finish wird mit bloßem Auge, von Hand, unter streifendem Licht geprüft.",
        "Ein fairer Preis ist kein niedriger Preis. Es ist ein Preis, der die Wahrheit der Fassung sagt — was sie enthält, was sie zu produzieren gekostet hat, was sie zu tragen wert ist.",
      ],
    },
  },
  langSwitcher: {
    label: "Sprache",
    fr: "Français",
    de: "Deutsch",
  },
};

const en: Dictionary = {
  common: {
    editionBreve: "",
    numeroteeALaMain: "",
    petiteMaison: "French eyewear house",
    ventEnLigne: "Online sales.",
    voir: "View",
    voirLaPiece: "View piece",
    voirLaCollection: "View collection",
    toutLaCollection: "Full collection",
    conseillez: "Ask for advice",
    ecrireLaMaison: "Write to the house",
    lAtelier: "The house",
    decouvrirLAtelier: "Discover the house",
    defiler: "Scroll",
    passerIntro: "Skip intro",
    menu: "Menu",
    ouvrirMenu: "Open menu",
    fermerMenu: "Close menu",
    skipToContent: "Skip to content",
    voyezLeMonde1: "See the world from",
    voyezLeMonde2: "your own perspective.",
    quatrePiecesParAn: "Roi. The collection.",
    editionBreveDescription: "",
    edition: "",
    numeral: "No.",
    pageOf: (n) => `Page ${n}`,
    remisNumeroteALaMain: "Roi · The collection",
  },
  nav: {
    edition: "",
    collection: "Collection",
    atelier: "House",
    journal: "Journal",
    avis: "Reviews",
    questions: "Questions",
    conseil: "Advice",
    feedback: "Feedback",
    maisonEyebrow: "House",
    contactEyebrow: "Contact",
    houseIntro: "French eyewear house.\nParis · Berlin · London.",
    contactWriteUs: "Write to us",
    ctaCollection: "View collection",
  },
  footer: {
    petiteMaisonFr: "French eyewear house",
    ligne1: "French eyewear house.",
    ligne2: "Online sales, by appointment in Paris, Berlin and London.",
    columnMaison: "House",
    columnCollection: "Collection",
    columnMentions: "Legal",
    labelPremiereCollection: "",
    labelMentionsLegales: "Legal notice",
    labelConfidentialite: "Privacy",
    labelAccessibilite: "Accessibility",
    labelRetractation: "Right of withdrawal",
    copyright: "© L’Atelier d’Or",
    editorialTag: "French eyewear house",
    editorialTag2: "Paris · Berlin · London",
  },
  newsletter: {
    label: "The house letter",
    description: "New pieces, journal, appointments. Sent sparingly.",
    placeholder: "your@email.com",
    submit: "Subscribe",
    formAria: "Subscribe to the house letter",
    submitting: "…",
    ok: "✓",
    errorEmpty: "Please enter a valid address.",
    errorSetup: "Subscription is being set up.",
    thanks: "Thank you. You’re subscribed.",
    errorNet: "Subscription not recorded. Please try again later.",
  },
  home: {
    hero: {
      eyebrow: "Roi · The collection",
      title1: "See the world from",
      title2: "your own perspective.",
      lede: "Roi. The collection.",
      ctaCollection: "View collection",
      ctaConseil: "Ask for advice",
      ctaAtelier: "The house",
      scroll: "Scroll",
      edition: "",
    },
    showcase: {
      eyebrow: "The collection",
      title1: "Roi.",
      title2: "One signature, four pieces.",
      lede: "Italian acetate, metal hinges, hand assembly. Four frames made to be worn every day.",
      piece: "Piece",
      footerLine: "Roi · The collection",
      link: "Full collection",
    },
    alternating: { voirLaPiece: "View piece" },
    avisTeaser: {
      eyebrow: "Feedback",
      title1: "Wearing Roi?",
      title2: "Tell us a few words.",
      body: "An honest review is worth more than a slogan. Tell us what you wear, how you wear it, and what could be better.",
      ctaShare: "Share feedback",
      ctaSee: "Ask for advice",
    },
    endCall: {
      eyebrow: "Roi · The collection",
      line1: "See the world from",
      line2: "your own perspective.",
      body: "Roi. One signature, four pieces.",
      ctaCollection: "View collection",
      ctaAtelier: "Discover the house",
    },
  },
  collectionIndex: {
    metaTitle: "The Collection — Roi.",
    metaDescription:
      "Roi. Four pieces: Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude. Italian acetate, hand assembly, €78.90 each.",
    breadcrumbHome: "Home",
    breadcrumbCollection: "Collection",
    eyebrowNumeral: "",
    eyebrowLabel: "Roi",
    title: ["Roi.", "One signature,", "four pieces."],
    lede:
      "Italian acetate, metal hinges, hand assembly.\nAn editorial handwriting, one signature.",
    subtitles: "Rouge · Noir · Cristal · Émeraude",
    subtitles2: "Paris · Berlin · London",
    editorialTitle1: "Roi is worn.",
    editorialTitle2: "It isn’t displayed.",
    editorialBody:
      "The collection isn’t shown in windows. We show it by appointment, in private, in Paris, Berlin and London.",
    editorialCta: "Discover the house",
  },
  piece: {
    metaDescriptionSuffix: (name, price) =>
      `${name} — Italian acetate, hand assembly. ${price}.`,
    chapterPrefix: "",
    theLieu: "The place",
    theHeure: "The hour",
    silhouette: "Silhouette",
    section1Eyebrow: "",
    section1Label: "Material",
    section2Eyebrow: "",
    section2Label: "Sensory notes",
    section2Title1: "How this pair",
    section2Title2: "inhabits a room.",
    section2Body:
      "Four notes — neither perfume nor material: a way of holding the light.",
    noteLabel: (n) => `Note 0${n}`,
    lireQuatreAtmospheres: "Read the journal",
    section3Eyebrow: "",
    section3Label: "Acquire it",
    prixParPiece: "Price per piece",
    niPlusNiMoins: "Prescription or sun lenses included.",
    editionBreveBody:
      "Delivered in its dedicated case. Hand-delivered in Paris, tracked shipping elsewhere in Europe.",
    twoWays: "Two ways to receive it",
    way1Title: "Private appointment",
    way1Body:
      "Paris, Berlin or London. Try-on, fitting, then prescription or sun lenses.",
    way2Title: "Delivery in its case",
    way2Body: "Hand-delivered in Paris; tracked shipping elsewhere in Europe.",
    ctaCollection: "View collection",
    ctaEcrire: "Write to the house",
    section4Eyebrow: "",
    section4Label: "The three other pieces",
    othersPieces: "The three other pieces",
  },
  atelier: {
    metaTitle: "The House",
    metaDescription:
      "L’Atelier d’Or, French eyewear house. History, craft, materials and details of the Roi collection.",
    heroEyebrowNum: "",
    heroEyebrowLabel: "The house",
    heroTitle1: "A French",
    heroTitle2: "eyewear house.",
    heroLede:
      "L’Atelier d’Or designs and manufactures eyewear in France. Italian acetate, metal hinges, hand assembly, a collection made to be worn every day.",
    originEyebrow: "",
    originLabel: "History",
    originTitle: "From a Paris atelier to the Roi collection.",
    originParas: [
      "L’Atelier d’Or was born from a disagreement: contemporary eyewear too often confused accessory with disposable object. The house was founded to answer this with one thing — a frame designed to last, worn for years without aging.",
      "The studio is based in Paris. Acetates are selected in Italy, from the same manufactures that have supplied the great houses for over a century. Each plate is examined for depth, density and behaviour under light.",
      "The frame is then assembled by hand in Paris, in a partner workshop. The finish is checked at each step: rivets, hinges, polishing. Nothing is left to the machine where the human eye does better.",
    ],
    approachEyebrow: "",
    approachLabel: "Design",
    approachTitle: "Three principles that hold the line.",
    approachParas: [
      "We don’t chase novelty at any cost. We seek the correctness of a drawing, the density of a material, the fairness of a price. These are the only three arbiters of the work.",
    ],
    principles: [
      { t: "A lasting drawing", b: "The silhouette must last five or ten years, not one season. Every curve is worked to resist fashion." },
      { t: "A chosen material", b: "Italian acetate dyed through the mass, metal hinges and rivets hand-finished. We choose the plate like a fabric." },
      { t: "A direct channel", b: "Online sales and private appointments in Paris, Berlin, London. The price reflects the piece, never the middleman." },
    ],
    principleWord: "Principle",
    collectionEyebrow: "",
    collectionLabel: "The collection",
    collectionTitle: "Roi — one signature, four pieces.",
    collectionBody:
      "Roi brings together four pieces: Rouge, Noir, Cristal, Émeraude. The same hand of drawing, four shades of Italian acetate, four metal finishes. Made to be worn from morning to evening, in town or at home.",
    materialsEyebrow: "",
    materialsLabel: "Materials & details",
    materialsTitle: "What a piece is made of.",
    materialsIntro:
      "Materials are chosen for their density, colour hold and behaviour in the hand. Details are added sparingly.",
    materialsItems: [
      { t: "Italian acetate", b: "Dyed through the mass, plate selected for its depth and light behaviour. Hand-polished until the material is quiet." },
      { t: "Metal hinges", b: "Brass hinges finished in gold, silver or bronze depending on the piece. Visible screws, adjustable at any optician." },
      { t: "Calibrated silhouettes", b: "Rectangle, high panto, elongated oval, masculine panto. Four silhouettes retained from dozens of study drawings." },
      { t: "Lenses on request", b: "Prescription or sun lenses, mounted by our master optician. Included in the price of the piece." },
    ],
    ctaEyebrow: "Collection",
    ctaTitle1: "See the world from",
    ctaTitle2: "your own perspective.",
    ctaBody: "Discover the Roi collection online. One signature, four pieces.",
    cta: "View collection",
  },
  avis: {
    metaTitle: "Reviews",
    metaDescription:
      "What the house hears. The first testimonials are coming — words taken in confidence.",
    eyebrowNum: "",
    eyebrowLabel: "What the house hears",
    title1: "The word,",
    title2: "when it comes.",
    lede:
      "We don’t fabricate reviews. The first testimonials will come from people who wear Roi.",
    testimonial: (n) => `Testimonial ${n}`,
    bientot: "“Soon.”",
    aParaitre: "To appear",
    ariaLabel: "Placeholders for upcoming testimonials",
    ctaBody:
      "Wearing Roi? Write us a word — we publish testimonials that describe the piece, honestly, without retouching.",
    cta: "Share a word",
  },
  faq: {
    metaTitle: "Questions",
    metaDescription:
      "What we’re often asked: the product, orders, delivery, returns, care.",
    eyebrowNum: "",
    eyebrowLabel: "What we’re asked",
    title1: "The questions,",
    title2: "the answers.",
    lede:
      "Some final answers will arrive when the store opens. The others are already here.",
    footerBody:
      "A question that isn’t here? Write to us — we reply personally.",
    footerCta: "Ask my question",
    pending: "Being written.",
    sections: [
      {
        title: "The piece",
        eyebrow: "The product",
        qas: [
          { q: "How much is a Roi piece?", a: "Each piece of the Roi collection is offered at €78.90. No more, no less." },
          { q: "How many models are in the collection?", a: "The first collection has four pieces: Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude." },
          { q: "Is each piece numbered?", a: "Yes. Each piece is numbered by hand, one by one." },
          { q: "Can I choose between several colours?", a: "Each piece has a defined tone. The four atmospheres correspond to the four pieces." },
        ],
      },
      {
        title: "The order",
        eyebrow: "Ordering",
        qas: [
          { q: "How do I order?", a: "Orders are placed online, directly from the piece page.", link: { text: "View collection", before: " ", after: ".", href: "/collection" } },
          { q: "Which payment methods do you accept?", a: "Being written. Final payment methods will be published when the store opens.", pending: true },
          { q: "Can I cancel my order after payment?", a: "Being written. Cancellation terms will be published when the store opens.", pending: true },
        ],
      },
      {
        title: "Delivery",
        eyebrow: "Delivery",
        qas: [
          { q: "Where do you deliver?", a: "Being written. Delivery zones will be announced when the store opens.", pending: true },
          { q: "What are the lead times?", a: "Being written. Indicative times will be shared at opening.", pending: true },
          { q: "What are the shipping fees?", a: "Being written. The grid will be published at opening.", pending: true },
        ],
      },
      {
        title: "Returns",
        eyebrow: "Return & exchange",
        qas: [
          { q: "Can I return my piece?", a: "Being written. Return conditions will be published when the store opens. The statutory fourteen-day right of withdrawal applies in any case to consumer buyers in the European Union.", pending: true },
          { q: "How do I return a piece?", a: "Being written.", pending: true },
        ],
      },
      {
        title: "Care",
        eyebrow: "Care",
        qas: [
          { q: "How do I clean my piece?", a: "Use a clean microfibre cloth, dry or slightly damp. Avoid abrasive products, solvents and alcohol, which damage the material." },
          { q: "How do I store my piece?", a: "In its dedicated case, away from heat and prolonged direct light." },
          { q: "What if a screw loosens or an arm bends?", a: "An optician can adjust or tighten. For adjustment by the house, write to us." },
        ],
      },
    ],
  },
  conseil: {
    metaTitle: "Private advice",
    metaDescription:
      "A word to the house. A case opens, a card awaits you — and our advice is personally addressed to you.",
    eyebrowNum: "",
    eyebrowLabel: "The house is listening",
    title1: "Advise",
    title2: "me.",
    lede:
      "A conversation in private. Open the case, slip a few words to the house.",
    captionA: "THE CORRESPONDENCE",
    captionB: "01 — A WORD TO THE HOUSE",
    openLabel: "Open the case",
    openAria: "Open the advice case",
    lidLine1: "L’Atelier d’Or",
    lidLine2: "PARIS",
    baseSignature: "MADE FOR YOUR GAZE",
    cardBrand: "L’Atelier d’Or",
    cardNumber: "PRIVATE CORRESPONDENCE",
    cardHeader: "Your personal advice",
    nameLabel: "Your name",
    emailLabel: "Your email",
    messageLabel: "How can we advise you?",
    privacyLink: "Your words stay between us.",
    submit: "Send my request",
    submitting: "Sending…",
    thanksTitle: "Thank you.",
    thanksBody: "We will reply to you personally.",
    emailTitle: "It’s yours to sign.",
    emailBody1:
      "Send your message from your mail client. If it didn’t open, write to",
    emailBody2: ".",
    emailBackToCard: "Back to my card",
    emailStowCard: "Stow my card ↘",
    footnoteA: "A CASE. A FEW WORDS. YOUR GAZE.",
    footnoteB: "L’Atelier d’Or — Paris",
    errorEmpty: "A few words and your name, so we can reply.",
    errorSetup: "The correspondence service is being set up. Please try later.",
    errorSend: "Your message was not sent. Your words are kept; please try again.",
    pocket: "FOR YOUR ATTENTION",
    noscriptWrite: "For personal advice, write to",
    processEyebrow: "How we advise",
    processTitle: "Advice held by a master optician.",
    processLede:
      "No automated form. Each request is read, studied and followed by a personal reply within twenty-four working hours.",
    steps: [
      { t: "You write to us", b: "Tell us what you are looking for: silhouette, tone, prescription, daily use. We read every word." },
      { t: "We study", b: "A master optician studies your request against the collection. We choose the piece that fits your face, not the best seller." },
      { t: "We reply", b: "You receive written advice within twenty-four working hours: recommended silhouette, tone, wear notes, and next step — try-on or order." },
    ],
    rendezvousEyebrow: "Private appointment",
    rendezvousTitle: "Try the pieces, in person.",
    rendezvousBody:
      "If you would prefer to try before ordering, a private appointment can be arranged in Paris, Berlin or London. Mention it in your message and we’ll propose a slot.",
    rendezvousCities: ["Paris", "Berlin", "London"],
    expectEyebrow: "What you receive",
    expectTitle: "What advice contains.",
    expectItems: [
      "A precise recommendation of silhouette, based on your face and daily use.",
      "A suggestion of tone, matched to your complexion and wardrobe.",
      "A wear note — day, evening, work — so the piece finds its place.",
      "The next step: online order or private appointment.",
    ],
  },
  journal: {
    metaTitle: "Journal",
    metaDescription:
      "The notes of the house. Design, materials, craft — what makes up the Roi collection.",
    eyebrowNum: "",
    eyebrowLabel: "The notes of the house",
    title1: "The notes",
    title2: "of the house.",
    title3: "",
    lede: "Design, materials, craft. Texts that explain the Roi collection.",
    readCahier: "Read the note",
  },
  cahier: {
    labelChapter: (numeral) => `${numeral}`,
    signatureSuffix: "L’Atelier d’Or",
    piecesEyebrowNum: "",
    piecesEyebrowLabel: "Discover the pieces",
    othersEyebrowNum: "",
    othersEyebrowLabel: "The other notes",
    cahierN: (n) => `Note ${n}`,
  },
  legal: {
    articleWord: "Article",
    mentions: {
      metaTitle: "Legal notice",
      metaDescription: "Legal information for the L’Atelier d’Or website. Company in formation.",
      numeral: "",
      rubric: "Legal notice",
      title: "Legal notice.",
      chapo: "What the house is, in due form. Nothing more, nothing less.",
      sections: [
        { title: "Website status", body: ["L’Atelier d’Or is a house in formation. This website is provided for editorial purposes and does not currently conduct any sales to the public.", "The final legal information — company name, registered office, trade register/SIRET, capital, publisher, hosting — will be published here as soon as the company is registered."] },
        { title: "Publisher", body: ["L’Atelier d’Or (provisional name).", "Publisher details available on written request via the contact form."] },
        { title: "Hosting", body: ["The website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA."] },
        { title: "Intellectual property", body: ["All content on the site — texts, photographs, drawings, trademarks, logos — is protected by French and international intellectual property law.", "Any reproduction, representation or distribution, in whole or in part, requires prior written authorisation from the house."] },
        { title: "Contact", body: ["Any question related to the content or use of the site can be sent via the “Advice” page."] },
      ],
    },
    privacy: {
      metaTitle: "Privacy",
      metaDescription: "What the house collects, what it will never collect, and your rights.",
      numeral: "",
      rubric: "Privacy",
      title: "Your contact details never leave the house.",
      chapo: "What we collect, what we will never collect, and what you can ask of us at any time.",
      sections: [
        { title: "What the house collects", body: ["Only the information you voluntarily send us via the “Advice” page: name, email and the message you choose to attach.", "We do not collect any behavioural data, no advertising profile, no third-party tracking identifier."] },
        { title: "What the house does not do", body: ["We do not sell your contact details. We do not share them with any advertising agency, ad network, or commercial partner.", "We do not place third-party audience measurement trackers, nor retargeting tools."] },
        { title: "Cookies", body: ["The site uses only strictly necessary cookies — display, accessibility preferences, cache.", "No third-party audience measurement cookies, no advertising trackers."] },
        { title: "Your rights", body: ["Under the General Data Protection Regulation (GDPR), you have the right to access, rectify, erase, restrict and port your personal data.", "You can exercise these rights by writing to us via the “Advice” page. We reply within twenty-four working hours."] },
        { title: "Retention", body: ["Correspondence is kept for the duration of the conversation and deleted on simple request. No extended retention without a stated reason."] },
      ],
    },
    a11y: {
      metaTitle: "Accessibility",
      metaDescription: "Our commitment to accessibility: WCAG 2.2 AA, respect for motion preferences, contact.",
      numeral: "",
      rubric: "Accessibility",
      title: "A reading, by sight and voice, for everyone.",
      chapo: "The site aims for WCAG 2.2 AA conformance and respects system motion preferences.",
      sections: [
        { title: "Our aim", body: ["The site is designed to reach WCAG 2.2 AA conformance (Web Content Accessibility Guidelines).", "We regularly check contrast, content order, keyboard navigation and screen reader compatibility."] },
        { title: "Reduced motion", body: ["Entry, reveal and transition animations are automatically disabled when your system is set to “reduce motion” (prefers-reduced-motion).", "No animation essential to understanding is present."] },
        { title: "Navigation", body: ["All navigation is keyboard accessible. Interactive areas have a visible focus state.", "Links and buttons are named in plain words, without jargon."] },
        { title: "Reporting", body: ["If you encounter an accessibility difficulty, write to us via the “Advice” page. We reply within twenty-four working hours and correct where possible without delay."] },
      ],
    },
    retractation: {
      metaTitle: "Right of withdrawal",
      metaDescription: "Your rights as a buyer: withdrawal period, procedure, refund.",
      numeral: "",
      rubric: "Right of withdrawal",
      title: "A deadline, a gesture, a refund.",
      chapo: "You have a fourteen-day right of withdrawal from delivery of your piece.",
      sections: [
        { title: "Deadline", body: ["You have fourteen calendar days from the day you receive the piece to exercise your right of withdrawal, without giving any reason.", "This right applies to consumer buyers in the European Union, under the Consumer Code and Directive 2011/83/EU."] },
        { title: "How to notify us", body: ["To exercise your right of withdrawal, write to us via the “Advice” page or by email, indicating the name on the order and the piece number, before the fourteen-day deadline expires.", "An unambiguous written statement is sufficient. We acknowledge receipt without delay and send you the return procedure."] },
        { title: "Return of the piece", body: ["The piece must be returned to us in its case, complete and unaltered, within fourteen days following your statement.", "Return shipping costs are at your charge, unless otherwise stated by us."] },
        { title: "Refund", body: ["The piece is refunded no later than fourteen days after receipt of the return, using the payment method used for the purchase, unless otherwise agreed.", "Initial shipping costs are refunded in the same timeframe, except for the extra cost of a shipping method more expensive than standard delivery."] },
        { title: "Exceptions", body: ["Personalised pieces — fitting of prescription lenses to your visual correction — are not subject to the right of withdrawal, under article L.221-28 of the Consumer Code.", "For any question on this special case, write to us: we study each situation."] },
      ],
    },
  },
  feedback: {
    metaTitle: "Feedback",
    metaDescription:
      "Honest feedback on the Roi collection. What you wear, what could be better.",
    eyebrowNum: "",
    eyebrowLabel: "A note to the house",
    title1: "What you",
    title2: "want to tell us.",
    lede:
      "Short, honest feedback is worth more than a long compliment. We read every message and publish feedback that describes the piece without retouching.",
    formAria: "Feedback form",
    nameLabel: "Your name",
    emailLabel: "Your email",
    modelLabel: "Piece concerned",
    modelPlaceholder: "Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude…",
    ratingLabel: "Your rating",
    ratingOptions: ["Excellent", "Good", "Average", "To improve"],
    messageLabel: "Your feedback",
    consent: "I agree that this feedback may be quoted, without my name, on the Reviews page.",
    submit: "Send my feedback",
    submitting: "Sending…",
    thanksTitle: "Thank you.",
    thanksBody: "We have received your feedback. We reply personally.",
    errorEmpty: "A few words and your name, so we can reply.",
    errorSetup: "The service is being set up. Please try later.",
    errorSend: "Your message was not sent. Your words are kept; please try again.",
    conseilFooterBody: "A more personal question, advice on a piece, an adjustment?",
    conseilFooterCta: "Ask for advice",
    promiseEyebrow: "What we do with it",
    promiseTitle: "Each piece of feedback changes the next.",
    promisePoints: [
      { t: "We read everything", b: "Every message is read by the product team, not by an automatic filter. Feedback acts as internal briefing." },
      { t: "We adjust", b: "A recurring note on a curve, a tone, a detail becomes a correction. The next collection bears its trace." },
      { t: "We quote, with your consent", b: "Feedback you authorise us to quote appears on the Reviews page, without your name, in the exact form you wrote." },
    ],
  },
  pieceSwitcher: {
    label: "Other pieces",
    aria: (name) => `${name} — view piece`,
  },
  pieces: {
    "roi-rouge": {
      tagline: "Rectangle, red acetate with gold finish.",
      chapter: "The Salon",
      place: "A private salon, late in the evening.",
      time: "Late evening",
      silhouette: "Rectangle with softened corners, clean edge.",
      materie: "Mass-dyed acetate, gold finish on the hinges.",
      details: ["Rectangle silhouette", "Red acetate dyed through the mass", "Gold finish on the hinges"],
      notes: ["patinated leather", "light tobacco", "long pepper", "black wax"],
      scene: "Velvet holds the light longer than skin.",
      teintes: [{ name: "Rouge Ember" }, { name: "Rouge Profond" }],
    },
    "roi-noir": {
      tagline: "Panto, forest-green acetate with bronze rivets.",
      chapter: "The Hunt",
      place: "A pavilion at the edge of the forest, late afternoon.",
      time: "Before dinner",
      silhouette: "High panto, closed line, soft edge.",
      materie: "Deep green acetate, matte bronze rivets.",
      details: ["High panto silhouette", "Forest-green acetate", "Matte bronze rivets"],
      notes: ["moss", "cedar", "saddle leather", "plant ink"],
      scene: "Damp wood, dry tweed. Nothing excessive.",
      teintes: [{ name: "Noir Encre" }, { name: "Noir Fumé" }],
    },
    "roi-cristal": {
      tagline: "Oval, crystal acetate with silver hinges.",
      chapter: "The Chapel",
      place: "A countryside chapel, early morning.",
      time: "Early morning",
      silhouette: "Elongated oval, very fine crystalline edge.",
      materie: "Translucent crystal acetate, silver finish.",
      details: ["Elongated oval silhouette", "Translucent crystal acetate", "Silver finish on the hinges"],
      notes: ["iris", "clear water", "fresh almond", "tissue paper"],
      scene: "A pale day, a light that betrays no one.",
      teintes: [{ name: "Blanc de Neige" }, { name: "Blanc Nacré" }],
    },
    "roi-emeraude": {
      tagline: "Panto, emerald acetate with gold finish.",
      chapter: "The Dinner",
      place: "A dinner in an orangery, under the trees.",
      time: "Evening",
      silhouette: "Masculine panto, sculpted edge, long temples.",
      materie: "Emerald acetate, gold finish on the rim.",
      details: ["Masculine panto silhouette", "Hand-cut emerald acetate", "Gold finish on the rim"],
      notes: ["gardenia", "ripe fig", "powdered violet", "amber wine"],
      scene: "Glasses clink, candles flicker, someone laughs softly.",
      teintes: [{ name: "Vert Émeraude" }, { name: "Vert Forêt" }],
    },
  },
  cahiers: {
    "geste-juste": {
      rubric: "Craft",
      title: "The right gesture, three centimetres from the face.",
      chapo: "Why hand assembly remains the only way to hold the line of a frame.",
      read: "5 min",
      date: "September",
      body: [
        "A pair of glasses is worn three centimetres from the face. That detail alone changes how one chooses each curve, each edge, each angle.",
        "We assemble each piece by hand. That means deciding, at each step, when to stop. A machine can go faster; it does not know when to stop at the right moment.",
        "The finish is the only moment when one re-reads everything else. A piece doesn’t leave the atelier until it has that silence — that way of holding light like skin.",
        "Nothing more. That is the only thing that separates a well-made piece from one that is nearly so.",
      ],
    },
    "quatre-atmospheres": {
      rubric: "Collection",
      title: "Rouge, Noir, Cristal, Émeraude.",
      chapo: "Four pieces, one signature. Rectangle, Panto, Oval, masculine Panto: this is what makes up Roi.",
      read: "4 min",
      date: "September",
      body: [
        "Roi brings together four pieces. Rouge, Noir, Cristal, Émeraude. The same hand of drawing, four shades of Italian acetate, four metal finishes.",
        "Roi Rouge is a rectangle silhouette, red mass-dyed acetate, gold hinges. For faces that call for a clean edge.",
        "Roi Noir is a high panto, forest-green acetate, matte bronze rivets. The most closed frame in the collection.",
        "Roi Cristal is an elongated oval, translucent crystal acetate, silver hinges. The most discreet, the most luminous.",
        "Roi Émeraude is a masculine panto, emerald acetate, gold finish. Long temples, sculpted edge. For faces that call for height.",
      ],
    },
    "quatre-vingts-euros": {
      rubric: "Design",
      title: "Why a fair price changes the piece.",
      chapo: "€78.90 per piece. Direct sales, Italian acetate, hand assembly. How we get there.",
      read: "4 min",
      date: "August",
      body: [
        "The price of an eyewear frame is not inevitable. Most of it is captured by distribution: three windows and two catalogues between the atelier and the face.",
        "We sell direct. No physical store, no middleman. The price reflects the piece — the acetate, the metal, the assembly time — and nothing else.",
        "We work with a partner workshop in Paris. The acetate comes from Italy, from manufactures that have supplied the great houses for generations. We choose the plates ourselves.",
        "Each piece is checked at each step: cutting, milling, bending, polishing, riveting, finishing. The finish is inspected by eye, by hand, under raking light.",
        "A fair price is not a low price. It is a price that tells the truth of the piece — what it contains, what it cost to produce, what it is worth to wear.",
      ],
    },
  },
  langSwitcher: {
    label: "Language",
    fr: "Français",
    de: "Deutsch",
  },
};

const it: Dictionary = {
  common: {
    editionBreve: "",
    numeroteeALaMain: "",
    petiteMaison: "Maison francese di occhialeria",
    ventEnLigne: "Vendita online.",
    voir: "Vedi",
    voirLaPiece: "Vedi il pezzo",
    voirLaCollection: "Vedi la collezione",
    toutLaCollection: "Tutta la collezione",
    conseillez: "Chiedere consiglio",
    ecrireLaMaison: "Scrivere alla maison",
    lAtelier: "La maison",
    decouvrirLAtelier: "Scoprire la maison",
    defiler: "Scorri",
    passerIntro: "Salta l’intro",
    menu: "Menu",
    ouvrirMenu: "Apri il menu",
    fermerMenu: "Chiudi il menu",
    skipToContent: "Vai al contenuto",
    voyezLeMonde1: "Guardate il mondo dalla",
    voyezLeMonde2: "vostra prospettiva.",
    quatrePiecesParAn: "Roi. La collezione.",
    editionBreveDescription: "",
    edition: "",
    numeral: "N.",
    pageOf: (n) => `Pagina ${n}`,
    remisNumeroteALaMain: "Roi · La collezione",
  },
  nav: {
    edition: "",
    collection: "Collezione",
    atelier: "Maison",
    journal: "Journal",
    avis: "Opinioni",
    questions: "Domande",
    conseil: "Consiglio",
    feedback: "Feedback",
    maisonEyebrow: "Maison",
    contactEyebrow: "Contatto",
    houseIntro: "Maison francese di occhialeria.\nParigi · Berlino · Londra.",
    contactWriteUs: "Scriveteci",
    ctaCollection: "Vedi la collezione",
  },
  footer: {
    petiteMaisonFr: "Maison francese di occhialeria",
    ligne1: "Maison francese di occhialeria.",
    ligne2: "Vendita online, su appuntamento a Parigi, Berlino e Londra.",
    columnMaison: "Maison",
    columnCollection: "Collezione",
    columnMentions: "Legale",
    labelPremiereCollection: "",
    labelMentionsLegales: "Note legali",
    labelConfidentialite: "Privacy",
    labelAccessibilite: "Accessibilità",
    labelRetractation: "Diritto di recesso",
    copyright: "© L’Atelier d’Or",
    editorialTag: "Maison francese di occhialeria",
    editorialTag2: "Parigi · Berlino · Londra",
  },
  newsletter: {
    label: "La lettera della maison",
    description: "Nuovi pezzi, journal, appuntamenti. Inviata con parsimonia.",
    placeholder: "voi@email.com",
    submit: "Iscriversi",
    formAria: "Iscrizione alla lettera della maison",
    submitting: "…",
    ok: "✓",
    errorEmpty: "Un indirizzo valido, per favore.",
    errorSetup: "L’iscrizione è in fase di configurazione.",
    thanks: "Grazie. Siete iscritti.",
    errorNet: "Iscrizione non registrata. Riprovate più tardi.",
  },
  home: {
    hero: {
      eyebrow: "Roi · La collezione",
      title1: "Guardate il mondo dalla",
      title2: "vostra prospettiva.",
      lede: "Roi. La collezione.",
      ctaCollection: "Vedi la collezione",
      ctaConseil: "Chiedere consiglio",
      ctaAtelier: "La maison",
      scroll: "Scorri",
      edition: "",
    },
    showcase: {
      eyebrow: "La collezione",
      title1: "Roi.",
      title2: "Una firma, quattro pezzi.",
      lede: "Acetato italiano, cerniere metalliche, montaggio a mano. Quattro montature da portare ogni giorno.",
      piece: "Pezzo",
      footerLine: "Roi · La collezione",
      link: "Tutta la collezione",
    },
    alternating: { voirLaPiece: "Vedi il pezzo" },
    avisTeaser: {
      eyebrow: "Feedback",
      title1: "Portate Roi?",
      title2: "Diteci qualche parola.",
      body: "Un feedback onesto vale più di uno slogan. Scriveteci cosa portate, come lo portate, cosa potrebbe essere migliore.",
      ctaShare: "Condividere un feedback",
      ctaSee: "Chiedere consiglio",
    },
    endCall: {
      eyebrow: "Roi · La collezione",
      line1: "Guardate il mondo dalla",
      line2: "vostra prospettiva.",
      body: "Roi. Una firma, quattro pezzi.",
      ctaCollection: "Vedi la collezione",
      ctaAtelier: "Scoprire la maison",
    },
  },
  collectionIndex: {
    metaTitle: "La Collezione — Roi.",
    metaDescription:
      "Roi. Quattro pezzi: Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude. Acetato italiano, montaggio a mano, 78,90 € a pezzo.",
    breadcrumbHome: "Home",
    breadcrumbCollection: "Collezione",
    eyebrowNumeral: "",
    eyebrowLabel: "Roi",
    title: ["Roi.", "Una firma,", "quattro pezzi."],
    lede:
      "Acetato italiano, cerniere metalliche, montaggio a mano.\nUna scrittura editoriale, una sola firma.",
    subtitles: "Rouge · Noir · Cristal · Émeraude",
    subtitles2: "Parigi · Berlino · Londra",
    editorialTitle1: "Roi si porta.",
    editorialTitle2: "Non si espone.",
    editorialBody:
      "La collezione non è esposta in vetrina. La mostriamo su appuntamento, a quattr’occhi, a Parigi, Berlino e Londra.",
    editorialCta: "Scoprire la maison",
  },
  piece: {
    metaDescriptionSuffix: (name, price) =>
      `${name} — acetato italiano, montaggio a mano. ${price}.`,
    chapterPrefix: "",
    theLieu: "Il luogo",
    theHeure: "L’ora",
    silhouette: "Silhouette",
    section1Eyebrow: "",
    section1Label: "Materia",
    section2Eyebrow: "",
    section2Label: "Note sensoriali",
    section2Title1: "Come questo paio",
    section2Title2: "abita un luogo.",
    section2Body:
      "Quattro note — né profumo, né materia: un modo di tenere la luce.",
    noteLabel: (n) => `Nota 0${n}`,
    lireQuatreAtmospheres: "Leggere il journal",
    section3Eyebrow: "",
    section3Label: "Acquistare",
    prixParPiece: "Prezzo a pezzo",
    niPlusNiMoins: "Lenti correttive o da sole incluse.",
    editionBreveBody:
      "Consegnato nel suo astuccio dedicato. Consegna a mano a Parigi, trasporto tracciato altrove in Europa.",
    twoWays: "Due modi per riceverlo",
    way1Title: "Appuntamento privato",
    way1Body:
      "Parigi, Berlino o Londra. Prova, regolazione, poi lenti correttive o da sole.",
    way2Title: "Consegna nel suo astuccio",
    way2Body: "A mano a Parigi; trasporto tracciato altrove in Europa.",
    ctaCollection: "Vedi la collezione",
    ctaEcrire: "Scrivere alla maison",
    section4Eyebrow: "",
    section4Label: "Gli altri tre pezzi",
    othersPieces: "Gli altri tre pezzi",
  },
  atelier: {
    metaTitle: "La Maison",
    metaDescription:
      "L’Atelier d’Or, maison francese di occhialeria. Storia, savoir-faire, materiali e dettagli della collezione Roi.",
    heroEyebrowNum: "",
    heroEyebrowLabel: "La maison",
    heroTitle1: "Una maison",
    heroTitle2: "francese di occhialeria.",
    heroLede:
      "L’Atelier d’Or disegna e fabbrica occhiali in Francia. Acetato italiano, cerniere metalliche, montaggio a mano, una collezione pensata per essere portata ogni giorno.",
    originEyebrow: "",
    originLabel: "Storia",
    originTitle: "Da un atelier parigino alla collezione Roi.",
    originParas: [
      "L’Atelier d’Or è nata da un disaccordo: l’occhialeria contemporanea confondeva troppo spesso accessorio e oggetto usa-e-getta. La maison è stata fondata per rispondere con una sola cosa — una montatura disegnata per durare, da portare anni senza invecchiare.",
      "Lo studio si trova a Parigi. Gli acetati vengono scelti in Italia, presso le stesse manifatture che riforniscono le grandi maison da oltre un secolo. Ogni lastra viene esaminata per profondità, densità e comportamento alla luce.",
      "La montatura viene poi montata a mano, a Parigi, in un atelier partner. Il finissaggio è controllato a ogni passaggio: rivetti, cerniere, lucidatura. Nulla è delegato alla macchina quando l’occhio umano fa meglio.",
    ],
    approachEyebrow: "",
    approachLabel: "Design",
    approachTitle: "Tre principi che tengono la linea.",
    approachParas: [
      "Non cerchiamo la novità a ogni costo. Cerchiamo la correttezza di un disegno, la densità di una materia, l’equità di un prezzo. Sono i tre soli arbitri del lavoro.",
    ],
    principles: [
      { t: "Un disegno duraturo", b: "La silhouette deve durare cinque o dieci anni, non una stagione. Ogni curva è lavorata per resistere alla moda." },
      { t: "Una materia scelta", b: "Acetato italiano colorato in massa, cerniere e rivetti metallici rifiniti a mano. Scegliamo la lastra come un tessuto." },
      { t: "Un circuito diretto", b: "Vendita online e su appuntamento a Parigi, Berlino, Londra. Il prezzo riflette il pezzo, mai l’intermediario." },
    ],
    principleWord: "Principio",
    collectionEyebrow: "",
    collectionLabel: "La collezione",
    collectionTitle: "Roi — una firma, quattro pezzi.",
    collectionBody:
      "Roi riunisce quattro pezzi: Rouge, Noir, Cristal, Émeraude. La stessa mano di disegno, quattro tonalità di acetato italiano, quattro finissaggi metallici. Pensata per essere portata dal mattino alla sera, in città come in casa.",
    materialsEyebrow: "",
    materialsLabel: "Materiali & dettagli",
    materialsTitle: "Di cosa è fatto un pezzo.",
    materialsIntro:
      "I materiali sono scelti per densità, tenuta del colore e comportamento in mano. I dettagli si aggiungono con parsimonia.",
    materialsItems: [
      { t: "Acetato italiano", b: "Colorato in massa, lastra selezionata per profondità e comportamento alla luce. Lucidato a mano fino al silenzio della materia." },
      { t: "Cerniere metalliche", b: "Cerniere in ottone finite in oro, argento o bronzo a seconda del pezzo. Viti a vista, regolabili da qualunque ottico." },
      { t: "Silhouette calibrate", b: "Rettangolo, panto alto, ovale allungato, panto maschile. Quattro silhouette scelte tra decine di disegni di studio." },
      { t: "Lenti su richiesta", b: "Correttive o da sole, montate dal nostro mastro ottico. Incluse nel prezzo del pezzo." },
    ],
    ctaEyebrow: "Collezione",
    ctaTitle1: "Guardate il mondo dalla",
    ctaTitle2: "vostra prospettiva.",
    ctaBody: "La collezione Roi si scopre online. Una firma, quattro pezzi.",
    cta: "Vedi la collezione",
  },
  avis: {
    metaTitle: "Opinioni",
    metaDescription:
      "Ciò che la maison ascolta. Le prime testimonianze stanno arrivando — la parola si prende in fiducia.",
    eyebrowNum: "",
    eyebrowLabel: "Ciò che la maison ascolta",
    title1: "La parola,",
    title2: "quando arriva.",
    lede:
      "Non fabbrichiamo opinioni. Le prime testimonianze arriveranno da chi porta Roi.",
    testimonial: (n) => `Testimonianza ${n}`,
    bientot: "«Presto.»",
    aParaitre: "In arrivo",
    ariaLabel: "Spazi per le future testimonianze",
    ctaBody:
      "Portate Roi? Scriveteci una parola — pubblicheremo le testimonianze che descrivono il pezzo onestamente, senza ritocchi.",
    cta: "Condividere una parola",
  },
  faq: {
    metaTitle: "Domande",
    metaDescription:
      "Quello che ci viene spesso chiesto: il prodotto, l’ordine, la consegna, il reso, la cura.",
    eyebrowNum: "",
    eyebrowLabel: "Ciò che ci viene chiesto",
    title1: "Le domande,",
    title2: "le risposte.",
    lede:
      "Alcune risposte definitive arriveranno all’apertura del negozio. Le altre sono già qui.",
    footerBody: "Una domanda che non è qui? Scriveteci — rispondiamo personalmente.",
    footerCta: "Porre la mia domanda",
    pending: "In fase di stesura.",
    sections: [
      {
        title: "Il pezzo",
        eyebrow: "Il prodotto",
        qas: [
          { q: "Quanto costa un pezzo Roi?", a: "Ogni pezzo della collezione Roi è proposto a 78,90 €. Né più, né meno." },
          { q: "Quanti modelli compongono la collezione?", a: "La prima collezione comprende quattro pezzi: Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude." },
          { q: "Ogni esemplare è numerato?", a: "Sì. Ogni esemplare è numerato a mano, uno per uno." },
          { q: "Posso scegliere tra più colori?", a: "Ogni pezzo ha una tonalità definita. Le quattro atmosfere corrispondono ai quattro pezzi." },
        ],
      },
      {
        title: "L’ordine",
        eyebrow: "Ordinare",
        qas: [
          { q: "Come posso ordinare?", a: "L’ordine si effettua online, direttamente dalla pagina del pezzo.", link: { text: "Vedi la collezione", before: " ", after: ".", href: "/collection" } },
          { q: "Quali metodi di pagamento accettate?", a: "In fase di stesura. I metodi di pagamento definitivi saranno pubblicati all’apertura del negozio.", pending: true },
          { q: "Posso annullare il mio ordine dopo il pagamento?", a: "In fase di stesura. Le condizioni di annullamento saranno pubblicate all’apertura del negozio.", pending: true },
        ],
      },
      {
        title: "La consegna",
        eyebrow: "Consegna",
        qas: [
          { q: "Dove consegnate?", a: "In fase di stesura. Le zone di consegna saranno comunicate all’apertura del negozio.", pending: true },
          { q: "Quali sono i tempi?", a: "In fase di stesura. I tempi indicativi saranno comunicati all’apertura.", pending: true },
          { q: "Quali sono le spese di spedizione?", a: "In fase di stesura. La griglia sarà pubblicata all’apertura.", pending: true },
        ],
      },
      {
        title: "Il reso",
        eyebrow: "Reso & cambio",
        qas: [
          { q: "Posso restituire il mio pezzo?", a: "In fase di stesura. Le condizioni di reso saranno pubblicate all’apertura del negozio. Il diritto di recesso legale di quattordici giorni si applica in ogni caso agli acquirenti consumatori nell’Unione europea.", pending: true },
          { q: "Come procedere con un reso?", a: "In fase di stesura.", pending: true },
        ],
      },
      {
        title: "La cura",
        eyebrow: "Cura",
        qas: [
          { q: "Come pulire il mio pezzo?", a: "Utilizzate un panno in microfibra pulito, asciutto o leggermente umido. Evitate prodotti abrasivi, solventi e alcol, che danneggiano la finitura." },
          { q: "Come conservare il mio pezzo?", a: "Nel suo astuccio dedicato, al riparo da calore e luce diretta prolungata." },
          { q: "Che fare in caso di vite allentata o asta deformata?", a: "Un ottico saprà regolare o stringere. Per una regolazione dalla maison, scriveteci." },
        ],
      },
    ],
  },
  conseil: {
    metaTitle: "Consulenza privata",
    metaDescription:
      "Una parola alla maison. Un astuccio si apre, una carta vi attende — e il nostro consiglio è personalmente rivolto a voi.",
    eyebrowNum: "",
    eyebrowLabel: "La maison vi ascolta",
    title1: "Consigliate-",
    title2: "mi.",
    lede:
      "Una conversazione a quattr’occhi. Aprite l’astuccio, affidate qualche parola alla maison.",
    captionA: "LA CORRISPONDENZA",
    captionB: "01 — UNA PAROLA ALLA MAISON",
    openLabel: "Aprire l’astuccio",
    openAria: "Aprire l’astuccio di consulenza",
    lidLine1: "L’Atelier d’Or",
    lidLine2: "PARIS",
    baseSignature: "FATTO PER IL VOSTRO SGUARDO",
    cardBrand: "L’Atelier d’Or",
    cardNumber: "CORRISPONDENZA PRIVATA",
    cardHeader: "La vostra consulenza personale",
    nameLabel: "Il vostro nome",
    emailLabel: "La vostra e-mail",
    messageLabel: "Come possiamo consigliarvi?",
    privacyLink: "Le vostre parole restano tra noi.",
    submit: "Inviare la mia richiesta",
    submitting: "Invio in corso…",
    thanksTitle: "Grazie.",
    thanksBody: "Vi risponderemo personalmente.",
    emailTitle: "A voi la firma.",
    emailBody1:
      "Inviate il vostro messaggio dalla vostra posta. Se non si è aperta, scrivete a",
    emailBody2: ".",
    emailBackToCard: "Tornare alla mia carta",
    emailStowCard: "Riporre la mia carta ↘",
    footnoteA: "UN ASTUCCIO. QUALCHE PAROLA. IL VOSTRO SGUARDO.",
    footnoteB: "L’Atelier d’Or — Paris",
    errorEmpty: "Qualche parola e il vostro nome, perché possiamo rispondere.",
    errorSetup: "Il servizio di corrispondenza è in configurazione. Riprovate più tardi.",
    errorSend: "Il vostro messaggio non è stato inviato. Le vostre parole sono conservate; riprovate.",
    pocket: "ALLA VOSTRA ATTENZIONE",
    noscriptWrite: "Per una consulenza personale, scrivete a",
    processEyebrow: "Come consigliamo",
    processTitle: "Una consulenza condotta da un mastro ottico.",
    processLede:
      "Nessun modulo automatico. Ogni richiesta è letta, studiata e seguita da una risposta personale entro ventiquattro ore lavorative.",
    steps: [
      { t: "Voi ci scrivete", b: "Diteci cosa cercate: silhouette, tonalità, correzione, uso quotidiano. Leggiamo ogni parola." },
      { t: "Noi studiamo", b: "Un mastro ottico studia la vostra richiesta in rapporto alla collezione. Scegliamo il pezzo che si adatta al vostro viso, non il più venduto." },
      { t: "Noi rispondiamo", b: "Riceverete un consiglio scritto entro ventiquattro ore lavorative: silhouette raccomandata, tonalità, note di porto, e il prossimo passo — prova o ordine." },
    ],
    rendezvousEyebrow: "Appuntamento privato",
    rendezvousTitle: "Provare i pezzi, dal vero.",
    rendezvousBody:
      "Se preferite provare prima dell’ordine, un appuntamento privato può essere organizzato a Parigi, Berlino o Londra. Specificatelo nel vostro messaggio, vi proporremo un orario.",
    rendezvousCities: ["Parigi", "Berlino", "Londra"],
    expectEyebrow: "Ciò che ricevete",
    expectTitle: "Cosa contiene una consulenza.",
    expectItems: [
      "Una raccomandazione precisa di silhouette, in base al vostro viso e al vostro uso.",
      "Un suggerimento di tonalità, in rapporto al vostro incarnato e al vostro guardaroba.",
      "Un parere di porto — ogni giorno, sera, lavoro — perché il pezzo trovi il suo posto.",
      "Il prossimo passo: ordine online o appuntamento privato.",
    ],
  },
  journal: {
    metaTitle: "Journal",
    metaDescription:
      "Le note della maison. Design, materiali, savoir-faire — ciò che compone la collezione Roi.",
    eyebrowNum: "",
    eyebrowLabel: "Le note della maison",
    title1: "Le note",
    title2: "della maison.",
    title3: "",
    lede: "Design, materiali, savoir-faire. Testi che spiegano la collezione Roi.",
    readCahier: "Leggere la nota",
  },
  cahier: {
    labelChapter: (numeral) => `${numeral}`,
    signatureSuffix: "L’Atelier d’Or",
    piecesEyebrowNum: "",
    piecesEyebrowLabel: "Scoprire i pezzi",
    othersEyebrowNum: "",
    othersEyebrowLabel: "Le altre note",
    cahierN: (n) => `Nota ${n}`,
  },
  legal: {
    articleWord: "Articolo",
    mentions: {
      metaTitle: "Note legali",
      metaDescription: "Informazioni legali del sito di L’Atelier d’Or. Società in costituzione.",
      numeral: "",
      rubric: "Note legali",
      title: "Note legali.",
      chapo: "Ciò che la maison è, nelle forme. Nulla di più, nulla di meno.",
      sections: [
        { title: "Stato del sito", body: ["L’Atelier d’Or è una maison in costituzione. Il presente sito è presentato a titolo editoriale e non effettua ad oggi alcuna vendita al pubblico.", "Le note legali definitive — ragione sociale, sede legale, numero RCS/SIRET, capitale, direzione della pubblicazione, hosting — saranno pubblicate qui non appena la società sarà iscritta."] },
        { title: "Editore", body: ["L’Atelier d’Or (denominazione provvisoria).", "Dati dell’editore comunicati su richiesta scritta tramite il modulo di contatto."] },
        { title: "Hosting", body: ["Il sito è ospitato da Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA."] },
        { title: "Proprietà intellettuale", body: ["L’insieme dei contenuti presenti sul sito — testi, fotografie, disegni, marchi, loghi — è protetto dalle leggi francesi e internazionali sulla proprietà intellettuale.", "Qualsiasi riproduzione, rappresentazione o diffusione, in tutto o in parte, è soggetta all’autorizzazione scritta preventiva della maison."] },
        { title: "Contatto", body: ["Qualunque domanda relativa al contenuto o all’uso del sito può essere indirizzata tramite la pagina «Consiglio»."] },
      ],
    },
    privacy: {
      metaTitle: "Privacy",
      metaDescription: "Ciò che la maison raccoglie, ciò che non raccoglierà mai e i vostri diritti.",
      numeral: "",
      rubric: "Privacy",
      title: "I vostri contatti non escono mai dalla maison.",
      chapo: "Ciò che raccogliamo, ciò che non raccoglieremo mai, ciò che potete chiederci in qualsiasi momento.",
      sections: [
        { title: "Ciò che la maison raccoglie", body: ["Esclusivamente le informazioni che ci trasmettete volontariamente tramite la pagina «Consiglio»: nome, e-mail e il messaggio che scegliete di allegare.", "Non raccogliamo alcun dato comportamentale, alcun profilo pubblicitario, alcun identificatore di tracciamento di terzi."] },
        { title: "Ciò che la maison non fa", body: ["Non vendiamo i vostri contatti. Non li condividiamo con alcuna agenzia pubblicitaria, rete pubblicitaria o partner commerciale.", "Non utilizziamo tracker a fini di misurazione d’audience di terzi, né strumenti di retargeting."] },
        { title: "Cookie", body: ["Il sito utilizza esclusivamente cookie strettamente necessari — visualizzazione, preferenze di accessibilità, cache.", "Nessun cookie di misurazione d’audience di terzi, nessun cookie pubblicitario."] },
        { title: "I vostri diritti", body: ["Conformemente al Regolamento generale sulla protezione dei dati (RGPD), avete diritto di accesso, rettifica, cancellazione, limitazione e portabilità dei vostri dati personali.", "Potete esercitare questi diritti scrivendoci tramite la pagina «Consiglio». Rispondiamo entro ventiquattro ore lavorative."] },
        { title: "Durata di conservazione", body: ["Gli scambi sono conservati per la durata del dialogo, poi cancellati su semplice richiesta. Nessuna conservazione prolungata senza motivo espresso."] },
      ],
    },
    a11y: {
      metaTitle: "Accessibilità",
      metaDescription: "I nostri impegni in materia di accessibilità: WCAG 2.2 AA, rispetto delle preferenze di movimento, contatto.",
      numeral: "",
      rubric: "Accessibilità",
      title: "Una lettura, a vista e a voce, per tutti.",
      chapo: "Il sito mira al livello WCAG 2.2 AA e rispetta le preferenze di movimento del sistema.",
      sections: [
        { title: "Il nostro obiettivo", body: ["Il sito è progettato per raggiungere il livello di conformità WCAG 2.2 AA (Web Content Accessibility Guidelines).", "Verifichiamo regolarmente contrasto, ordine dei contenuti, navigazione da tastiera e compatibilità con i lettori di schermo."] },
        { title: "Movimento ridotto", body: ["Le animazioni di entrata, rivelazione e transizione del sito vengono disattivate automaticamente quando il vostro sistema è impostato su «ridurre le animazioni» (prefers-reduced-motion).", "Nessuna animazione essenziale alla comprensione è presente."] },
        { title: "Navigazione", body: ["Tutta la navigazione è accessibile da tastiera. Le aree interattive dispongono di uno stato di focus visibile.", "Link e pulsanti sono annunciati in parole intere, senza gergo."] },
        { title: "Segnalazione", body: ["Se incontrate una difficoltà di accesso a un contenuto, scriveteci tramite la pagina «Consiglio». Rispondiamo entro ventiquattro ore lavorative e correggiamo, per quanto possibile, senza ritardo."] },
      ],
    },
    retractation: {
      metaTitle: "Diritto di recesso",
      metaDescription: "I vostri diritti di acquirente: termine di recesso, procedura, rimborso.",
      numeral: "",
      rubric: "Diritto di recesso",
      title: "Un termine, un gesto, un rimborso.",
      chapo: "Avete un diritto di recesso di quattordici giorni dalla consegna del vostro pezzo.",
      sections: [
        { title: "Termine", body: ["Avete quattordici giorni di calendario dal giorno di ricezione del pezzo per esercitare il vostro diritto di recesso, senza dover motivare la richiesta.", "Questo diritto si applica agli acquirenti consumatori all’interno dell’Unione europea, in conformità al Codice del consumo e alla direttiva europea 2011/83/UE."] },
        { title: "Come avvisarci", body: ["Per esercitare il vostro diritto di recesso, scriveteci tramite la pagina «Consiglio» o per e-mail, indicando il nome sull’ordine e il numero del pezzo, prima della scadenza dei quattordici giorni.", "Una dichiarazione scritta inequivocabile è sufficiente. Accusiamo ricevuta senza ritardo e vi trasmettiamo la procedura di reso."] },
        { title: "Reso del pezzo", body: ["Il pezzo deve esserci rinviato nel suo astuccio, completo e non alterato, entro quattordici giorni successivi alla vostra dichiarazione.", "Le spese di reso restano a vostro carico, salvo diversa indicazione da parte nostra."] },
        { title: "Rimborso", body: ["Il rimborso del pezzo viene effettuato al più tardi quattordici giorni dopo la ricezione del reso, con il mezzo di pagamento utilizzato per l’acquisto, salvo diverso accordo.", "Le spese di spedizione iniziali vengono rimborsate negli stessi termini, ad eccezione del sovrapprezzo legato a una modalità di spedizione più costosa della consegna standard."] },
        { title: "Eccezioni", body: ["I pezzi personalizzati — montaggio di lenti correttive alla vostra correzione visiva — non sono soggetti al diritto di recesso, in conformità all’articolo L.221-28 del Codice del consumo.", "Per qualsiasi domanda su questo caso particolare, scriveteci: studiamo ogni situazione."] },
      ],
    },
  },
  feedback: {
    metaTitle: "Feedback",
    metaDescription:
      "Un feedback onesto sulla collezione Roi. Ciò che portate, ciò che potrebbe essere migliore.",
    eyebrowNum: "",
    eyebrowLabel: "Un ritorno alla maison",
    title1: "Ciò che",
    title2: "volete dirci.",
    lede:
      "Un feedback breve e onesto vale più di un lungo complimento. Leggiamo ogni messaggio e pubblichiamo i feedback che descrivono il pezzo senza ritocchi.",
    formAria: "Modulo di feedback",
    nameLabel: "Il vostro nome",
    emailLabel: "La vostra e-mail",
    modelLabel: "Pezzo interessato",
    modelPlaceholder: "Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude…",
    ratingLabel: "La vostra valutazione",
    ratingOptions: ["Eccellente", "Buono", "Sufficiente", "Da rivedere"],
    messageLabel: "Il vostro feedback",
    consent: "Accetto che questo feedback possa essere citato, senza il mio nome, sulla pagina Opinioni.",
    submit: "Inviare il mio feedback",
    submitting: "Invio in corso…",
    thanksTitle: "Grazie.",
    thanksBody: "Abbiamo ricevuto il vostro feedback. Rispondiamo personalmente.",
    errorEmpty: "Qualche parola e il vostro nome, perché possiamo rispondere.",
    errorSetup: "Il servizio è in configurazione. Riprovate più tardi.",
    errorSend: "Il vostro messaggio non è stato inviato. Le vostre parole sono conservate; riprovate.",
    conseilFooterBody: "Una domanda più personale, un consiglio su un pezzo, una regolazione?",
    conseilFooterCta: "Chiedere consiglio",
    promiseEyebrow: "Cosa ne facciamo",
    promiseTitle: "Ogni feedback cambia il pezzo successivo.",
    promisePoints: [
      { t: "Leggiamo tutto", b: "Ogni messaggio è letto dal team prodotto, non da un filtro automatico. I feedback valgono come briefing interno." },
      { t: "Aggiustiamo", b: "Un commento ricorrente su una curva, una tonalità, un dettaglio diventa una correzione. La prossima collezione ne porta la traccia." },
      { t: "Citiamo, con il vostro consenso", b: "I feedback che ci autorizzate a citare appariranno sulla pagina Opinioni, senza il vostro nome, nella forma esatta in cui li avete scritti." },
    ],
  },
  pieceSwitcher: {
    label: "Altri pezzi",
    aria: (name) => `${name} — vedi il pezzo`,
  },
  pieces: {
    "roi-rouge": {
      tagline: "Rettangolo, acetato rosso con finitura dorata.",
      chapter: "Il Salone",
      place: "Un salone privato, tardi la sera.",
      time: "Tarda sera",
      silhouette: "Rettangolo dagli angoli ammorbiditi, bordo netto.",
      materie: "Acetato colorato in massa, finitura dorata sulle cerniere.",
      details: ["Silhouette rettangolo", "Acetato rosso in massa", "Finitura dorata sulle cerniere"],
      notes: ["cuoio patinato", "tabacco chiaro", "pepe lungo", "cera nera"],
      scene: "Il velluto trattiene la luce più a lungo della pelle.",
      teintes: [{ name: "Rouge Ember" }, { name: "Rouge Profond" }],
    },
    "roi-noir": {
      tagline: "Panto, acetato verde bosco con rivetti bronzo.",
      chapter: "La Caccia",
      place: "Un padiglione al limitare del bosco, nel tardo pomeriggio.",
      time: "Prima del dîner",
      silhouette: "Panto alto, linea chiusa, bordo morbido.",
      materie: "Acetato verde profondo, rivetti bronzo con finitura opaca.",
      details: ["Silhouette panto alta", "Acetato verde bosco", "Rivetti bronzo opaco"],
      notes: ["muschio", "cedro", "cuoio da selleria", "inchiostro vegetale"],
      scene: "Legno umido, tweed asciutto. Niente di troppo.",
      teintes: [{ name: "Noir Encre" }, { name: "Noir Fumé" }],
    },
    "roi-cristal": {
      tagline: "Ovale, acetato cristallo con cerniere argentate.",
      chapter: "La Cappella",
      place: "Una cappella di campagna, al primo mattino.",
      time: "Primo mattino",
      silhouette: "Ovale allungato, bordo cristallino molto sottile.",
      materie: "Acetato cristallo traslucido, finitura argentata.",
      details: ["Silhouette ovale allungata", "Acetato cristallo traslucido", "Finitura argentata sulle cerniere"],
      notes: ["iris", "acqua chiara", "mandorla fresca", "carta velina"],
      scene: "Un giorno pallido, una luce che non tradisce nessuno.",
      teintes: [{ name: "Blanc de Neige" }, { name: "Blanc Nacré" }],
    },
    "roi-emeraude": {
      tagline: "Panto, acetato smeraldo con finitura dorata.",
      chapter: "Il Dîner",
      place: "Un dîner in un’orangerie, sotto gli alberi.",
      time: "Di sera",
      silhouette: "Panto maschile, bordo scolpito, aste lunghe.",
      materie: "Acetato smeraldo, finitura dorata sul bordo.",
      details: ["Silhouette panto maschile", "Acetato smeraldo tagliato a mano", "Finitura dorata sul bordo"],
      notes: ["gardenia", "fico maturo", "violetta polverosa", "vino ambrato"],
      scene: "I bicchieri tintinnano, le candele tremano, qualcuno ride piano.",
      teintes: [{ name: "Vert Émeraude" }, { name: "Vert Forêt" }],
    },
  },
  cahiers: {
    "geste-juste": {
      rubric: "Savoir-faire",
      title: "Il gesto giusto, a tre centimetri dal viso.",
      chapo: "Perché il montaggio a mano resta l’unico modo per tenere la linea di una montatura.",
      read: "5 min",
      date: "Settembre",
      body: [
        "Un paio di occhiali si porta a tre centimetri dal viso. Questo dettaglio basta a cambiare il modo in cui si sceglie ogni curva, ogni bordo, ogni angolo.",
        "Montiamo ogni pezzo a mano. Significa decidere, a ogni passaggio, quando fermarsi. Una macchina può andare più veloce; non sa fermarsi al momento giusto.",
        "Il finissaggio è l’unico momento in cui si rilegge tutto il resto. Un pezzo non lascia l’atelier finché non ha questo silenzio — questo modo di tenere la luce come una pelle.",
        "Nulla di più. È l’unica cosa che separa un pezzo ben fatto da uno che lo è pressappoco.",
      ],
    },
    "quatre-atmospheres": {
      rubric: "Collezione",
      title: "Rouge, Noir, Cristal, Émeraude.",
      chapo: "Quattro pezzi, una stessa firma. Rettangolo, Panto, Ovale, Panto maschile: ecco cosa compone Roi.",
      read: "4 min",
      date: "Settembre",
      body: [
        "Roi riunisce quattro pezzi. Rouge, Noir, Cristal, Émeraude. La stessa mano di disegno, quattro tonalità di acetato italiano, quattro finissaggi metallici.",
        "Roi Rouge è una silhouette rettangolo, acetato rosso colorato in massa, cerniere dorate. Per visi che chiedono un bordo netto.",
        "Roi Noir è un panto alto, acetato verde bosco, rivetti bronzo opachi. La montatura più chiusa della collezione.",
        "Roi Cristal è un ovale allungato, acetato cristallo traslucido, cerniere argentate. La più discreta, la più luminosa.",
        "Roi Émeraude è un panto maschile, acetato smeraldo, finitura dorata. Aste lunghe, bordo scolpito. Per visi che chiedono altezza.",
      ],
    },
    "quatre-vingts-euros": {
      rubric: "Design",
      title: "Perché un prezzo giusto cambia il pezzo.",
      chapo: "78,90 € a pezzo. Vendita diretta, acetato italiano, montaggio a mano. Come ci arriviamo.",
      read: "4 min",
      date: "Agosto",
      body: [
        "Il prezzo di una montatura non è una fatalità. La maggior parte è catturata dalla distribuzione: tre vetrine e due cataloghi tra l’atelier e il viso.",
        "Vendiamo in diretta. Nessun negozio fisico, nessun intermediario. Il prezzo riflette il pezzo — l’acetato, il metallo, il tempo di montaggio — e nient’altro.",
        "Lavoriamo con un atelier partner a Parigi. L’acetato viene dall’Italia, da manifatture che riforniscono le grandi maison da generazioni. Scegliamo le lastre noi stessi.",
        "Ogni pezzo è controllato a ogni passaggio: taglio, fresatura, piegatura, lucidatura, rivettatura, finitura. Il finissaggio è ispezionato a occhio nudo, a mano, sotto luce radente.",
        "Un prezzo giusto non è un prezzo basso. È un prezzo che dice la verità del pezzo — ciò che contiene, ciò che è costato produrre, ciò che vale a portarlo.",
      ],
    },
  },
  langSwitcher: {
    label: "Lingua",
    fr: "Français",
    de: "Deutsch",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { fr, de, en, it };
