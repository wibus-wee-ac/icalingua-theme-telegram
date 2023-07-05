import { IMessageUserList } from "../types";

export function enhanceStickersDisplay(messageUserList: IMessageUserList) {
  messageUserList.forEach((message) => {
    const messageElement = document.getElementById(message.id);
    if (!messageElement) {
      return;
    }

    // .vac-message-card > div > svg 这是 Super Stickers 的标识。
    // 其实需要做的不多，但是和 BetterImageDisplay 有点不一样，这次我选择通过加减 class 来实现。
    const superSticker = messageElement.querySelector(
      ".vac-message-container .vac-message-card > div > svg"
    );
    if (!superSticker) {
      return;
    }
    const card = messageElement.querySelector(".vac-message-card") as HTMLElement;
    if (!card) { return; }
    card.attributeStyleMap.set("--tg-chatbox-background", "transparent"); // 透明背景即可
    // 丢掉那个垃圾 vac-message-content，一天天的使用最新版手机QQ体验新功能🤬
    const content = messageElement.querySelector(".vac-message-content");
    if (!content) {
      return;
    }
    content.remove();
  });
}
