# 📸 Ajouter vos vrais visuels (logo + photos officielles)

> ⚠️ **Important** — L'environnement où ce site a été généré **n'a pas accès au web**
> (Instagram, YouTube, Facebook, tBooking sont bloqués par la politique réseau).
> Il a donc été **impossible de télécharger automatiquement** vos visuels officiels.
>
> Le site a été préparé pour que vos fichiers apparaissent **automatiquement**
> dès que vous les déposez aux bons emplacements — **sans toucher au code**.

## ✅ Méthode simple — déposer les fichiers (recommandé)

Ajoutez vos fichiers dans le dépôt en **respectant exactement ces noms** :

| Emplacement à créer | Contenu | Format conseillé |
|---|---|---|
| `assets/logo.svg` | Votre **logo officiel** (version complète) | SVG (ou PNG transparent) |
| `assets/logo-mark.svg` | Votre logo **sans texte** (icône/favicon) | SVG (ou PNG carré) |
| `assets/photos/hero.jpg` | Grande photo d'accueil (cabinet, soin) | JPG, ~1200×1500 px |
| `assets/photos/approche.jpg` | Photo « approche » (salle, matériel) | JPG, ~1000×800 px |
| `assets/photos/logan.jpg` | Portrait de **Logan Mulyk** _(à fournir)_ | JPG, ~760×950 px |
| `assets/photos/laetitia.jpg` | Portrait de **Laetitia Ruivo** ✅ _déjà présent_ | JPG, ~760×950 px |
| `assets/photos/anais.jpg` | Portrait d'**Anaïs Zdzioblo** ✅ _déjà présent_ | JPG, ~760×950 px |
| `assets/photos/video.jpg` | Vignette pour le bloc vidéo YouTube | JPG, ~1400×600 px |

> 🧑‍⚕️ **Portraits de l'équipe** — Laetitia et Anaïs ont été **extraits de votre
> capture d'écran tBooking** (redressés et recadrés). La qualité est limitée par
> la source (photo d'écran) : remplacez-les par les versions HD quand vous
> pourrez. **Logan** affiche pour l'instant un médaillon « LM » : déposez
> `assets/photos/logan.jpg` pour le remplacer par sa vraie photo.

👉 Tant qu'un fichier est absent, une **image de remplacement** s'affiche
automatiquement (rien n'est cassé). Dès que vous ajoutez le bon fichier,
**le vrai visuel le remplace tout seul.**

### Comment les déposer ?

**Option A — via GitHub (le plus simple)**
1. Allez sur le dépôt `CronoBots/TOUKIN`, dossier `assets/` (puis `assets/photos/`).
2. Bouton **Add file → Upload files**.
3. Glissez vos images **renommées** comme dans le tableau ci-dessus.
4. **Commit** sur la branche `main`. ✨ C'est fait.

**Option B — me les transmettre**
Donnez-moi les fichiers et je m'occupe de les renommer, placer et pousser.

## 🔗 Alternative — me donner des URLs publiques

Si vos visuels sont déjà hébergés quelque part (site, Drive public, CDN),
collez-moi simplement les **liens directs vers les images** (se terminant par
`.jpg` / `.png` / `.svg`). Je les câble dans le code et elles s'afficheront
dans le navigateur des visiteurs.

> ℹ️ Un lien vers une **page** Instagram/YouTube ne suffit pas : il me faut le
> lien direct vers le **fichier image** lui-même. Sur ces réseaux, les médias
> sont protégés et non liables durablement — d'où l'intérêt de la méthode
> « déposer les fichiers ».

## 🌐 Pour que je puisse récupérer moi-même les visuels (avancé)

Il faudrait recréer l'environnement Claude Code **web** avec une politique
réseau plus ouverte (autorisant l'accès au web sortant). Voir la doc :
<https://code.claude.com/docs/en/claude-code-on-the-web>. Avec un accès web,
je pourrais aller chercher directement les images publiques.
