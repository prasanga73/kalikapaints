/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kalika-navy': '#0A1E3D',
        'kalika-navy-light': '#132D54',
        'kalika-navy-dark': '#06132A',
        'kalika-gold': '#C8922A',
        'kalika-gold-light': '#D4A94E',
        'kalika-gold-dark': '#A87720',
        'kalika-cream': '#FAF6F0',
        'kalika-warm-gray': '#F5F0E8',
        'kalika-slate': '#374151',
        'kalika-slate-light': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
