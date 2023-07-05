import { IMessageUserList } from "../types";

const child_process = require("child_process");
export function parseOpengraphMeta(messageUserList: IMessageUserList) {
  messageUserList.forEach((message) => {
    const messageElement = document.getElementById(message.id);
    if (!messageElement) {
      return;
    }
    const links = messageElement.getElementsByTagName("a");
    Promise.all(
      Array.from(links).map(async (link) => {
        const url = link.getAttribute("href");
        const process = await child_process.fork(`${window.theme.location}/opengraph.mjs`, [url], { silent: true });
        let meta;
        process.stdout.on("data", (data: any) => {
          meta = JSON.parse(data.toString());
          console.log(meta);
          
        })
        process.on("close", () => {
        })
        console.log(meta);
      })
    )
  })
}
