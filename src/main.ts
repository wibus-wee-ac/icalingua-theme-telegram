import { Cores } from "./core";
import { Functions } from "./functions";
import { createConsole, createConsoleGroup, getRoomsPanelWidth } from "./utils";

function init() {
  // #app > .vac-col-messages 是用于判断是否在「转发聊天页面」页面
  if (!getRoomsPanelWidth() && !document.querySelector("#app > .vac-col-messages")) {
    setTimeout(init, 1000);
    createConsole("ADDON", "rooms-panel not found, try again after 1s");
    return;
  }
  if (!window.theme.manual || window.theme.dev) {
    // 如果不是手动控制功能启动, dev 模式下也会全部启动
    window.theme.core = Object.keys(Cores) as (keyof typeof Cores)[];
    window.theme.chatbox = Object.keys(Functions) as (keyof typeof Functions)[];
  }
  createConsoleGroup(
    "Init",
    "These Core Functions will be executed:",
    window.theme.core.map((f) => {
      // 将短横线转换为驼峰
      const text = f.replace(/-(\w)/g, function (_all, letter) {
        return letter.toUpperCase();
      }) as keyof typeof Cores;
      const isCoreExist = Cores[f] !== undefined;
      if (!isCoreExist) {
        window.theme.core = window.theme.core.filter((c) => c !== f);
      }
      return {
        text: `${text} => ${isCoreExist ? "✅" : "❌"}`,
        type: isCoreExist ? "log" : "warn",
      };
    })
  );
  Promise.all(
    window.theme.core.map((fn) => {
      return Cores[fn]();
    })
  );
}
init();
