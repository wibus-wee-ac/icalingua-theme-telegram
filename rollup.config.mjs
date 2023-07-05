import { defineConfig } from "rollup";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-ts";
import commonjs from "@rollup/plugin-commonjs";
import { minify } from "rollup-plugin-esbuild";

export default defineConfig({
  input: [
    "src/main.ts",
    "services/opengraph.ts"
  ],
  output: {
    dir: "dist",
    format: "module",
  },
  plugins: [
    nodeResolve(),
    typescript(),
    minify(),
    commonjs(),
  ],
  
})