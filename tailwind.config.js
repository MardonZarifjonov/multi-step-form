/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'sidebar-bg-lg': "url('/src/assets/images/bg-sidebar-desktop.svg')",
        'sidebar-bg-sm': "url('/src/assets/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
