import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://brentonsbarkyard.github.io",
  base: "/brentonsbarkyard.github.io",
});
