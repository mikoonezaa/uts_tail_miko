/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        clrfigma: '#2842bd'
      },
      backgroundImage: {
        "gambar" : "url('..src/img/gambar.png')"
      }
    },
  },
  plugins: [],
}
