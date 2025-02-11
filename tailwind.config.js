/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  darkMode: ["class"],
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        colors: {
          primary: "#1E40AF", // Bleu foncé
          secondary: "#FACC15", // Jaune vif
          danger: "#DC2626", // Rouge
        },
        spacing: {
          128: "32rem", // equivalent à pt-128
          144: "36rem", // equivalent à pt-144
          160: "40rem", // equivalent à pt-160
          // Tu peux ajouter d'autres valeurs ici selon tes besoins
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), "@tailwindcss/forms"],
};
