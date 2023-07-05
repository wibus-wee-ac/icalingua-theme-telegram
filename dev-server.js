import { execSync } from "child_process";
import { watch } from "fs";

const watcher = ["addon.js", "style.scss"]

watch("./", { recursive: true }, (eventType, filename) => {
  if (watcher.includes(filename) || filename.includes("src")) {
    console.log(`${filename} changed, recompiling...`)
    execSync("sh replace.sh");
    console.log("Recompilation complete")
  }
})
console.clear()
console.log("=== Icalingua Theme Dev Server === \n")
console.log("Watching for file changes...")
console.log("Press Ctrl+C to exit")
