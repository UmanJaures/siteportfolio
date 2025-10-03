import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "GNEZE DANIEL — Électricien professionnel et qualifié ",
  author: "GNEZE DANIEL",
  description:
    " Gneze Daniel Ezechiel, électricien qualifié basé à Abidjan, spécialisé dans l’installation, la rénovation et la maintenance électrique. Je propose des solutions électriques sûres, fiables et conformes aux normes, adaptées aussi bien aux particuliers qu’aux entreprises de construction. Engagé, rigoureux et orienté qualité, j'accompagne ses clients dans tous leurs projets électriques pour garantir performance, durabilité et sécurité.",
  lang: "fr",
  siteLogo: "/logo.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projets", href: "#projects" },
    { text: "Témoignages", href: "#temoignages" },
    { text: "a propos", href: "#about" },
  ],
  socialLinks: [
    { text: "Facebook", href: "https://www.facebook.com/profile.php?id=61578791547315" },
    { text: "Whatsapp", href: "https://wa.me/qr/E23CMSZKS2VSB1" },
    { text: "LinkedIn", href: "" },
  ],
  socialImage: "/logo.png",
  canonicalURL: "/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "GNEZE DANIEL",
    specialty: "ÉLECTRICIEN BÂTIMENT",
    summary:
      " Dani+ vous offre des solutions électriques modernes et durables, alliant sécurité, fiabilité et performance pour chaque projet.",
    email: "https://wa.me/qr/B5VYLL6NVA37A1",
  },
  testimonials: [
    {
      nom: "Fatou KONE",
      texte: "Daniel a réalisé l'installation électrique complète de mon appartement avec un grand professionnalisme. Je recommande vivement !",
      photo: "/logo.png",
      fonction: "Cliente particulière"
    },
    {
      nom: "Jean-Marc DIALLO",
      texte: "Un service rapide et efficace pour la rénovation de notre boutique. Merci pour les conseils et la qualité du travail !",
      photo: "/logo.png",
      fonction: "Commerçant"
    },
    {
      nom: "Jean-Marc DIALLO",
      texte: "Un service rapide et efficace pour la rénovation de notre boutique. Merci pour les conseils et la qualité du travail !",
      photo: "/logo.png",
      fonction: "Commerçant"
    },
    {
      nom: "Awa TRAORE",
      texte: "J'ai fait appel à Daniel pour la création de mes supports graphiques. Le rendu est moderne et professionnel.",
      photo: "/logo.png",
      fonction: "Entrepreneure"
    }
  ],
  experience: [
    {
      company: "COMPLEXE COMMERCIAL ET RESIDENTIEL – Yopougon (Abidjan)",
      position: "Rénovation électrique complète du complexe comprenant 6 magasins et 10 studio",
      startDate: "",
      endDate: "",
      summary: [
        " Rénovation électrique complète du complexe comprenant 6 magasins et 10 studios",
        " Reprise de la tuyauterie, câblage et nouveaux circuits",
        " Montage du tableau principal et divisionnaires",
        " Pose des prises, interrupteurs et luminaires",
        " Livraison dans les délais avec respect strict des normes de sécurité",
      ],
    },
    {
      company: "BATIMENT R+2 – Village de Dabou",
      position: "Réalisation complète de l’installation électrique de ce bâtiment R+2",
      startDate: "",
      endDate: "",
      summary: [
        "Étude et mise en place de la tuyauterie électrique",
        "Passage des câbles et installation complète",
        "Montage des tableaux électriques",
        "Pose des appareillages et mise en service finale",
        "Chantier livré dans le respect des délais et normes",
      ],
    },
    {
      company: "DEPANNAGES ET SERVICES DIVERS – Abidjan",
      position: " Parce que l’électricité ne s’arrête pas aux grands projets, nous intervenons aussi pour tous vos dépannages du quotidiens.",
      startDate: "",
      endDate: "",
      summary:
        "",
    },
    {
      company: "Dépannage domestique",
      position: " ",
      startDate: "",
      endDate: "",
      summary:[
        " Coupures de courant, courts-circuits, disjoncteurs",
        " Remplacement de vos appareils domestiques (fusibles, prises, ineterrupteurs)",
        " Pannes d’éclairage et appareils électroménagers",
      ],
    },
    {
      company: "Dépannage tertiaire (Bureaux, commerces, magasins, boutiques etc...)",
      position: " ",
      startDate: "",
      endDate: "",
      summary:[
        " Pannes sur tableaux électriques et surcharges",
        " Réparation de prises industrielles et circuits spécialisés",
        " Mise à la terre et protections différentielles",
        " Éclairage publicitaire et enseignes lumineuses",
      ],
    },
    {
      company: "Dépannage chantier / industriel",
      position: " ",
      startDate: "",
      endDate: "",
      summary:[
        " Remise en marche de moteurs et machines",
        " Remplacement de contacteurs et relais",
        " Vérification et réparation de coffrets et tableaux TGBT",
        " Détection et correction de défauts de câblage",
      ],
    },
    {
      company: " Maintenance préventive",
      position: " ",
      startDate: "",
      endDate: "",
      summary:[
        " Contrôle et entretien des installations électriques et appareils electroménagers",
        " Vérification des dispositifs de sécurité",
        " Remplacement préventif des pièces usées (prises, câbles, protections)",
        " Tests de continuité et conformité aux normes électriques",
      ],
    },
  ],
  projects: [
    {
      name: "Bâtiment R+2",
      summary: "Un projet qui allie modernité et sécurité électrique pour offrir confort aux résidents et fiabilité aux commerçants.",
      linkPreview: "https://wa.me/qr/E23CMSZKS2VSB1",
      linkSource: "https://www.facebook.com/profile.php?id=61578791547315",
      image: "/complexe.png",
    },
    {
      name: "Complexe magasin + studios",
      summary: " Une installation électrique pensée pour la durabilité, garantissant sérénité et performance à long terme.",
      linkPreview: "https://wa.me/qr/E23CMSZKS2VSB1",
      linkSource: "https://www.facebook.com/profile.php?id=61578791547315",
      image: "/magasin.png",
    },
    {
      name: " Services de dépannage",
      summary: " Réactivité et fiabilité pour tous vos dépannages, qu’ils soient domestiques, tertiaires ou industriels.",
      linkPreview: "https://wa.me/qr/E23CMSZKS2VSB1",
      linkSource: "https://www.facebook.com/profile.php?id=61578791547315",
      image: "/depanage.png",
    },
  ],
  about: {
    description: `
       Je suis Gneze Daniel Ezechiel, électricien qualifié basé à Abidjan en Côte d’ivoire, 
       spécialisé dans l’installation, la rénovation et la maintenance électrique. Avec plus de 
       deux années d’expérience et une équipe de 04 techniciens expérimentés, je propose des 
       solutions électriques sûres, fiables et conformes aux normes, adaptées aussi bien aux 
       particuliers qu’aux entreprises de construction. Mon expertise couvre l’installation 
       complète de réseaux électriques, le câblage de tableaux, la mise aux normes, ainsi que 
       le dépannage rapide. Engagé, rigoureux et orienté qualité, j’accompagne mes clients dans 
       tous leurs projets électriques pour garantir performance, durabilité et sécurité.
      
    `,
    image: "/daniel.jpg",
  },
};

// #5755ff
