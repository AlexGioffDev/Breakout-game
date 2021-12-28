module.exports = {
  content: [
    "./src/**/*.{js, jsx,ts, tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))'
      },
      keyframes: {
        enter: {
          '0%': {
            transform: 'translateY(-20rem)',
            opacity: '0%'
          },

          '100%': {
            transform: 'translateY(0)',
            opacity: '100%'
          }
        }
      },
      animation: {
        enter: "enter 1.5s ease-in 0s 1 normal forwards"
      }
    },
  },
  plugins: [],
}
