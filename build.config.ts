import { execSync } from "child_process";
import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["./src/main", "./services/opengraph"],
  declaration: false,
  clean: true,
  rollup: {
    esbuild: {
      minify: true,
    },
  },
  hooks: {
    "build:done": (_ctx) => {
      execSync("npm run hook:done", { stdio: "inherit" })
    }
  }
});
