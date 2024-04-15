import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
// import tsconfig from "vite-tsconfig-paths";
import viteSvgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    // tsconfig(),
    react(),
    viteSvgr({
      include: "**/*.svg",
      svgrOptions: {
        exportType: "default",
      },
    }),
  ],
});
