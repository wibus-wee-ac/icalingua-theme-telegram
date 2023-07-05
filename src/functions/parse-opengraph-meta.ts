import { IMessageUserList } from "../types";
import { fork } from "../utils";

export function parseOpengraphMeta(messageUserList: IMessageUserList) {
  messageUserList.forEach((message) => {
    const messageElement = document.getElementById(message.id);
    if (!messageElement) {
      return;
    }
    const links = messageElement.getElementsByTagName("a");
    Promise.all(
      Array.from(links).map(async (link) => {
        const url = link.getAttribute("href")!;
        const process = await fork(`${window.theme.location}/opengraph.mjs`, [url]);
        console.log(process);
      })
    )
  })
}
