import { defineConfig } from 'astro/config';
import Unocss from 'unocss/astro';
// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [Unocss(), image()]
});