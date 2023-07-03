import { execSync } from "child_process";
import { watch } from "fs";

const watcher = ["addon.js", "main.js", "style.css"]

watch("./", { recursive: true }, (eventType, filename) => {
  if (watcher.includes(filename) || filename.includes("telegram-theme")) {
    execSync(`cp -r ${filename} ~/Library/Application\\ Support/icalingua/${filename}`)
    console.log(`${filename} has been updated`)
  }
})
console.clear()
console.log("=== Icalingua Theme Dev Server === \n")
console.log("Watching for file changes...")
console.log("Press Ctrl+C to exit")
