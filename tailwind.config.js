module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')

  ],
  backgroundImage: {
    'hero-lg': "url('https://www.klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png')"
}
}