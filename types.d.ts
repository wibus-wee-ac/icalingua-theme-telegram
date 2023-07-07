import { CoresKey } from "./src/core"
import { Functions, FunctionsKey } from "./src/functions"

declare global {
  interface Window {
    theme: {
      // Auto generated
      location: string,
      // From settings (Auto generated)
      theme: "auto" | "light" | "dark",
      localImageViewerByDefault: boolean,
      systemTheme: "light" | "dark",
      // Manual control
      dev: boolean,
      chatbox: FunctionsKey[],
      core: CoresKey[],
      manual: boolean, // 是否手动控制功能启动
      log: boolean, // 是否打印日志
    }
  }
}

export { }