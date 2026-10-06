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
    deliveryEyebrow: string;
    deliveryTitle: string;
    deliveryBody: string;
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
    principles: { w: string; t: string; b: string }[];
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
    ecrireLaMaison: "Nous contacter",
    lAtelier: "La Maison",
    decouvrirLAtelier: "À propos",
    defiler: "Défiler",
    passerIntro: "Passer l’intro",
    menu: "Menu",
    ouvrirMenu: "Ouvrir le menu",
    fermerMenu: "Fermer le menu",
    skipToContent: "Aller au contenu",
    voyezLeMonde1: "Voyez le monde depuis",
    voyezLeMonde2: "votre propre perspective",
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
    houseIntro: "Lunettes faites main.\nÉdition confidentielle.",
    contactWriteUs: "Nous écrire",
    ctaCollection: "Voir la collection",
  },
  footer: {
    petiteMaisonFr: "Maison française de lunetterie",
    ligne1: "Lunettes faites main.",
    ligne2: "Collection exclusivement en ligne, livrée dans le monde entier.",
    columnMaison: "Maison",
    columnCollection: "Collection",
    columnMentions: "Mentions",
    labelPremiereCollection: "",
    labelMentionsLegales: "Mentions légales",
    labelConfidentialite: "Confidentialité",
    labelAccessibilite: "Accessibilité",
    labelRetractation: "Droit de rétractation",
    copyright: "© L’Atelier d’Or",
    editorialTag: "Lunettes faites main",
    editorialTag2: "Édition confidentielle",
  },
  newsletter: {
    label: "Lettre de la maison",
    description:
      "Découvrez les nouvelles collections, les pièces sélectionnées et les actualités de L’Atelier d’Or, directement par e-mail.",
    placeholder: "Votre adresse e-mail",
    submit: "S’inscrire à la newsletter",
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
      eyebrow: "La collection · Roi",
      title1: "Voyez le monde depuis",
      title2: "votre propre perspective",
      lede: "",
      ctaCollection: "Voir la collection",
      ctaConseil: "Demander conseil",
      ctaAtelier: "La maison",
      scroll: "Défiler",
      edition: "",
    },
    showcase: {
      eyebrow: "",
      title1: "",
      title2: "Nouvelle collection.",
      lede: "",
      piece: "Modèle",
      footerLine: "Roi · La collection",
      link: "Toute la collection",
    },
    alternating: {
      voirLaPiece: "Voir la pièce",
    },
    avisTeaser: {
      eyebrow: "Feedback",
      title1: "Vous portez notre maison ?",
      title2: "Partagez votre avis.",
      body: "Vos retours nous aident à faire évoluer la collection.",
      ctaShare: "Donner un avis",
      ctaSee: "Demander conseil",
    },
    endCall: {
      eyebrow: "Roi · La collection",
      line1: "Voyez le monde depuis",
      line2: "votre propre perspective",
      body: "Roi. Quatre modèles. Disponible en ligne.",
      ctaCollection: "Voir la collection",
      ctaAtelier: "À propos",
    },
  },
  collectionIndex: {
    metaTitle: "La Collection — Roi.",
    metaDescription:
      "Roi. Quatre pièces : Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude. Acétate premium, charnières métalliques, 78,90 € l’exemplaire.",
    breadcrumbHome: "Accueil",
    breadcrumbCollection: "Collection",
    eyebrowNumeral: "",
    eyebrowLabel: "Roi",
    title: ["Roi.", "La collection.", "Quatre modèles."],
    lede:
      "Acétate premium, charnières métalliques. Façonné selon mes propres idées.\n78,90 € par modèle, verres correcteurs ou solaires inclus.",
    subtitles: "Rouge · Noir · Cristal · Émeraude",
    subtitles2: "Édition confidentielle",
    editorialTitle1: "Exclusivement en ligne.",
    editorialTitle2: "Livrée dans le monde entier.",
    editorialBody:
      "La collection est disponible exclusivement en ligne, livrée dans son écrin dans le monde entier.",
    editorialCta: "Voir la collection",
  },
  piece: {
    metaDescriptionSuffix: (name, price) =>
      `${name}. Acétate premium, charnières métalliques. ${price}.`,
    chapterPrefix: "",
    theLieu: "Usage",
    theHeure: "Moment",
    silhouette: "Silhouette",
    section1Eyebrow: "",
    section1Label: "Matière",
    section2Eyebrow: "",
    section2Label: "Caractère",
    section2Title1: "Caractère",
    section2Title2: "du modèle.",
    section2Body:
      "Quatre mots-clés qui décrivent le caractère du modèle.",
    noteLabel: (n) => `${String(n).padStart(2, "0")}`,
    lireQuatreAtmospheres: "Lire l’article",
    section3Eyebrow: "",
    section3Label: "Prix & livraison",
    prixParPiece: "Prix par modèle",
    niPlusNiMoins: "Verres correcteurs ou solaires inclus.",
    editionBreveBody:
      "Livré dans son écrin dédié. Transport suivi dans le monde entier.",
    deliveryEyebrow: "Livraison",
    deliveryTitle: "Dans son écrin, dans le monde entier.",
    deliveryBody:
      "Chaque pièce est expédiée dans son écrin dédié, par transport suivi dans le monde entier.",
    ctaCollection: "Voir la collection",
    ctaEcrire: "Nous contacter",
    section4Eyebrow: "",
    section4Label: "Autres modèles",
    othersPieces: "Autres modèles",
  },
  atelier: {
    metaTitle: "La maison",
    metaDescription:
      "L’Atelier d’Or, lunettes faites main avec un dessin propre. Approche design, matériaux et détails de la collection Roi.",
    heroEyebrowNum: "",
    heroEyebrowLabel: "La maison",
    heroTitle1: "Une maison indépendante",
    heroTitle2: "de lunetterie.",
    heroLede:
      "L’Atelier d’Or dessine des lunettes pour celles et ceux qui veulent rendre leur style personnel visible. La collection réunit des formes claires, des couleurs expressives et des détails choisis avec soin.",
    originEyebrow: "",
    originLabel: "Histoire",
    originTitle: "Quatre modèles. Une même histoire.",
    originParas: [
      "L’Atelier d’Or est née du souhait de dessiner des lunettes avec une écriture formelle propre. Au cœur du projet : l’alliance de formes claires, de couleurs expressives et de détails choisis avec soin.",
      "Une paire de lunettes accompagne son porteur au quotidien et participe à son expression. C’est pourquoi nous la considérons comme un objet personnel dont la conception doit s’accorder à celui ou celle qui la porte.",
      "De cette exigence est née la collection Roi. Elle réunit quatre modèles autonomes, aux formes et aux couleurs différentes, qui partagent une même ligne formelle. Chaque modèle offre un accès propre à cette idée et laisse place au style personnel de son porteur.",
    ],
    approachEyebrow: "",
    approachLabel: "Design",
    approachTitle: "Notre approche design.",
    approachParas: [
      "Chaque modèle commence par une idée de dessin propre. Forme, couleur et détails sont pensés avec soin, ensemble. Chaque monture reçoit ainsi son expression et reste, en même temps, part de la collection Roi.",
    ],
    principles: [
      {
        w: "Dessin",
        t: "Un dessin propre",
        b: "Les quatre modèles ont été développés à partir d’une idée formelle claire. Chacun a sa propre forme et un caractère reconnaissable.",
      },
      {
        w: "Composition",
        t: "Forme et couleur",
        b: "La silhouette et la teinte façonnent ensemble l’effet d’une monture. La collection Roi offre différentes manières de s’exprimer, de la retenue à l’affirmation.",
      },
      {
        w: "Expression",
        t: "Style personnel",
        b: "Une paire de lunettes devrait s’accorder à celui ou celle qui la porte. Les modèles Roi laissent la place d’exprimer son propre style, de manière consciente et personnelle.",
      },
    ],
    principleWord: "Principe",
    collectionEyebrow: "",
    collectionLabel: "La collection",
    collectionTitle: "Roi : quatre modèles.",
    collectionBody:
      "Rouge, Noir, Cristal et Émeraude. Quatre noms, quatre univers de couleur, quatre caractères. Découvrez le modèle qui correspond à votre style.",
    materialsEyebrow: "",
    materialsLabel: "Matériaux & détails",
    materialsTitle: "Matériaux et détails.",
    materialsIntro:
      "Matière, verres, branches et proportions façonnent ensemble le caractère d’une monture. Chez Roi, chacun de ces éléments fait partie du dessin.",
    materialsItems: [
      {
        t: "Acétate premium",
        b: "Les montures de la collection Roi sont réalisées en acétate premium. Le matériau met en valeur les couleurs des modèles et donne à chaque forme un contour net.",
      },
      {
        t: "Verres avec protection UV",
        b: "Les verres bénéficient d’une protection UV. Roi associe ainsi le caractère de la collection à un détail essentiel pour l’usage quotidien.",
      },
      {
        t: "Branches et charnières",
        b: "Les branches sont solidement liées à la monture. Des charnières stables accompagnent une tenue sûre et sont pensées pour la stabilité de la forme en usage normal.",
      },
      {
        t: "Les cotes de la monture",
        b: "Largeur du verre : 52 mm\nLargeur du pont : 22 mm\nLongueur de la branche : 145 mm\nHauteur du verre : 41 mm\n\nCes cotes vous aident à juger les proportions de la monture. Les autres détails produits se trouvent sur la page de chaque modèle.",
      },
    ],
    ctaEyebrow: "Collection",
    ctaTitle1: "Voyez le monde",
    ctaTitle2: "à votre manière.",
    ctaBody:
      "Découvrez la collection Roi et trouvez la monture qui exprime votre style personnel.",
    cta: "Voir la collection",
  },
  avis: {
    metaTitle: "Avis clients",
    metaDescription:
      "Avis clients sur la collection Roi.",
    eyebrowNum: "",
    eyebrowLabel: "Avis clients",
    title1: "Avis clients.",
    title2: "",
    lede:
      "Avis authentiques de clientes et clients qui portent Roi. Publication dès réception des premiers retours.",
    testimonial: (n) => `Avis ${n}`,
    bientot: "Prochainement",
    aParaitre: "Prochainement",
    ariaLabel: "Emplacements pour les futurs avis",
    ctaBody:
      "Vous portez Roi ? Partagez votre avis — nous le publions avec votre accord.",
    cta: "Donner un avis",
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
    metaTitle: "Conseil personnalisé",
    metaDescription:
      "Conseil personnalisé par notre équipe professionnelle. Réponse sous 24 heures.",
    eyebrowNum: "",
    eyebrowLabel: "Conseil",
    title1: "Conseil",
    title2: "personnalisé.",
    lede:
      "Conseil personnalisé sur le modèle, la silhouette et la correction. Réponse sous 24 heures.",
    captionA: "CONSEIL",
    captionB: "01 — VOTRE DEMANDE",
    openLabel: "Commencer la demande",
    openAria: "Ouvrir le formulaire de conseil",
    lidLine1: "L’Atelier d’Or",
    lidLine2: "PARIS",
    baseSignature: "L’ATELIER D’OR",
    cardBrand: "L’Atelier d’Or",
    cardNumber: "DEMANDE DE CONSEIL",
    cardHeader: "Votre conseil personnel",
    nameLabel: "Votre nom",
    emailLabel: "Votre e-mail",
    messageLabel: "Comment pouvons-nous vous conseiller ?",
    privacyLink: "Politique de confidentialité",
    submit: "Envoyer la demande",
    submitting: "Envoi en cours…",
    thanksTitle: "Merci.",
    thanksBody: "Nous vous répondrons sous 24 heures.",
    emailTitle: "Envoyer le message",
    emailBody1:
      "Envoyez votre message depuis votre messagerie. Si elle ne s’est pas ouverte, écrivez à",
    emailBody2: ".",
    emailBackToCard: "Retour au formulaire",
    emailStowCard: "Fermer",
    footnoteA: "CONSEIL · RÉPONSE SOUS 24 HEURES",
    footnoteB: "L’Atelier d’Or",
    errorEmpty: "Merci d’indiquer votre nom et votre message.",
    errorSetup: "Le service est en cours de configuration. Veuillez réessayer plus tard.",
    errorSend: "Votre message n’a pas été envoyé. Veuillez réessayer.",
    pocket: "",
    noscriptWrite: "Pour un conseil personnel, écrivez à",
    processEyebrow: "Déroulé",
    processTitle: "Conseil par notre équipe professionnelle.",
    processLede:
      "Chaque demande est examinée individuellement et suivie d’une réponse personnelle sous 24 heures ouvrées.",
    steps: [
      {
        t: "Vous nous écrivez",
        b: "Décrivez votre besoin : modèle, silhouette, teinte, correction, usage quotidien.",
      },
      {
        t: "Nous étudions",
        b: "Notre équipe professionnelle étudie votre demande et sélectionne le modèle adapté dans la collection.",
      },
      {
        t: "Nous répondons",
        b: "Vous recevez sous 24 heures ouvrées une recommandation écrite et les prochaines étapes.",
      },
    ],
    expectEyebrow: "Ce que vous recevez",
    expectTitle: "Contenu du conseil.",
    expectItems: [
      "Recommandation de silhouette et de modèle, adaptée à la morphologie et à l’usage.",
      "Suggestion de teinte, en regard de la carnation et du dressing.",
      "Notes de port et conseils d’usage quotidien.",
      "Prochaine étape : commande en ligne, livrée dans son écrin.",
    ],
  },
  journal: {
    metaTitle: "Journal",
    metaDescription:
      "Design, matériaux, fabrication — ce qui compose la collection Roi.",
    eyebrowNum: "",
    eyebrowLabel: "Journal",
    title1: "Journal.",
    title2: "",
    title3: "",
    lede:
      "Design, matériaux, fabrication. Les coulisses de la collection Roi.",
    readCahier: "Lire l’article",
  },
  cahier: {
    labelChapter: (numeral) => `${numeral}`,
    signatureSuffix: "L’Atelier d’Or",
    piecesEyebrowNum: "",
    piecesEyebrowLabel: "Voir la collection",
    othersEyebrowNum: "",
    othersEyebrowLabel: "Autres articles",
    cahierN: (n) => `Article ${n}`,
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
      "Votre retour sur la collection Roi.",
    eyebrowNum: "",
    eyebrowLabel: "Feedback",
    title1: "Votre",
    title2: "retour.",
    lede:
      "Vos retours nous aident à faire évoluer la collection.",
    formAria: "Formulaire de retour",
    nameLabel: "Votre nom",
    emailLabel: "Votre e-mail",
    modelLabel: "Modèle",
    modelPlaceholder: "Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude…",
    ratingLabel: "Évaluation",
    ratingOptions: ["Excellente", "Bonne", "Correcte", "À améliorer"],
    messageLabel: "Votre retour",
    consent: "J’accepte que ce retour soit cité, de manière anonyme, sur la page Avis.",
    submit: "Envoyer",
    submitting: "Envoi en cours…",
    thanksTitle: "Merci.",
    thanksBody: "Votre retour est bien reçu.",
    errorEmpty: "Merci d’indiquer votre nom et votre message.",
    errorSetup: "Le service est en cours de configuration. Réessayez plus tard.",
    errorSend: "Votre message n’a pas été envoyé. Veuillez réessayer.",
    conseilFooterBody:
      "Une question précise sur un modèle, ou un ajustement ?",
    conseilFooterCta: "Demander conseil",
    promiseEyebrow: "Ce que nous en faisons",
    promiseTitle: "Chaque retour nourrit la prochaine collection.",
    promisePoints: [
      {
        t: "Nous lisons tout",
        b: "Chaque message est lu par l’équipe produit, pas par un filtre automatique.",
      },
      {
        t: "Nous ajustons",
        b: "Les retours récurrents sur une silhouette, une teinte ou un détail sont intégrés à la prochaine collection.",
      },
      {
        t: "Nous citons avec accord",
        b: "Les retours autorisés apparaissent, de manière anonyme, sur la page Avis.",
      },
    ],
  },
  pieceSwitcher: {
    label: "Autres modèles",
    aria: (name) => `${name} — voir le modèle`,
  },
  pieces: {
    "roi-rouge": {
      tagline: "Monture bordeaux à verres légèrement teintés gris.",
      chapter: "Caractère · Rouge",
      place: "Modèle statement pour le soir",
      time: "Soir",
      silhouette: "Rectangle aux angles adoucis, arête franche.",
      materie:
        "Monture bordeaux en acétate coloré dans la masse, finition argentée sur les charnières. Verres légèrement teintés gris.",
      details: [
        "Silhouette rectangle",
        "Acétate bordeaux dans la masse",
        "Finition argentée sur les charnières",
        "Verres légèrement teintés gris",
      ],
      notes: ["Statement", "Chaud", "Visible", "Élégant"],
      scene: "",
      teintes: [{ name: "Rouge Ember" }, { name: "Rouge Profond" }],
    },
    "roi-noir": {
      tagline: "Monture noire à verres clairs, sans teinte.",
      chapter: "Élégance · Noir",
      place: "Modèle du quotidien avec caractère",
      time: "Jour",
      silhouette: "Panto haute, ligne fermée, arête douce.",
      materie:
        "Monture noire en acétate noir profond, rivets argentés et finition argentée. Verres clairs, sans teinte.",
      details: [
        "Silhouette panto haute",
        "Acétate noir profond",
        "Rivets argentés",
        "Verres clairs sans teinte",
      ],
      notes: ["Discret", "Dense", "Masculin", "Intemporel"],
      scene: "",
      teintes: [{ name: "Noir Encre" }, { name: "Noir Fumé" }],
    },
    "roi-cristal": {
      tagline: "Monture transparente à verres légèrement teintés bleu clair.",
      chapter: "Lumière · Cristal",
      place: "Modèle discret du quotidien",
      time: "Jour",
      silhouette: "Ovale allongé, arête cristalline très fine.",
      materie:
        "Monture transparente en acétate cristal, finition argentée sur les charnières. Verres légèrement teintés bleu clair.",
      details: [
        "Silhouette ovale allongée",
        "Acétate cristal translucide",
        "Finition argentée sur les charnières",
        "Verres légèrement teintés bleu clair",
      ],
      notes: ["Léger", "Discret", "Clair", "Universel"],
      scene: "",
      teintes: [{ name: "Blanc de Neige" }, { name: "Blanc Nacré" }],
    },
    "roi-emeraude": {
      tagline: "Monture vert foncé à verres teintés vert-violet.",
      chapter: "Distinction · Émeraude",
      place: "Ligne masculine pour le soir et le business",
      time: "Soir",
      silhouette: "Panto masculine, arête sculptée, branches longues.",
      materie:
        "Monture vert foncé en acétate, finition argentée sur la bordure. Verres teintés vert-violet.",
      details: [
        "Silhouette panto masculine",
        "Acétate vert foncé",
        "Finition argentée sur la bordure",
        "Verres teintés vert-violet",
      ],
      notes: ["Marqué", "Profond", "Présent", "Business"],
      scene: "",
      teintes: [{ name: "Vert Émeraude" }, { name: "Vert Forêt" }],
    },
  },
  cahiers: {
    "geste-juste": {
      rubric: "Fabrication",
      title: "Montage à la main.",
      chapo:
        "Chaque monture est montée et finie à la main dans notre atelier partenaire.",
      read: "5 min",
      date: "Septembre",
      body: [
        "Chaque monture Roi est fabriquée dans notre atelier partenaire : coupe, fraisage, cintrage, polissage, rivetage et finition.",
        "Le montage à la main permet un contrôle précis de chaque arête, de chaque charnière et de chaque surface. Ce qu’une machine ferait plus vite effacerait la ligne du dessin.",
        "Le fini est inspecté à l’œil nu sous lumière rasante. Une monture ne quitte l’atelier qu’une fois charnières, rivets et polissage parfaitement conformes.",
        "Chaque modèle reste réglable chez tout opticien : charnières et branches sont vissées de manière classique, sans collage.",
      ],
    },
    "quatre-atmospheres": {
      rubric: "Collection",
      title: "Rouge, Noir, Cristal, Émeraude.",
      chapo:
        "Rectangle, Panto, Ovale et Panto masculine : les quatre modèles de la collection Roi.",
      read: "4 min",
      date: "Septembre",
      body: [
        "Roi réunit quatre modèles en acétate premium avec finitions métalliques.",
        "Roi Rouge : silhouette rectangle, acétate rouge coloré dans la masse, charnières argentées. Modèle statement, lignes franches.",
        "Roi Noir : panto haute, acétate noir profond, rivets argentés. La monture la plus fermée de la collection.",
        "Roi Cristal : ovale allongé, acétate cristal translucide, charnières argentées. Le modèle le plus discret.",
        "Roi Émeraude : panto masculine, acétate émeraude, finition argentée. Branches longues, arête sculptée.",
      ],
    },
    "quatre-vingts-euros": {
      rubric: "Prix",
      title: "Vente directe : notre modèle de prix.",
      chapo:
        "78,90 € par modèle. Directement de l’atelier, sans intermédiaire.",
      read: "4 min",
      date: "Août",
      body: [
        "Dans la distribution classique, la plus grande partie du prix de vente est captée par les boutiques, grossistes et intermédiaires.",
        "Nous vendons exclusivement en ligne, directement depuis notre atelier. Le prix reflète uniquement le produit : acétate, métal, temps de montage.",
        "L’acétate provient de manufactures italiennes qui fournissent les grandes maisons depuis des générations. Les plaques sont sélectionnées par nos soins.",
        "Chaque monture est contrôlée à chaque étape de la fabrication. Aucun stock intermédiaire, aucune série non vérifiée.",
        "Le résultat : une monture de qualité manufacturière à un prix qui reflète la production, pas la marge des intermédiaires.",
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
    ecrireLaMaison: "Kontaktieren Sie uns",
    lAtelier: "Die Maison",
    decouvrirLAtelier: "Über uns",
    defiler: "Scrollen",
    passerIntro: "Intro überspringen",
    menu: "Menü",
    ouvrirMenu: "Menü öffnen",
    fermerMenu: "Menü schließen",
    skipToContent: "Zum Inhalt springen",
    voyezLeMonde1: "Sehen Sie die Welt aus",
    voyezLeMonde2: "Ihrer eigenen Perspektive",
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
    houseIntro: "Handgefertigte Brillen.\nEdition in kleiner Auflage.",
    contactWriteUs: "Schreiben Sie uns",
    ctaCollection: "Zur Kollektion",
  },
  footer: {
    petiteMaisonFr: "Französisches Brillenhaus",
    ligne1: "Handgefertigte Brillen.",
    ligne2: "Kollektion ausschließlich online, Lieferung weltweit.",
    columnMaison: "Haus",
    columnCollection: "Kollektion",
    columnMentions: "Rechtliches",
    labelPremiereCollection: "",
    labelMentionsLegales: "Impressum",
    labelConfidentialite: "Datenschutz",
    labelAccessibilite: "Barrierefreiheit",
    labelRetractation: "Widerrufsbelehrung",
    copyright: "© L’Atelier d’Or",
    editorialTag: "Handgefertigte Brillen",
    editorialTag2: "Edition in kleiner Auflage",
  },
  newsletter: {
    label: "Brief des Hauses",
    description:
      "Entdecken Sie neue Kollektionen, ausgewählte Modelle und Neuigkeiten von L’Atelier d’Or, direkt per E-Mail.",
    placeholder: "Ihre E-Mail-Adresse",
    submit: "Zum Newsletter anmelden",
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
      eyebrow: "Die Kollektion · Roi",
      title1: "Sehen Sie die Welt aus",
      title2: "Ihrer eigenen Perspektive",
      lede: "",
      ctaCollection: "Zur Kollektion",
      ctaConseil: "Beratung anfragen",
      ctaAtelier: "Die Maison",
      scroll: "Scrollen",
      edition: "",
    },
    showcase: {
      eyebrow: "",
      title1: "",
      title2: "Neue Kollektion.",
      lede: "",
      piece: "Modell",
      footerLine: "Roi · Die Kollektion",
      link: "Ganze Kollektion",
    },
    alternating: {
      voirLaPiece: "Zum Stück",
    },
    avisTeaser: {
      eyebrow: "Feedback",
      title1: "Tragen Sie unsere Marke?",
      title2: "Teilen Sie Ihre Erfahrung.",
      body: "Ihre Rückmeldung hilft uns, die Kollektion weiterzuentwickeln.",
      ctaShare: "Feedback geben",
      ctaSee: "Beratung anfragen",
    },
    endCall: {
      eyebrow: "Roi · Die Kollektion",
      line1: "Sehen Sie die Welt aus",
      line2: "Ihrer eigenen Perspektive",
      body: "Roi. Vier Modelle. Online erhältlich.",
      ctaCollection: "Zur Kollektion",
      ctaAtelier: "Über uns",
    },
  },
  collectionIndex: {
    metaTitle: "Die Kollektion – Roi.",
    metaDescription:
      "Roi. Vier Fassungen: Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude. Premium-Acetat, Metallscharniere, 78,90 € pro Stück.",
    breadcrumbHome: "Startseite",
    breadcrumbCollection: "Kollektion",
    eyebrowNumeral: "",
    eyebrowLabel: "Roi",
    title: ["Roi.", "Die Kollektion.", "Vier Modelle."],
    lede:
      "Premium-Acetat, Metallscharniere. Nach meinen eigenen Vorstellungen gefertigt.\n78,90 € pro Modell, inkl. Korrektur- oder Sonnengläser.",
    subtitles: "Rouge · Noir · Cristal · Émeraude",
    subtitles2: "Edition in kleiner Auflage",
    editorialTitle1: "Exklusiv online.",
    editorialTitle2: "Lieferung weltweit.",
    editorialBody:
      "Die Kollektion ist ausschließlich online erhältlich und wird im Etui weltweit versendet.",
    editorialCta: "Zur Kollektion",
  },
  piece: {
    metaDescriptionSuffix: (name, price) =>
      `${name}. Premium-Acetat, Metallscharniere. ${price}.`,
    chapterPrefix: "",
    theLieu: "Anlass",
    theHeure: "Tageszeit",
    silhouette: "Silhouette",
    section1Eyebrow: "",
    section1Label: "Material",
    section2Eyebrow: "",
    section2Label: "Charakter",
    section2Title1: "Charakter",
    section2Title2: "des Modells.",
    section2Body:
      "Vier Begleitnoten, die den Charakter des Modells beschreiben.",
    noteLabel: (n) => `${String(n).padStart(2, "0")}`,
    lireQuatreAtmospheres: "Artikel lesen",
    section3Eyebrow: "",
    section3Label: "Preis & Lieferung",
    prixParPiece: "Preis pro Modell",
    niPlusNiMoins: "Korrektur- oder Sonnengläser inklusive.",
    editionBreveBody:
      "Geliefert im eigenen Etui. Verfolgter Versand weltweit.",
    deliveryEyebrow: "Lieferung",
    deliveryTitle: "Im Etui, weltweit.",
    deliveryBody:
      "Jedes Stück wird im eigenen Etui per verfolgtem Versand weltweit ausgeliefert.",
    ctaCollection: "Zur Kollektion",
    ctaEcrire: "Kontaktieren Sie uns",
    section4Eyebrow: "",
    section4Label: "Weitere Modelle",
    othersPieces: "Weitere Modelle",
  },
  atelier: {
    metaTitle: "Das Label",
    metaDescription:
      "L’Atelier d’Or, handgefertigte Brillen mit eigenen Entwürfen. Geschichte, Designansatz, Materialien und Details der Roi-Kollektion.",
    heroEyebrowNum: "",
    heroEyebrowLabel: "Das Label",
    heroTitle1: "Ein unabhängiges Brillenlabel.",
    heroTitle2: "Mit eigenen Entwürfen.",
    heroLede:
      "L’Atelier d’Or entwirft Brillen für Menschen, die ihren persönlichen Stil sichtbar machen möchten. Die Kollektion verbindet klare Formen, ausdrucksstarke Farben und Details, die bewusst gewählt sind.",
    originEyebrow: "",
    originLabel: "Geschichte",
    originTitle: "Vier Modelle. Eine Geschichte.",
    originParas: [
      "L’Atelier d’Or entstand aus dem Wunsch, Brillen mit einer eigenen gestalterischen Handschrift zu entwerfen. Im Mittelpunkt steht die Verbindung von klaren Formen, ausdrucksstarken Farben und bewusst gewählten Details.",
      "Eine Brille begleitet ihren Träger im Alltag und prägt seinen Ausdruck. Deshalb verstehen wir sie als persönlichen Gegenstand, dessen Gestaltung zum Menschen passen soll.",
      "Aus diesem Anspruch entwickelte sich die Roi-Kollektion. Sie umfasst vier eigenständige Modelle, die sich in Form und Farbe unterscheiden und zugleich eine gemeinsame gestalterische Linie verfolgen. Jedes Modell bietet einen eigenen Zugang zu dieser Idee und lässt Raum für den individuellen Stil seines Trägers.",
    ],
    approachEyebrow: "",
    approachLabel: "Design",
    approachTitle: "Unser Designansatz.",
    approachParas: [
      "Jedes Modell beginnt mit einer eigenen Designidee. Form, Farbe und Details werden sorgfältig aufeinander abgestimmt. So erhält jede Fassung ihren eigenen Ausdruck und bleibt zugleich Teil der Roi-Kollektion.",
    ],
    principles: [
      {
        w: "Entwurf",
        t: "Eigenständige Entwürfe",
        b: "Die vier Modelle wurden mit einer klaren gestalterischen Idee entwickelt. Jedes besitzt eine eigene Form und einen unverwechselbaren Charakter.",
      },
      {
        w: "Gestaltung",
        t: "Form und Farbe",
        b: "Silhouette und Farbton prägen gemeinsam die Wirkung einer Fassung. Die Roi-Kollektion bietet unterschiedliche Ausdrucksformen, von zurückhaltend bis markant.",
      },
      {
        w: "Individualität",
        t: "Persönlicher Stil",
        b: "Eine Brille sollte zu ihrem Träger passen. Die Modelle von Roi geben Raum, den eigenen Stil bewusst und auf persönliche Weise auszudrücken.",
      },
    ],
    principleWord: "Prinzip",
    collectionEyebrow: "",
    collectionLabel: "Die Kollektion",
    collectionTitle: "Roi: vier Modelle.",
    collectionBody:
      "Rouge, Noir, Cristal und Émeraude. Vier Namen, vier Farbwelten, vier eigene Charaktere. Entdecken Sie das Modell, das zu Ihrem Stil passt.",
    materialsEyebrow: "",
    materialsLabel: "Materialien & Details",
    materialsTitle: "Materialien und Details.",
    materialsIntro:
      "Material, Gläser, Bügel und Proportionen prägen gemeinsam den Charakter einer Fassung. Bei Roi ist jedes dieser Elemente Teil des Entwurfs.",
    materialsItems: [
      {
        t: "Premium-Acetat",
        b: "Die Fassungen der Roi-Kollektion werden aus Premium-Acetat gefertigt. Das Material bringt die Farben der Modelle zur Geltung und verleiht jeder Form eine klare Kontur.",
      },
      {
        t: "Gläser mit UV-Schutz",
        b: "Die Gläser verfügen über UV-Schutz. So verbindet Roi den Charakter der Kollektion mit einem wichtigen Detail für den täglichen Gebrauch.",
      },
      {
        t: "Bügel und Scharniere",
        b: "Die Bügel sind fest mit der Fassung verbunden. Stabile Scharniere unterstützen einen sicheren Sitz und sind auf Formbeständigkeit bei sachgemäßem Gebrauch ausgelegt.",
      },
      {
        t: "Die Maße der Fassung",
        b: "Glasbreite: 52 mm\nStegbreite: 22 mm\nBügellänge: 145 mm\nGlashöhe: 41 mm\n\nDie Maße helfen Ihnen, die Proportionen der Fassung einzuschätzen. Weitere Produktdetails finden Sie auf der jeweiligen Modellseite.",
      },
    ],
    ctaEyebrow: "Kollektion",
    ctaTitle1: "Sehen Sie die Welt",
    ctaTitle2: "auf Ihre Weise.",
    ctaBody:
      "Entdecken Sie die Roi-Kollektion und finden Sie die Fassung, die Ihren persönlichen Stil zum Ausdruck bringt.",
    cta: "Zur Kollektion",
  },
  avis: {
    metaTitle: "Bewertungen",
    metaDescription:
      "Kundenbewertungen zur Kollektion Roi.",
    eyebrowNum: "",
    eyebrowLabel: "Kundenbewertungen",
    title1: "Kundenbewertungen.",
    title2: "",
    lede:
      "Echte Bewertungen von Roi-Trägerinnen und -Trägern. Veröffentlichung sobald die ersten eintreffen.",
    testimonial: (n) => `Bewertung ${n}`,
    bientot: "In Kürze",
    aParaitre: "In Kürze",
    ariaLabel: "Platzhalter für kommende Bewertungen",
    ctaBody:
      "Tragen Sie Roi? Teilen Sie Ihre Bewertung – wir veröffentlichen sie mit Ihrer Zustimmung.",
    cta: "Bewertung abgeben",
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
      "Individuelle Beratung durch unser professionelles Team. Antwort innerhalb von 24 Stunden.",
    eyebrowNum: "",
    eyebrowLabel: "Beratung",
    title1: "Persönliche",
    title2: "Beratung.",
    lede:
      "Individuelle Beratung zu Modell, Silhouette und Korrektur. Antwort innerhalb von 24 Stunden.",
    captionA: "BERATUNG",
    captionB: "01 — IHRE ANFRAGE",
    openLabel: "Beratung starten",
    openAria: "Beratungsformular öffnen",
    lidLine1: "L’Atelier d’Or",
    lidLine2: "PARIS",
    baseSignature: "L’ATELIER D’OR",
    cardBrand: "L’Atelier d’Or",
    cardNumber: "BERATUNGSANFRAGE",
    cardHeader: "Ihre persönliche Beratung",
    nameLabel: "Ihr Name",
    emailLabel: "Ihre E-Mail",
    messageLabel: "Wie können wir Sie beraten?",
    privacyLink: "Datenschutz",
    submit: "Anfrage senden",
    submitting: "Wird gesendet…",
    thanksTitle: "Danke.",
    thanksBody: "Wir antworten innerhalb von 24 Stunden.",
    emailTitle: "Nachricht senden",
    emailBody1:
      "Senden Sie Ihre Nachricht aus Ihrem E-Mail-Programm. Falls es sich nicht geöffnet hat, schreiben Sie an",
    emailBody2: ".",
    emailBackToCard: "Zurück zum Formular",
    emailStowCard: "Schließen",
    footnoteA: "BERATUNG · ANTWORT INNERHALB VON 24 STUNDEN",
    footnoteB: "L’Atelier d’Or",
    errorEmpty: "Bitte Name und Nachricht angeben.",
    errorSetup: "Der Dienst wird derzeit eingerichtet. Bitte später erneut versuchen.",
    errorSend: "Ihre Nachricht wurde nicht gesendet. Bitte erneut versuchen.",
    pocket: "",
    noscriptWrite: "Für eine persönliche Beratung schreiben Sie an",
    processEyebrow: "Ablauf",
    processTitle: "Beratung durch unser professionelles Team.",
    processLede:
      "Jede Anfrage wird individuell geprüft und innerhalb von 24 Werkstunden persönlich beantwortet.",
    steps: [
      {
        t: "Sie schreiben uns",
        b: "Beschreiben Sie Ihr Anliegen: Modell, Silhouette, Farbton, Korrektur, Alltagsnutzung.",
      },
      {
        t: "Wir prüfen",
        b: "Unser professionelles Team prüft Ihre Anfrage und wählt das passende Modell aus der Kollektion.",
      },
      {
        t: "Wir antworten",
        b: "Sie erhalten innerhalb von 24 Werkstunden eine schriftliche Empfehlung inklusive nächster Schritte.",
      },
    ],
    expectEyebrow: "Was Sie erhalten",
    expectTitle: "Inhalt der Beratung.",
    expectItems: [
      "Empfehlung zu Silhouette und Modell, abgestimmt auf Gesichtsform und Nutzung.",
      "Vorschlag zum Farbton, passend zu Hautton und Garderobe.",
      "Hinweise zu Trage-Anlass und Alltagstauglichkeit.",
      "Nächster Schritt: Online-Bestellung, geliefert im Etui.",
    ],
  },
  journal: {
    metaTitle: "Journal",
    metaDescription:
      "Design, Materialien, Fertigung – was die Kollektion Roi ausmacht.",
    eyebrowNum: "",
    eyebrowLabel: "Journal",
    title1: "Journal.",
    title2: "",
    title3: "",
    lede:
      "Design, Materialien, Fertigung. Hintergründe zur Kollektion Roi.",
    readCahier: "Artikel lesen",
  },
  cahier: {
    labelChapter: (numeral) => `${numeral}`,
    signatureSuffix: "L’Atelier d’Or",
    piecesEyebrowNum: "",
    piecesEyebrowLabel: "Kollektion ansehen",
    othersEyebrowNum: "",
    othersEyebrowLabel: "Weitere Artikel",
    cahierN: (n) => `Artikel ${n}`,
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
      "Ihre Rückmeldung zur Kollektion Roi.",
    eyebrowNum: "",
    eyebrowLabel: "Feedback",
    title1: "Ihre",
    title2: "Rückmeldung.",
    lede:
      "Ihre ehrliche Rückmeldung hilft uns, die Kollektion weiterzuentwickeln.",
    formAria: "Formular für Ihre Rückmeldung",
    nameLabel: "Ihr Name",
    emailLabel: "Ihre E-Mail",
    modelLabel: "Modell",
    modelPlaceholder: "Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude…",
    ratingLabel: "Bewertung",
    ratingOptions: ["Ausgezeichnet", "Gut", "Ausreichend", "Verbesserbar"],
    messageLabel: "Ihre Rückmeldung",
    consent: "Ich bin einverstanden, dass diese Rückmeldung anonymisiert auf der Bewertungs-Seite zitiert wird.",
    submit: "Feedback senden",
    submitting: "Wird gesendet…",
    thanksTitle: "Danke.",
    thanksBody: "Ihre Rückmeldung ist eingegangen.",
    errorEmpty: "Bitte Name und Nachricht angeben.",
    errorSetup: "Der Dienst wird derzeit eingerichtet. Bitte später erneut versuchen.",
    errorSend: "Ihre Nachricht wurde nicht gesendet. Bitte erneut versuchen.",
    conseilFooterBody:
      "Sie haben eine konkrete Frage zu einem Modell oder brauchen eine Anpassung?",
    conseilFooterCta: "Beratung anfragen",
    promiseEyebrow: "Was wir damit tun",
    promiseTitle: "Jede Rückmeldung fließt in die nächste Kollektion ein.",
    promisePoints: [
      {
        t: "Wir lesen alles",
        b: "Jede Nachricht wird vom Produkt-Team gelesen, nicht von einem automatischen Filter.",
      },
      {
        t: "Wir passen an",
        b: "Wiederkehrende Hinweise zu Silhouette, Farbton oder Detail werden in die nächste Kollektion übernommen.",
      },
      {
        t: "Wir zitieren mit Zustimmung",
        b: "Freigegebene Rückmeldungen erscheinen anonymisiert auf der Bewertungs-Seite.",
      },
    ],
  },
  pieceSwitcher: {
    label: "Weitere Modelle",
    aria: (name) => `${name} – Modell ansehen`,
  },
  pieces: {
    "roi-rouge": {
      tagline: "Bordeauxroter Rahmen mit leicht grau getönten Gläsern.",
      chapter: "Caractère · Rouge",
      place: "Statement-Modell für den Abend",
      time: "Abend",
      silhouette: "Rechteck mit weichen Ecken, klarer Kante.",
      materie:
        "Bordeauxroter Rahmen aus in der Masse gefärbtem Acetat, silberne Ausführung an den Scharnieren. Leicht grau getönte Gläser.",
      details: [
        "Rechteck-Silhouette",
        "Bordeauxrotes Acetat in der Masse gefärbt",
        "Silberne Ausführung an den Scharnieren",
        "Leicht grau getönte Gläser",
      ],
      notes: ["Statement", "Warm", "Sichtbar", "Elegant"],
      scene: "",
      teintes: [{ name: "Rouge Ember" }, { name: "Rouge Profond" }],
    },
    "roi-noir": {
      tagline: "Schwarzer Rahmen mit klaren, ungetönten Gläsern.",
      chapter: "Élégance · Noir",
      place: "Alltagsmodell mit Charakter",
      time: "Tag",
      silhouette: "Hohe Panto-Form, geschlossene Linie, weiche Kante.",
      materie:
        "Schwarzer Rahmen aus tiefschwarzem Acetat, silberne Nieten und silberne Ausführung. Klare, ungetönte Gläser.",
      details: [
        "Hohe Panto-Silhouette",
        "Tiefschwarzes Acetat",
        "Silberne Nieten",
        "Klare, ungetönte Gläser",
      ],
      notes: ["Zurückhaltend", "Dicht", "Männlich geprägt", "Zeitlos"],
      scene: "",
      teintes: [{ name: "Noir Encre" }, { name: "Noir Fumé" }],
    },
    "roi-cristal": {
      tagline: "Transparenter Rahmen mit zart hellblau getönten Gläsern.",
      chapter: "Lumière · Cristal",
      place: "Diskretes Alltagsmodell",
      time: "Tag",
      silhouette: "Gestrecktes Oval, sehr feine kristalline Kante.",
      materie:
        "Transparenter Rahmen aus Kristall-Acetat, silberne Ausführung an den Scharnieren. Zart hellblau getönte Gläser.",
      details: [
        "Gestreckte Oval-Silhouette",
        "Transluzentes Kristall-Acetat",
        "Silberne Ausführung an den Scharnieren",
        "Zart hellblau getönte Gläser",
      ],
      notes: ["Leicht", "Diskret", "Klar", "Universal"],
      scene: "",
      teintes: [{ name: "Blanc de Neige" }, { name: "Blanc Nacré" }],
    },
    "roi-emeraude": {
      tagline: "Dunkelgrüner Rahmen mit grün-violett getönten Gläsern.",
      chapter: "Distinction · Émeraude",
      place: "Maskuline Linie für Abend und Business",
      time: "Abend",
      silhouette: "Maskuline Panto-Form, gemeißelte Kante, lange Bügel.",
      materie:
        "Dunkelgrüner Rahmen aus Acetat, silberne Ausführung am Rand. Grün-violett getönte Gläser.",
      details: [
        "Maskuline Panto-Silhouette",
        "Dunkelgrünes Acetat",
        "Silberne Ausführung am Rand",
        "Grün-violett getönte Gläser",
      ],
      notes: ["Markant", "Tief", "Präsent", "Business"],
      scene: "",
      teintes: [{ name: "Vert Émeraude" }, { name: "Vert Forêt" }],
    },
  },
  cahiers: {
    "geste-juste": {
      rubric: "Fertigung",
      title: "Handmontage.",
      chapo:
        "Jede Fassung wird in unserem Partneratelier von Hand montiert und finisiert.",
      read: "5 Min",
      date: "September",
      body: [
        "Jede Roi-Fassung durchläuft die gesamte Fertigung in unserem Partneratelier. Zuschnitt, Fräsen, Biegen, Polieren, Nieten und Finish erfolgen vor Ort.",
        "Die Handmontage erlaubt die präzise Kontrolle jeder Kante, jedes Scharniers und jeder Oberfläche. Was eine Maschine schneller erledigen kann, würde die Linie des Entwurfs verwischen.",
        "Der Finish wird mit bloßem Auge unter streifendem Licht geprüft. Eine Fassung verlässt die Werkstatt erst, wenn Scharniere, Nieten und Polish einwandfrei sind.",
        "Jedes Modell ist bei jedem Optiker regulierbar – Scharniere und Bügel sind klassisch verschraubt, nicht verklebt.",
      ],
    },
    "quatre-atmospheres": {
      rubric: "Kollektion",
      title: "Rouge, Noir, Cristal, Émeraude.",
      chapo:
        "Rechteck, Panto, Oval und Panto maskulin: die vier Modelle der Kollektion Roi.",
      read: "4 Min",
      date: "September",
      body: [
        "Roi besteht aus vier Modellen in Premium-Acetat mit metallischem Finish.",
        "Roi Rouge: Rechteck-Silhouette, rotes Acetat, silberne Scharniere. Statement-Modell für klare Linien.",
        "Roi Noir: hohe Panto-Form, tiefschwarzes Acetat, silberne Nieten. Die geschlossenste Fassung der Kollektion.",
        "Roi Cristal: gestrecktes Oval, transluzentes Kristall-Acetat, silberne Scharniere. Das diskreteste Modell.",
        "Roi Émeraude: maskuline Panto-Form, smaragdgrünes Acetat, silberne Ausführung. Lange Bügel, gemeißelte Kante.",
      ],
    },
    "quatre-vingts-euros": {
      rubric: "Preis",
      title: "Direktverkauf: unser Preismodell.",
      chapo:
        "78,90 € pro Modell. Direkt aus dem Atelier, ohne Zwischenhandel.",
      read: "4 Min",
      date: "August",
      body: [
        "Bei konventionellem Vertrieb wird der größte Teil des Verkaufspreises von Boutiquen, Großhandel und Distribution einbehalten.",
        "Wir verkaufen ausschließlich online, direkt aus unserem Atelier. Der Preis spiegelt ausschließlich das Produkt wider: Acetat, Metall, Montagezeit.",
        "Das Acetat beziehen wir von italienischen Manufakturen, die seit Generationen die großen Häuser der Branche beliefern. Die Platten wählen wir selbst aus.",
        "Jede Fassung wird in jedem Fertigungsschritt kontrolliert. Keine Zwischenlagerung, keine Charge wird ungeprüft ausgeliefert.",
        "Das Ergebnis: eine Fassung in Manufakturqualität zu einem Preis, der die Produktion abbildet – nicht die Marge der Zwischenhändler.",
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
    ecrireLaMaison: "Contact us",
    lAtelier: "The Maison",
    decouvrirLAtelier: "About",
    defiler: "Scroll",
    passerIntro: "Skip intro",
    menu: "Menu",
    ouvrirMenu: "Open menu",
    fermerMenu: "Close menu",
    skipToContent: "Skip to content",
    voyezLeMonde1: "See the world from",
    voyezLeMonde2: "your own perspective",
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
    houseIntro: "Handcrafted eyewear.\nShort edition.",
    contactWriteUs: "Write to us",
    ctaCollection: "View collection",
  },
  footer: {
    petiteMaisonFr: "French eyewear house",
    ligne1: "Handcrafted eyewear.",
    ligne2: "Collection available exclusively online, shipped worldwide.",
    columnMaison: "House",
    columnCollection: "Collection",
    columnMentions: "Legal",
    labelPremiereCollection: "",
    labelMentionsLegales: "Legal notice",
    labelConfidentialite: "Privacy",
    labelAccessibilite: "Accessibility",
    labelRetractation: "Right of withdrawal",
    copyright: "© L’Atelier d’Or",
    editorialTag: "Handcrafted eyewear",
    editorialTag2: "Short edition",
  },
  newsletter: {
    label: "House letter",
    description:
      "Discover new collections, selected pieces and news from L’Atelier d’Or, directly by email.",
    placeholder: "Your email address",
    submit: "Subscribe to the newsletter",
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
      eyebrow: "The collection · Roi",
      title1: "See the world from",
      title2: "your own perspective",
      lede: "",
      ctaCollection: "View collection",
      ctaConseil: "Ask for advice",
      ctaAtelier: "The house",
      scroll: "Scroll",
      edition: "",
    },
    showcase: {
      eyebrow: "",
      title1: "",
      title2: "New collection.",
      lede: "",
      piece: "Model",
      footerLine: "Roi · The collection",
      link: "Full collection",
    },
    alternating: { voirLaPiece: "View model" },
    avisTeaser: {
      eyebrow: "Feedback",
      title1: "Wearing our house?",
      title2: "Share your experience.",
      body: "Your feedback helps us evolve the collection.",
      ctaShare: "Leave feedback",
      ctaSee: "Ask for advice",
    },
    endCall: {
      eyebrow: "Roi · The collection",
      line1: "See the world from",
      line2: "your own perspective",
      body: "Roi. Four models. Available online.",
      ctaCollection: "View collection",
      ctaAtelier: "About",
    },
  },
  collectionIndex: {
    metaTitle: "The Collection — Roi.",
    metaDescription:
      "Roi. Four pieces: Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude. Premium acetate, metal hinges, €78.90 each.",
    breadcrumbHome: "Home",
    breadcrumbCollection: "Collection",
    eyebrowNumeral: "",
    eyebrowLabel: "Roi",
    title: ["Roi.", "The collection.", "Four models."],
    lede:
      "Premium acetate, metal hinges. Made to my own vision.\n€78.90 per model, prescription or sun lenses included.",
    subtitles: "Rouge · Noir · Cristal · Émeraude",
    subtitles2: "Short edition",
    editorialTitle1: "Exclusively online.",
    editorialTitle2: "Shipped worldwide.",
    editorialBody:
      "The collection is available exclusively online and ships in its dedicated case worldwide.",
    editorialCta: "View collection",
  },
  piece: {
    metaDescriptionSuffix: (name, price) =>
      `${name}. Premium acetate, metal hinges. ${price}.`,
    chapterPrefix: "",
    theLieu: "Use",
    theHeure: "Occasion",
    silhouette: "Silhouette",
    section1Eyebrow: "",
    section1Label: "Material",
    section2Eyebrow: "",
    section2Label: "Character",
    section2Title1: "Character",
    section2Title2: "of the model.",
    section2Body:
      "Four keywords that describe the character of the model.",
    noteLabel: (n) => `${String(n).padStart(2, "0")}`,
    lireQuatreAtmospheres: "Read the article",
    section3Eyebrow: "",
    section3Label: "Price & delivery",
    prixParPiece: "Price per model",
    niPlusNiMoins: "Prescription or sun lenses included.",
    editionBreveBody:
      "Delivered in its dedicated case. Tracked shipping worldwide.",
    deliveryEyebrow: "Delivery",
    deliveryTitle: "In its case, worldwide.",
    deliveryBody:
      "Every piece ships in its dedicated case by tracked delivery worldwide.",
    ctaCollection: "View collection",
    ctaEcrire: "Contact us",
    section4Eyebrow: "",
    section4Label: "Other models",
    othersPieces: "Other models",
  },
  atelier: {
    metaTitle: "The house",
    metaDescription:
      "L’Atelier d’Or, handcrafted eyewear with its own designs. Design approach, materials and details of the Roi collection.",
    heroEyebrowNum: "",
    heroEyebrowLabel: "The house",
    heroTitle1: "An independent",
    heroTitle2: "eyewear house.",
    heroLede:
      "L’Atelier d’Or designs eyewear for people who want to make their personal style visible. The collection brings together clean shapes, expressive colours and details chosen with care.",
    originEyebrow: "",
    originLabel: "History",
    originTitle: "Four models. One story.",
    originParas: [
      "L’Atelier d’Or grew out of a wish to design eyewear with a formal handwriting of its own. At the heart of the project: the pairing of clean shapes, expressive colours and deliberately chosen details.",
      "A pair of glasses accompanies its wearer every day and shapes their expression. For that reason we see it as a personal object whose design should suit the person wearing it.",
      "The Roi collection grew out of this intention. It brings together four distinct models that differ in shape and colour while sharing the same formal line. Each model offers its own way into this idea and leaves room for the personal style of its wearer.",
    ],
    approachEyebrow: "",
    approachLabel: "Design",
    approachTitle: "Our design approach.",
    approachParas: [
      "Every model starts with a design idea of its own. Shape, colour and details are considered together, with care. Each frame receives its own expression and remains, at the same time, part of the Roi collection.",
    ],
    principles: [
      {
        w: "Design",
        t: "A design of its own",
        b: "The four models were developed from a clear formal idea. Each has its own shape and an unmistakable character.",
      },
      {
        w: "Composition",
        t: "Shape and colour",
        b: "Silhouette and tone shape the effect of a frame together. The Roi collection offers different ways of expression, from restrained to pronounced.",
      },
      {
        w: "Expression",
        t: "Personal style",
        b: "A pair of glasses should suit the person wearing them. The Roi models leave room to express your own style, consciously and personally.",
      },
    ],
    principleWord: "Principle",
    collectionEyebrow: "",
    collectionLabel: "The collection",
    collectionTitle: "Roi: four models.",
    collectionBody:
      "Rouge, Noir, Cristal and Émeraude. Four names, four colour worlds, four characters of their own. Discover the model that suits your style.",
    materialsEyebrow: "",
    materialsLabel: "Materials & details",
    materialsTitle: "Materials and details.",
    materialsIntro:
      "Material, lenses, temples and proportions shape the character of a frame together. In Roi, each of these elements is part of the design.",
    materialsItems: [
      {
        t: "Premium acetate",
        b: "The frames of the Roi collection are made from premium acetate. The material brings out the colours of the models and gives every shape a clear contour.",
      },
      {
        t: "Lenses with UV protection",
        b: "The lenses include UV protection. Roi combines the character of the collection with a detail that matters in daily wear.",
      },
      {
        t: "Temples and hinges",
        b: "The temples are firmly connected to the frame. Stable hinges support a secure fit and are built for shape retention under proper use.",
      },
      {
        t: "The measurements of the frame",
        b: "Lens width: 52 mm\nBridge width: 22 mm\nTemple length: 145 mm\nLens height: 41 mm\n\nThese measurements help you judge the proportions of the frame. Further product details can be found on the respective model page.",
      },
    ],
    ctaEyebrow: "Collection",
    ctaTitle1: "See the world",
    ctaTitle2: "in your own way.",
    ctaBody:
      "Discover the Roi collection and find the frame that expresses your personal style.",
    cta: "View collection",
  },
  avis: {
    metaTitle: "Customer reviews",
    metaDescription:
      "Customer reviews of the Roi collection.",
    eyebrowNum: "",
    eyebrowLabel: "Customer reviews",
    title1: "Customer reviews.",
    title2: "",
    lede:
      "Authentic reviews from Roi wearers. Published as soon as the first ones come in.",
    testimonial: (n) => `Review ${n}`,
    bientot: "Coming soon",
    aParaitre: "Coming soon",
    ariaLabel: "Placeholders for upcoming reviews",
    ctaBody:
      "Wearing Roi? Share your review — we publish it with your consent.",
    cta: "Leave a review",
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
    metaTitle: "Personal advice",
    metaDescription:
      "Personal advice from our professional team. Reply within 24 hours.",
    eyebrowNum: "",
    eyebrowLabel: "Advice",
    title1: "Personal",
    title2: "advice.",
    lede:
      "Personal advice on model, silhouette and prescription. Reply within 24 hours.",
    captionA: "ADVICE",
    captionB: "01 — YOUR REQUEST",
    openLabel: "Start request",
    openAria: "Open advice form",
    lidLine1: "L’Atelier d’Or",
    lidLine2: "PARIS",
    baseSignature: "L’ATELIER D’OR",
    cardBrand: "L’Atelier d’Or",
    cardNumber: "ADVICE REQUEST",
    cardHeader: "Your personal advice",
    nameLabel: "Your name",
    emailLabel: "Your email",
    messageLabel: "How can we advise you?",
    privacyLink: "Privacy policy",
    submit: "Send request",
    submitting: "Sending…",
    thanksTitle: "Thank you.",
    thanksBody: "We’ll reply within 24 hours.",
    emailTitle: "Send message",
    emailBody1:
      "Send your message from your mail client. If it didn’t open, write to",
    emailBody2: ".",
    emailBackToCard: "Back to form",
    emailStowCard: "Close",
    footnoteA: "ADVICE · REPLY WITHIN 24 HOURS",
    footnoteB: "L’Atelier d’Or",
    errorEmpty: "Please provide your name and message.",
    errorSetup: "The service is being set up. Please try later.",
    errorSend: "Your message was not sent. Please try again.",
    pocket: "",
    noscriptWrite: "For personal advice, write to",
    processEyebrow: "Process",
    processTitle: "Advice from our professional team.",
    processLede:
      "Each request is reviewed individually and answered personally within 24 working hours.",
    steps: [
      { t: "You write to us", b: "Describe your need: model, silhouette, tone, prescription, daily use." },
      { t: "We review", b: "Our professional team reviews your request and selects the right model from the collection." },
      { t: "We reply", b: "You receive a written recommendation and next steps within 24 working hours." },
    ],
    expectEyebrow: "What you receive",
    expectTitle: "Advice contents.",
    expectItems: [
      "Silhouette and model recommendation, matched to your face shape and use.",
      "Tone suggestion, matched to complexion and wardrobe.",
      "Wear notes for everyday use, evening and work.",
      "Next step: online order, delivered in its case.",
    ],
  },
  journal: {
    metaTitle: "Journal",
    metaDescription:
      "Design, materials, manufacturing — behind the Roi collection.",
    eyebrowNum: "",
    eyebrowLabel: "Journal",
    title1: "Journal.",
    title2: "",
    title3: "",
    lede: "Design, materials, manufacturing. Background on the Roi collection.",
    readCahier: "Read article",
  },
  cahier: {
    labelChapter: (numeral) => `${numeral}`,
    signatureSuffix: "L’Atelier d’Or",
    piecesEyebrowNum: "",
    piecesEyebrowLabel: "View collection",
    othersEyebrowNum: "",
    othersEyebrowLabel: "More articles",
    cahierN: (n) => `Article ${n}`,
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
      "Your feedback on the Roi collection.",
    eyebrowNum: "",
    eyebrowLabel: "Feedback",
    title1: "Your",
    title2: "feedback.",
    lede:
      "Your honest feedback helps us evolve the collection.",
    formAria: "Feedback form",
    nameLabel: "Your name",
    emailLabel: "Your email",
    modelLabel: "Model",
    modelPlaceholder: "Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude…",
    ratingLabel: "Rating",
    ratingOptions: ["Excellent", "Good", "Fair", "Needs improvement"],
    messageLabel: "Your feedback",
    consent: "I agree that this feedback may be quoted anonymously on the Reviews page.",
    submit: "Send",
    submitting: "Sending…",
    thanksTitle: "Thank you.",
    thanksBody: "Your feedback has been received.",
    errorEmpty: "Please provide your name and message.",
    errorSetup: "The service is being set up. Please try later.",
    errorSend: "Your message was not sent. Please try again.",
    conseilFooterBody: "A specific question about a model or an adjustment?",
    conseilFooterCta: "Ask for advice",
    promiseEyebrow: "What we do with it",
    promiseTitle: "Every piece of feedback shapes the next collection.",
    promisePoints: [
      { t: "We read everything", b: "Every message is read by the product team, not an automated filter." },
      { t: "We adjust", b: "Recurring notes on silhouette, tone or detail are integrated into the next collection." },
      { t: "We quote with consent", b: "Approved feedback appears anonymously on the Reviews page." },
    ],
  },
  pieceSwitcher: {
    label: "Other models",
    aria: (name) => `${name} — view model`,
  },
  pieces: {
    "roi-rouge": {
      tagline: "Burgundy frame with lightly grey-tinted lenses.",
      chapter: "Caractère · Rouge",
      place: "Statement model for evening wear",
      time: "Evening",
      silhouette: "Rectangle with softened corners, clean edge.",
      materie:
        "Burgundy frame in mass-dyed acetate, silver finish on the hinges. Lightly grey-tinted lenses.",
      details: [
        "Rectangle silhouette",
        "Burgundy acetate dyed through the mass",
        "Silver finish on the hinges",
        "Lightly grey-tinted lenses",
      ],
      notes: ["Statement", "Warm", "Visible", "Elegant"],
      scene: "",
      teintes: [{ name: "Rouge Ember" }, { name: "Rouge Profond" }],
    },
    "roi-noir": {
      tagline: "Black frame with clear, untinted lenses.",
      chapter: "Élégance · Noir",
      place: "Everyday model with character",
      time: "Day",
      silhouette: "High panto, closed line, soft edge.",
      materie:
        "Black frame in deep black acetate, silver rivets and silver finish. Clear, untinted lenses.",
      details: [
        "High panto silhouette",
        "Deep black acetate",
        "Silver rivets",
        "Clear untinted lenses",
      ],
      notes: ["Understated", "Dense", "Masculine", "Timeless"],
      scene: "",
      teintes: [{ name: "Noir Encre" }, { name: "Noir Fumé" }],
    },
    "roi-cristal": {
      tagline: "Transparent frame with gently light-blue-tinted lenses.",
      chapter: "Lumière · Cristal",
      place: "Discreet everyday model",
      time: "Day",
      silhouette: "Elongated oval, very fine crystalline edge.",
      materie:
        "Transparent frame in crystal acetate, silver finish on the hinges. Gently light-blue-tinted lenses.",
      details: [
        "Elongated oval silhouette",
        "Translucent crystal acetate",
        "Silver finish on the hinges",
        "Gently light-blue-tinted lenses",
      ],
      notes: ["Light", "Discreet", "Clear", "Universal"],
      scene: "",
      teintes: [{ name: "Blanc de Neige" }, { name: "Blanc Nacré" }],
    },
    "roi-emeraude": {
      tagline: "Dark green frame with green-violet-tinted lenses.",
      chapter: "Distinction · Émeraude",
      place: "Masculine line for evening and business",
      time: "Evening",
      silhouette: "Masculine panto, sculpted edge, long temples.",
      materie:
        "Dark green frame in acetate, silver finish on the rim. Green-violet-tinted lenses.",
      details: [
        "Masculine panto silhouette",
        "Dark green acetate",
        "Silver finish on the rim",
        "Green-violet-tinted lenses",
      ],
      notes: ["Striking", "Deep", "Present", "Business"],
      scene: "",
      teintes: [{ name: "Vert Émeraude" }, { name: "Vert Forêt" }],
    },
  },
  cahiers: {
    "geste-juste": {
      rubric: "Manufacturing",
      title: "Hand assembled.",
      chapo:
        "Every frame is assembled and finished by hand in our partner workshop.",
      read: "5 min",
      date: "September",
      body: [
        "Every Roi frame goes through the entire manufacturing process in our partner workshop. Cutting, milling, bending, polishing, riveting and finishing are all carried out on site.",
        "Hand assembly allows precise control over every edge, every hinge and every surface. What a machine could do faster would blur the line of the design.",
        "The finish is inspected by eye under raking light. A frame does not leave the workshop until hinges, rivets and polishing are flawless.",
        "Every model remains adjustable at any optician: hinges and temples are classically screwed, not glued.",
      ],
    },
    "quatre-atmospheres": {
      rubric: "Collection",
      title: "Rouge, Noir, Cristal, Émeraude.",
      chapo:
        "Rectangle, Panto, Oval and masculine Panto: the four models of the Roi collection.",
      read: "4 min",
      date: "September",
      body: [
        "Roi consists of four models in premium acetate with metal finishes.",
        "Roi Rouge: rectangle silhouette, red mass-dyed acetate, silver hinges. Statement model with clean lines.",
        "Roi Noir: high panto, deep black acetate, silver rivets. The most closed frame in the collection.",
        "Roi Cristal: elongated oval, translucent crystal acetate, silver hinges. The most discreet model.",
        "Roi Émeraude: masculine panto, emerald acetate, silver finish. Long temples, sculpted edge.",
      ],
    },
    "quatre-vingts-euros": {
      rubric: "Price",
      title: "Direct sales: our pricing model.",
      chapo:
        "€78.90 per model. Straight from the workshop, no middlemen.",
      read: "4 min",
      date: "August",
      body: [
        "In conventional distribution, most of the retail price is captured by boutiques, wholesalers and intermediaries.",
        "We sell exclusively online, straight from our workshop. The price reflects only the product: acetate, metal, assembly time.",
        "Acetate comes from Italian manufactures that have supplied the great eyewear houses for generations. We select the plates ourselves.",
        "Every frame is inspected at each manufacturing step. No intermediate stock, no unchecked batch is ever shipped.",
        "The result: a frame of manufacture-grade quality at a price that reflects production, not the margin of middlemen.",
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
    ecrireLaMaison: "Contattaci",
    lAtelier: "La Maison",
    decouvrirLAtelier: "Chi siamo",
    defiler: "Scorri",
    passerIntro: "Salta l’intro",
    menu: "Menu",
    ouvrirMenu: "Apri il menu",
    fermerMenu: "Chiudi il menu",
    skipToContent: "Vai al contenuto",
    voyezLeMonde1: "Guardate il mondo dalla",
    voyezLeMonde2: "vostra prospettiva",
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
    houseIntro: "Occhiali fatti a mano.\nEdizione in piccola tiratura.",
    contactWriteUs: "Scriveteci",
    ctaCollection: "Vedi la collezione",
  },
  footer: {
    petiteMaisonFr: "Maison francese di occhialeria",
    ligne1: "Occhiali fatti a mano.",
    ligne2: "Collezione esclusivamente online, spedita in tutto il mondo.",
    columnMaison: "Maison",
    columnCollection: "Collezione",
    columnMentions: "Legale",
    labelPremiereCollection: "",
    labelMentionsLegales: "Note legali",
    labelConfidentialite: "Privacy",
    labelAccessibilite: "Accessibilità",
    labelRetractation: "Diritto di recesso",
    copyright: "© L’Atelier d’Or",
    editorialTag: "Occhiali fatti a mano",
    editorialTag2: "Edizione in piccola tiratura",
  },
  newsletter: {
    label: "Lettera della maison",
    description:
      "Scoprite nuove collezioni, modelli selezionati e novità di L’Atelier d’Or, direttamente via e-mail.",
    placeholder: "Il vostro indirizzo e-mail",
    submit: "Iscriviti alla newsletter",
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
      eyebrow: "La collezione · Roi",
      title1: "Guardate il mondo dalla",
      title2: "vostra prospettiva",
      lede: "",
      ctaCollection: "Vedi la collezione",
      ctaConseil: "Chiedere consiglio",
      ctaAtelier: "La maison",
      scroll: "Scorri",
      edition: "",
    },
    showcase: {
      eyebrow: "",
      title1: "",
      title2: "Nuova collezione.",
      lede: "",
      piece: "Modello",
      footerLine: "Roi · La collezione",
      link: "Tutta la collezione",
    },
    alternating: { voirLaPiece: "Vedi il modello" },
    avisTeaser: {
      eyebrow: "Feedback",
      title1: "Portate la nostra maison?",
      title2: "Condividete la vostra esperienza.",
      body: "I vostri feedback ci aiutano a far evolvere la collezione.",
      ctaShare: "Lascia feedback",
      ctaSee: "Chiedere consiglio",
    },
    endCall: {
      eyebrow: "Roi · La collezione",
      line1: "Guardate il mondo dalla",
      line2: "vostra prospettiva",
      body: "Roi. Quattro modelli. Disponibile online.",
      ctaCollection: "Vedi la collezione",
      ctaAtelier: "Chi siamo",
    },
  },
  collectionIndex: {
    metaTitle: "La Collezione — Roi.",
    metaDescription:
      "Roi. Quattro pezzi: Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude. Acetato premium, cerniere metalliche, 78,90 € a pezzo.",
    breadcrumbHome: "Home",
    breadcrumbCollection: "Collezione",
    eyebrowNumeral: "",
    eyebrowLabel: "Roi",
    title: ["Roi.", "La collezione.", "Quattro modelli."],
    lede:
      "Acetato premium, cerniere metalliche. Realizzato secondo le mie idee.\n78,90 € a modello, lenti correttive o da sole incluse.",
    subtitles: "Rouge · Noir · Cristal · Émeraude",
    subtitles2: "Edizione in piccola tiratura",
    editorialTitle1: "Esclusivamente online.",
    editorialTitle2: "Spedita in tutto il mondo.",
    editorialBody:
      "La collezione è disponibile esclusivamente online e viene spedita nel suo astuccio in tutto il mondo.",
    editorialCta: "Vedi la collezione",
  },
  piece: {
    metaDescriptionSuffix: (name, price) =>
      `${name}. Acetato premium, cerniere metalliche. ${price}.`,
    chapterPrefix: "",
    theLieu: "Uso",
    theHeure: "Momento",
    silhouette: "Silhouette",
    section1Eyebrow: "",
    section1Label: "Materiale",
    section2Eyebrow: "",
    section2Label: "Carattere",
    section2Title1: "Carattere",
    section2Title2: "del modello.",
    section2Body:
      "Quattro parole chiave che descrivono il carattere del modello.",
    noteLabel: (n) => `${String(n).padStart(2, "0")}`,
    lireQuatreAtmospheres: "Leggi l’articolo",
    section3Eyebrow: "",
    section3Label: "Prezzo & consegna",
    prixParPiece: "Prezzo a modello",
    niPlusNiMoins: "Lenti correttive o da sole incluse.",
    editionBreveBody:
      "Consegnato nel suo astuccio dedicato. Trasporto tracciato in tutto il mondo.",
    deliveryEyebrow: "Consegna",
    deliveryTitle: "Nel suo astuccio, in tutto il mondo.",
    deliveryBody:
      "Ogni pezzo viene spedito nel suo astuccio dedicato con corriere tracciato in tutto il mondo.",
    ctaCollection: "Vedi la collezione",
    ctaEcrire: "Contattaci",
    section4Eyebrow: "",
    section4Label: "Altri modelli",
    othersPieces: "Altri modelli",
  },
  atelier: {
    metaTitle: "La maison",
    metaDescription:
      "L’Atelier d’Or, occhiali fatti a mano con disegni propri. Approccio al design, materiali e dettagli della collezione Roi.",
    heroEyebrowNum: "",
    heroEyebrowLabel: "La maison",
    heroTitle1: "Una maison indipendente",
    heroTitle2: "di occhialeria.",
    heroLede:
      "L’Atelier d’Or disegna occhiali per chi vuole rendere visibile il proprio stile personale. La collezione unisce forme chiare, colori espressivi e dettagli scelti con cura.",
    originEyebrow: "",
    originLabel: "Storia",
    originTitle: "Quattro modelli. Una storia.",
    originParas: [
      "L’Atelier d’Or è nata dal desiderio di disegnare occhiali con una scrittura formale propria. Al centro del progetto : l’unione di forme chiare, colori espressivi e dettagli scelti con cura.",
      "Un paio di occhiali accompagna chi li indossa nella quotidianità e ne modella l’espressione. Per questo motivo li consideriamo un oggetto personale la cui concezione deve accordarsi a chi li porta.",
      "Da questa esigenza è nata la collezione Roi. Riunisce quattro modelli autonomi che si distinguono per forma e colore e condividono al tempo stesso una stessa linea formale. Ogni modello offre un proprio accesso a questa idea e lascia spazio allo stile personale di chi li indossa.",
    ],
    approachEyebrow: "",
    approachLabel: "Design",
    approachTitle: "Il nostro approccio al design.",
    approachParas: [
      "Ogni modello nasce da un’idea di disegno propria. Forma, colore e dettagli vengono pensati insieme, con cura. Ogni montatura riceve così la sua espressione e resta, allo stesso tempo, parte della collezione Roi.",
    ],
    principles: [
      {
        w: "Disegno",
        t: "Un disegno proprio",
        b: "I quattro modelli sono stati sviluppati a partire da un’idea formale chiara. Ciascuno ha la propria forma e un carattere inconfondibile.",
      },
      {
        w: "Composizione",
        t: "Forma e colore",
        b: "Silhouette e tonalità modellano insieme l’effetto di una montatura. La collezione Roi offre diversi modi di esprimersi, dal pacato al deciso.",
      },
      {
        w: "Espressione",
        t: "Stile personale",
        b: "Un paio di occhiali dovrebbe accordarsi a chi li porta. I modelli Roi lasciano lo spazio per esprimere il proprio stile, in modo consapevole e personale.",
      },
    ],
    principleWord: "Principio",
    collectionEyebrow: "",
    collectionLabel: "La collezione",
    collectionTitle: "Roi : quattro modelli.",
    collectionBody:
      "Rouge, Noir, Cristal e Émeraude. Quattro nomi, quattro mondi di colore, quattro caratteri. Scoprite il modello che corrisponde al vostro stile.",
    materialsEyebrow: "",
    materialsLabel: "Materiali & dettagli",
    materialsTitle: "Materiali e dettagli.",
    materialsIntro:
      "Materiale, lenti, aste e proporzioni modellano insieme il carattere di una montatura. In Roi, ciascuno di questi elementi fa parte del disegno.",
    materialsItems: [
      {
        t: "Acetato premium",
        b: "Le montature della collezione Roi sono realizzate in acetato premium. Il materiale esalta i colori dei modelli e conferisce a ogni forma un contorno netto.",
      },
      {
        t: "Lenti con protezione UV",
        b: "Le lenti dispongono di protezione UV. Roi unisce così il carattere della collezione a un dettaglio essenziale per l’uso quotidiano.",
      },
      {
        t: "Aste e cerniere",
        b: "Le aste sono saldamente collegate alla montatura. Cerniere stabili sostengono una tenuta sicura e sono progettate per la stabilità della forma in un uso corretto.",
      },
      {
        t: "Le misure della montatura",
        b: "Larghezza della lente : 52 mm\nLarghezza del ponte : 22 mm\nLunghezza dell’asta : 145 mm\nAltezza della lente : 41 mm\n\nQueste misure vi aiutano a valutare le proporzioni della montatura. Ulteriori dettagli di prodotto si trovano sulla pagina del rispettivo modello.",
      },
    ],
    ctaEyebrow: "Collezione",
    ctaTitle1: "Guardate il mondo",
    ctaTitle2: "a modo vostro.",
    ctaBody:
      "Scoprite la collezione Roi e trovate la montatura che esprime il vostro stile personale.",
    cta: "Vedi la collezione",
  },
  avis: {
    metaTitle: "Recensioni",
    metaDescription:
      "Recensioni clienti sulla collezione Roi.",
    eyebrowNum: "",
    eyebrowLabel: "Recensioni clienti",
    title1: "Recensioni clienti.",
    title2: "",
    lede:
      "Recensioni autentiche di chi porta Roi. Pubblicazione non appena arriveranno le prime.",
    testimonial: (n) => `Recensione ${n}`,
    bientot: "In arrivo",
    aParaitre: "In arrivo",
    ariaLabel: "Spazi per le future recensioni",
    ctaBody:
      "Portate Roi? Condividete la vostra recensione — la pubblichiamo con il vostro consenso.",
    cta: "Lascia una recensione",
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
    metaTitle: "Consulenza personale",
    metaDescription:
      "Consulenza personale dal nostro team professionale. Risposta entro 24 ore.",
    eyebrowNum: "",
    eyebrowLabel: "Consulenza",
    title1: "Consulenza",
    title2: "personale.",
    lede:
      "Consulenza personale su modello, silhouette e correzione. Risposta entro 24 ore.",
    captionA: "CONSULENZA",
    captionB: "01 — LA VOSTRA RICHIESTA",
    openLabel: "Iniziare la richiesta",
    openAria: "Aprire il modulo di consulenza",
    lidLine1: "L’Atelier d’Or",
    lidLine2: "PARIS",
    baseSignature: "L’ATELIER D’OR",
    cardBrand: "L’Atelier d’Or",
    cardNumber: "RICHIESTA DI CONSULENZA",
    cardHeader: "La vostra consulenza personale",
    nameLabel: "Il vostro nome",
    emailLabel: "La vostra e-mail",
    messageLabel: "Come possiamo consigliarvi?",
    privacyLink: "Informativa sulla privacy",
    submit: "Inviare richiesta",
    submitting: "Invio in corso…",
    thanksTitle: "Grazie.",
    thanksBody: "Vi risponderemo entro 24 ore.",
    emailTitle: "Inviare il messaggio",
    emailBody1:
      "Inviate il vostro messaggio dalla vostra posta. Se non si è aperta, scrivete a",
    emailBody2: ".",
    emailBackToCard: "Torna al modulo",
    emailStowCard: "Chiudi",
    footnoteA: "CONSULENZA · RISPOSTA ENTRO 24 ORE",
    footnoteB: "L’Atelier d’Or",
    errorEmpty: "Si prega di indicare nome e messaggio.",
    errorSetup: "Il servizio è in configurazione. Riprovate più tardi.",
    errorSend: "Il vostro messaggio non è stato inviato. Riprovate.",
    pocket: "",
    noscriptWrite: "Per una consulenza personale, scrivete a",
    processEyebrow: "Processo",
    processTitle: "Consulenza dal nostro team professionale.",
    processLede:
      "Ogni richiesta è esaminata individualmente e ricevuta una risposta personale entro 24 ore lavorative.",
    steps: [
      { t: "Voi ci scrivete", b: "Descrivete il vostro bisogno: modello, silhouette, tonalità, correzione, uso quotidiano." },
      { t: "Noi esaminiamo", b: "Il nostro team professionale esamina la vostra richiesta e seleziona il modello adatto nella collezione." },
      { t: "Noi rispondiamo", b: "Entro 24 ore lavorative ricevete una raccomandazione scritta e i prossimi passi." },
    ],
    expectEyebrow: "Ciò che ricevete",
    expectTitle: "Contenuto della consulenza.",
    expectItems: [
      "Raccomandazione di silhouette e modello, in base alla forma del viso e all’uso.",
      "Suggerimento di tonalità, in base a incarnato e guardaroba.",
      "Note di porto per uso quotidiano, sera e lavoro.",
      "Prossimo passo: ordine online, consegnato nel suo astuccio.",
    ],
  },
  journal: {
    metaTitle: "Journal",
    metaDescription:
      "Design, materiali, produzione — cosa compone la collezione Roi.",
    eyebrowNum: "",
    eyebrowLabel: "Journal",
    title1: "Journal.",
    title2: "",
    title3: "",
    lede: "Design, materiali, produzione. Dietro le quinte della collezione Roi.",
    readCahier: "Leggi l’articolo",
  },
  cahier: {
    labelChapter: (numeral) => `${numeral}`,
    signatureSuffix: "L’Atelier d’Or",
    piecesEyebrowNum: "",
    piecesEyebrowLabel: "Vedi la collezione",
    othersEyebrowNum: "",
    othersEyebrowLabel: "Altri articoli",
    cahierN: (n) => `Articolo ${n}`,
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
      "Il vostro feedback sulla collezione Roi.",
    eyebrowNum: "",
    eyebrowLabel: "Feedback",
    title1: "Il vostro",
    title2: "feedback.",
    lede:
      "I vostri feedback onesti ci aiutano a far evolvere la collezione.",
    formAria: "Modulo di feedback",
    nameLabel: "Il vostro nome",
    emailLabel: "La vostra e-mail",
    modelLabel: "Modello",
    modelPlaceholder: "Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude…",
    ratingLabel: "Valutazione",
    ratingOptions: ["Eccellente", "Buono", "Discreto", "Da migliorare"],
    messageLabel: "Il vostro feedback",
    consent: "Accetto che questo feedback possa essere citato in forma anonima sulla pagina Recensioni.",
    submit: "Invia",
    submitting: "Invio in corso…",
    thanksTitle: "Grazie.",
    thanksBody: "Abbiamo ricevuto il vostro feedback.",
    errorEmpty: "Si prega di indicare nome e messaggio.",
    errorSetup: "Il servizio è in configurazione. Riprovate più tardi.",
    errorSend: "Il vostro messaggio non è stato inviato. Riprovate.",
    conseilFooterBody: "Una domanda specifica su un modello o una regolazione?",
    conseilFooterCta: "Chiedere consiglio",
    promiseEyebrow: "Cosa ne facciamo",
    promiseTitle: "Ogni feedback alimenta la prossima collezione.",
    promisePoints: [
      { t: "Leggiamo tutto", b: "Ogni messaggio è letto dal team prodotto, non da un filtro automatico." },
      { t: "Adeguiamo", b: "Note ricorrenti su silhouette, tonalità o dettaglio vengono integrate nella prossima collezione." },
      { t: "Citiamo con consenso", b: "I feedback approvati appaiono in forma anonima sulla pagina Recensioni." },
    ],
  },
  pieceSwitcher: {
    label: "Altri modelli",
    aria: (name) => `${name} — vedi il modello`,
  },
  pieces: {
    "roi-rouge": {
      tagline: "Montatura bordeaux con lenti leggermente sfumate di grigio.",
      chapter: "Caractère · Rouge",
      place: "Modello statement per la sera",
      time: "Sera",
      silhouette: "Rettangolo dagli angoli ammorbiditi, bordo netto.",
      materie:
        "Montatura bordeaux in acetato colorato in massa, finitura argentata sulle cerniere. Lenti leggermente sfumate di grigio.",
      details: [
        "Silhouette rettangolo",
        "Acetato bordeaux colorato in massa",
        "Finitura argentata sulle cerniere",
        "Lenti leggermente sfumate di grigio",
      ],
      notes: ["Statement", "Caldo", "Visibile", "Elegante"],
      scene: "",
      teintes: [{ name: "Rouge Ember" }, { name: "Rouge Profond" }],
    },
    "roi-noir": {
      tagline: "Montatura nera con lenti chiare, non sfumate.",
      chapter: "Élégance · Noir",
      place: "Modello quotidiano con carattere",
      time: "Giorno",
      silhouette: "Panto alto, linea chiusa, bordo morbido.",
      materie:
        "Montatura nera in acetato nero profondo, rivetti argentati e finitura argentata. Lenti chiare, non sfumate.",
      details: [
        "Silhouette panto alta",
        "Acetato nero profondo",
        "Rivetti argentati",
        "Lenti chiare non sfumate",
      ],
      notes: ["Discreto", "Denso", "Maschile", "Intemporale"],
      scene: "",
      teintes: [{ name: "Noir Encre" }, { name: "Noir Fumé" }],
    },
    "roi-cristal": {
      tagline: "Montatura trasparente con lenti sfumate azzurro chiaro.",
      chapter: "Lumière · Cristal",
      place: "Modello discreto per il quotidiano",
      time: "Giorno",
      silhouette: "Ovale allungato, bordo cristallino molto sottile.",
      materie:
        "Montatura trasparente in acetato cristallo, finitura argentata sulle cerniere. Lenti sfumate azzurro chiaro.",
      details: [
        "Silhouette ovale allungata",
        "Acetato cristallo traslucido",
        "Finitura argentata sulle cerniere",
        "Lenti sfumate azzurro chiaro",
      ],
      notes: ["Leggero", "Discreto", "Chiaro", "Universale"],
      scene: "",
      teintes: [{ name: "Blanc de Neige" }, { name: "Blanc Nacré" }],
    },
    "roi-emeraude": {
      tagline: "Montatura verde scuro con lenti sfumate verde-viola.",
      chapter: "Distinction · Émeraude",
      place: "Linea maschile per sera e business",
      time: "Sera",
      silhouette: "Panto maschile, bordo scolpito, aste lunghe.",
      materie:
        "Montatura verde scuro in acetato, finitura argentata sul bordo. Lenti sfumate verde-viola.",
      details: [
        "Silhouette panto maschile",
        "Acetato verde scuro",
        "Finitura argentata sul bordo",
        "Lenti sfumate verde-viola",
      ],
      notes: ["Marcato", "Profondo", "Presente", "Business"],
      scene: "",
      teintes: [{ name: "Vert Émeraude" }, { name: "Vert Forêt" }],
    },
  },
  cahiers: {
    "geste-juste": {
      rubric: "Produzione",
      title: "Montaggio a mano.",
      chapo:
        "Ogni montatura è assemblata e rifinita a mano nel nostro atelier partner.",
      read: "5 min",
      date: "Settembre",
      body: [
        "Ogni montatura Roi è prodotta nel nostro atelier partner: taglio, fresatura, piegatura, lucidatura, rivettatura e finitura avvengono in sede.",
        "Il montaggio a mano permette un controllo preciso di ogni bordo, cerniera e superficie. Ciò che una macchina farebbe più veloce cancellerebbe la linea del disegno.",
        "Il finissaggio viene ispezionato a occhio nudo sotto luce radente. Una montatura esce dall’atelier solo quando cerniere, rivetti e lucidatura sono perfetti.",
        "Ogni modello resta regolabile da qualunque ottico: cerniere e aste sono avvitate in modo classico, non incollate.",
      ],
    },
    "quatre-atmospheres": {
      rubric: "Collezione",
      title: "Rouge, Noir, Cristal, Émeraude.",
      chapo:
        "Rettangolo, Panto, Ovale e Panto maschile: i quattro modelli della collezione Roi.",
      read: "4 min",
      date: "Settembre",
      body: [
        "Roi comprende quattro modelli in acetato premium con finiture metalliche.",
        "Roi Rouge: silhouette rettangolo, acetato rosso colorato in massa, cerniere argentate. Modello statement, linee nette.",
        "Roi Noir: panto alto, acetato nero profondo, rivetti argentati. La montatura più chiusa della collezione.",
        "Roi Cristal: ovale allungato, acetato cristallo traslucido, cerniere argentate. Il modello più discreto.",
        "Roi Émeraude: panto maschile, acetato smeraldo, finitura argentata. Aste lunghe, bordo scolpito.",
      ],
    },
    "quatre-vingts-euros": {
      rubric: "Prezzo",
      title: "Vendita diretta: il nostro modello di prezzo.",
      chapo:
        "78,90 € a modello. Direttamente dall’atelier, senza intermediari.",
      read: "4 min",
      date: "Agosto",
      body: [
        "Nella distribuzione classica, la maggior parte del prezzo di vendita è trattenuta da boutique, grossisti e intermediari.",
        "Vendiamo esclusivamente online, direttamente dal nostro atelier. Il prezzo riflette solo il prodotto: acetato, metallo, tempo di montaggio.",
        "L’acetato proviene da manifatture italiane che riforniscono le grandi maison da generazioni. Le lastre sono selezionate direttamente da noi.",
        "Ogni montatura è controllata in ogni fase di produzione. Nessun magazzino intermedio, nessuna partita non verificata.",
        "Il risultato: una montatura di qualità manifatturiera a un prezzo che riflette la produzione, non il margine degli intermediari.",
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
