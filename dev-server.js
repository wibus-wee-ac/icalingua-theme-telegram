import { execSync } from "child_process";
import { readFileSync, readdirSync, watch } from "fs";
import chalk from "chalk";
import path from "path";
import consola from "consola";
console.clear()
const watcher = ["addon.js", "style.scss", "config.js"]
const cache = {};
const pwd = execSync("pwd", { encoding: "utf-8" }).trim()
function cacheFiles(dir) {
  readdirSync(dir, { withFileTypes: true }).forEach((file) => {
    if (file.isDirectory()) {
      cacheFiles(`${dir}/${file.name}`)
    } else {
      // consola.info(`${chalk.cyan("[Cache]")} Caching ${chalk.green(file.name)}...`)
      cache[`${dir}/${file.name}`] = readFileSync(`${dir}/${file.name}`, { encoding: "utf-8" })
    }
  })
}
cacheFiles(path.resolve(pwd, "./src"))
watcher.forEach((file) => {
  // consola.info(`${chalk.cyan("[Cache]")} Caching ${chalk.green(file)}...`)
  cache[`${path.resolve(pwd)}/${file}`] = readFileSync(`${file}`, { encoding: "utf-8" })
})

consola.info(`${chalk.cyan("[Cache]")} Caching complete\n`);

watch("./", { recursive: true }, (eventType, filename) => {
  if (watcher.includes(filename) || filename.includes("src")) {
    // 比对文件内容是否发生变化
    if (cache[`${path.resolve(pwd)}/${filename}`] === readFileSync(`${path.resolve(pwd)}/${filename}`, { encoding: "utf-8" })) {
      return
    }
    // 更新缓存
    cache[filename] = readFileSync(filename)
    consola.info(`${chalk.cyan("[Cache]")} ${chalk.green(filename)} updated`)
    // consola.info(`${filename} changed, recompiling...`)
    consola.info(`${chalk.bold(chalk.blue("[Dev]"))} Recompiling...`)
    execSync("sh replace.sh");
    // consola.info("Recompilation complete")
  }
})
consola.info(`${chalk.bold(chalk.blue("[Dev]"))} Watching for file changes...`)
consola.info(`${chalk.bold(chalk.blue("[Dev]"))} Press ${chalk.green("Ctrl + C")} to exit`)
