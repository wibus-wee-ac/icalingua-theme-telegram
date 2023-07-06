import { CoresKey } from "./src/core"
import { Functions, FunctionsKey } from "./src/functions"

declare global {
  interface Window {
    theme: {
      dev: boolean,
      location: string,
      theme: "auto" | "light" | "dark",
      systemTheme: "light" | "dark",
      chatbox: FunctionsKey[],
      core: CoresKey[],
      manual: boolean, // 是否手动控制功能启动
    }
  }
}

export { }