# UCI TreeHole Frontend Project

This project is the frontend for **TreeHole Forward II**, built using **React + TypeScript + Vite**.

## Quick Start

### 0. Have your VS Code ready

Everything below should preferably done in VS Code terminal. Please locate to your desired folder first.

### 1. Clone the repository

```bash
git clone https://github.com/sad-js/TreeHole-Forward-II.git
cd TreeHole-Forward-II
```

### 2. Install dependencies

Make sure you have Node.js (recommended v18+) and npm installed:

```bash
npm -v
```

To initialize, please input below in your VS Code command line:

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will launch the server on the default port `5173`.

### 4. View the app

**Open your browser and go to:**

```arduino
http://localhost:5173
```

You should see the homepage of the UCI TreeHole app. If the page doesn’t load, make sure the terminal output includes something like:

```arduino
VITE v4.x.x ready in 400ms

➜ Local: http://localhost:5173/
```

## Project Structure

- `src/components/` – All React components
- `src/App.tsx` – Main application entry point
- `public/` – Static assets like icons or logos
- `vite.config.ts` – Vite configuration

## Dev Tips

- Use **VS Code** with **`Live Server`** and **`Prettier`** for a better coding experience
- **CSS** is centralized in `App.css` and organized by section

## Troubleshooting

- If dependencies are missing: `npm install`
- If port 5173 is occupied: try localhost:5174 or update the port in vite.config.ts
