import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["./src/main"],
  declaration: false,
  clean: true,
  rollup: {
    esbuild: {
      minify: true,
    }
  }
});
