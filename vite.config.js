import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Estratégia:
// - Em desenvolvimento (yarn dev) usamos base "/" (default)
// - Para GitHub Pages usamos build com flag --base=/apps-docs/ (script build:gh / deploy)
//   Assim não quebramos paths locais e não precisamos ficar editando arquivo.
// Se quiser forçar via env: export VITE_BASE_PATH=/apps-docs/ && yarn build

export default defineConfig(({ mode }) => {
  // Carrega variáveis definidas em .env.* (VITE_BASE_PATH opcional)
  const rootDir = new URL(".", import.meta.url).pathname;
  const env = loadEnv(mode, rootDir, "");
  // Se VITE_RELATIVE = 'true', usar base './' para assets relativos (deploy em subpastas ou file://)
  const base =
    env.VITE_RELATIVE === "true" ? "./docs" : env.VITE_BASE_PATH || "/docs";
  return {
    plugins: [react()],
    base,
  };
});
