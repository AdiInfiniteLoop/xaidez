import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        xaidez: {
          primary: '#f59e0b',     // amber-500
          secondary: '#1e293b',   // slate-800
          light: '#ffffff',       // white
          accent: '#fbbf24',      // amber-400
          dark: '#0f172a',        // slate-900
          success: '#10b981',     // emerald-500
          warning: '#f59e0b',     // amber-500
          error: '#ef4444',       // red-500
          info: '#3b82f6',        // blue-500
        }
      },
    },
  },
  plugins: [],
};
export default config;
