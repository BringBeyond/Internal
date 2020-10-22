module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [],
  theme: {

	fontFamily:{
		'sans':['Roboto', 'sans-serif'],
		'mono':['"Space Mono"', 'monospace'],
	},

    extend: {
		spacing: {
			'2.2': '2.2rem',

		},

		height: {
			'box': '32rem',
			'lg_box': '24rem',
		},

		width: {
			'box': '32rem',
			'lg_box': '24rem',
		},

		textColor: theme => theme('colors'),
			textColor: {
				'headline': '#E06C75',
				'main': '#151515',
				'pattern': '#232222',
				'secondary': '#111111',
		},

		backgroundColor: theme => ({
			'main': '#151515',
			'pattern': '#232222',
			'secondary': '#111111',
			'headline': '#E06C75',
      })

	}
  },
  variants: {},
  plugins: []
}
