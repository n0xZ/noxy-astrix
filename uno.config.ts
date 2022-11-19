import { defineConfig, presetUno, presetWebFonts, presetIcons } from 'unocss'

export default defineConfig({
	presets: [
		presetUno(),
		presetWebFonts({
			provider: 'google',
			fonts: { roboto: 'Roboto', inter: 'Inter' },
		}),
		presetIcons(),
	],
})
