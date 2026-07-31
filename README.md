# Joyeux Anniversaire 🎉 — Next.js

Petit site simple et fun avec deux personnages animés (Framer Motion),
des ballons qui flottent et un bouton confettis.

## Installation

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000

## Structure

```
app/
  layout.tsx       -> polices + metadata
  page.tsx          -> la page (titre, personnages, bouton surprise)
  globals.css
components/
  Character.tsx      -> le petit personnage animé (clique dessus, il saute !)
                         props hat / grimace pour le chapeau et la grimace
  Balloons.tsx        -> ballons qui flottent en fond
  ConfettiButton.tsx  -> bouton qui déclenche les confettis
  AmbientConfetti.tsx -> confettis discrets qui tombent en continu
  NextLogo.tsx        -> petit logo Next.js du footer
  GiftPrompt.tsx       -> après la surprise : "Veux-tu ton cadeau ?"
                         (bouton Oui rétrécit à chaque clic, Non grandit ;
                         au bout de 5 clics sur Oui -> révélation ;
                         un clic sur Non -> "Tu auras un cadeau quand même" ;
                         dans les deux cas -> personnage animé tenant un gâteau)
  CakeCharacter.tsx    -> le petit personnage qui tient le gâteau (bougie qui vacille, étincelles)
  ScatteredPhotos.tsx  -> photos en grands cadres rectangulaires, dispersées derrière le texte
```

## Personnaliser

- **Photos éparpillées** : dans `components/ScatteredPhotos.tsx`, chaque entrée du tableau `SPOTS`
  est un cadre (position `top`/`left`/`right`/`bottom` en %, taille `w`/`h`, rotation, couleurs).
  Remplace `<PlaceholderPortrait />` par une vraie image, par exemple
  `<img src="/photo1.jpg" className="h-full w-full object-cover" />` dans le `div` qui l'entoure.
  Ajoute, retire ou repositionne des entrées selon tes envies.

- **Couleurs du personnage au gâteau** : dans `components/CakeCharacter.tsx`, change les valeurs `fill` (ex. `#FF6FA5`)
- **Nombre de clics avant révélation** : constante `MAX_STEP` dans `components/GiftPrompt.tsx`
- **Texte du titre** : variable `TITLE` dans `app/page.tsx`
- **Sous-titre humoristique** et **message final** : dans `app/page.tsx`
- **Couleurs des personnages** : props `color` / `cheek` passées à `<Character />`
- **Palette générale** : `tailwind.config.ts` (bubblegum, peach, lilac, sun, mint, cream, ink)
- **Footer** : dernière ligne de `app/page.tsx`

## Déployer sur Vercel

1. Pousse ce dossier sur un repo GitHub
2. Va sur https://vercel.com/new, importe le repo
3. Vercel détecte Next.js automatiquement -> clique sur "Deploy"

Aucune variable d'environnement n'est nécessaire.
