# QuizMaster

A dark, neon-accented quiz dashboard built with React 19, Vite, and Tailwind CSS v4.

![Stack](https://img.shields.io/badge/React-19-149eca) ![Vite](https://img.shields.io/badge/Vite-8-646cff) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8)

## Features

- Responsive dashboard layout (desktop sidebar, mobile top/bottom nav)
- Stats bento grid, daily challenge card, recent activity, and badges
- Custom Tailwind v4 theme: glass cards, neon glows, and shimmer effects
- Material Symbols icons and Google Fonts (Space Grotesk, Geist, JetBrains Mono)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run lint     # run ESLint
```

## Project structure

```
src/
  App.jsx                 # app shell: navs + main canvas
  pages/Home.jsx          # dashboard page (bento grid)
  components/
    Sidebar.jsx           # desktop navigation
    Navbar.jsx            # mobile top bar
    BottomNav.jsx         # mobile bottom bar
    StatsCards.jsx        # quizzes / score / rank
    ChallengeCard.jsx     # challenge of the day
    RecentActivity.jsx    # recent quiz list
    Badges.jsx            # badge collection + progress
  index.css               # Tailwind import + theme tokens + utilities
```

The design tokens (colors, fonts, spacing) and custom utilities live in
[`src/index.css`](src/index.css) under the `@theme` block.
