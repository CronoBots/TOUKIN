# Toukin — Collectif santé · Site web

Site vitrine premium pour **Toukin**, collectif santé pluridisciplinaire à
**Tolochenaz (VD), Suisse** : physiothérapie, ostéopathie, préparation physique,
massages, nutrition et cours collectifs.

> Le mouvement, notre médecine.

## Aperçu

Site statique, sans dépendances ni étape de build. Il suffit d'ouvrir
`index.html` dans un navigateur (ou de le servir avec n'importe quel serveur
statique).

```bash
# au choix
python3 -m http.server 8000
# puis http://localhost:8000
```

## Structure

```
.
├── index.html        # page unique multi-sections
├── css/styles.css    # design system (identité "toucan")
├── js/main.js        # header sticky, menu mobile, reveal au scroll, compteurs
└── assets/
    ├── logo.svg       # logo complet (mark + wordmark)
    └── logo-mark.svg  # mark seul (favicon)
```

## Identité de marque

Le nom **Toukin** évoque le **toucan** : le logo est un toucan stylisé au bec
orange, décliné dans une palette « canopée » premium.

| Rôle | Couleur |
|------|---------|
| Vert canopée (primaire) | `#0B3A33` |
| Teal | `#0F766E` |
| Bec toucan (accent) | `#F47A3A` → `#E5563B` |
| Ambre | `#F6A23B` |
| Crème / sable | `#FAF7F0` / `#F1E9D8` |

Typographie : **Fraunces** (titres, serif) + **Manrope** (texte, sans-serif).

## Sections

Accueil · Soins · Approche · Équipe · Cours collectifs · Médias (réseaux +
vidéo) · Témoignages · Contact (carte + horaires + réservation).

## Informations sources

Données consolidées depuis les sources publiques fournies :

- **Adresse** : Route de Genève 32C, 1131 Tolochenaz (VD)
- **E-mail** : toukin@physio-hin.ch
- **Horaires** : Lun–Ven 08:00–18:00
- **Note** : 5.0 ★
- **Praticien** : Logan Mulyk, physiothérapeute (Université de Liège)
- **Réservation** : [tBooking](https://www.tbooking.ch/fr/logan-mulyk/4003-4745)
- **Instagram** : [@physiotherapeute_toukin](https://www.instagram.com/physiotherapeute_toukin)
- **YouTube** : [@toukinphysio](https://youtube.com/@toukinphysio)
- **Facebook** : [Collectif santé Toukin](https://www.facebook.com/share/1b6coKMSzt/)
- **LinkedIn** : [Toukin](https://www.linkedin.com/company/toukin/)

### Notes

- Les plateformes sociales (Instagram, Facebook, YouTube, LinkedIn) bloquent
  l'extraction automatique de leurs médias. Les **liens officiels** sont donc
  intégrés et mis en avant, plutôt que des copies d'images.
- Le **logo** a été recréé en SVG vectoriel d'après le concept de la marque
  (toucan). Il peut être remplacé par le fichier officiel dans `assets/`.
- Les **photos d'illustration** proviennent d'Unsplash (libres de droits) et
  se remplacent facilement par les visuels réels du centre.
- **Témoignages** : exemples de mise en page (note 5.0 réelle) à remplacer par
  de vrais avis.

## Personnalisation rapide

- Couleurs : variables CSS en haut de `css/styles.css` (`:root`).
- Logo : remplacer `assets/logo.svg` et `assets/logo-mark.svg`.
- Visuels : remplacer les `src` des `<img>` dans `index.html`.
- Coordonnées / horaires : section `#contact` de `index.html`.
