import { IMessageUserList } from "../types";

/**
 * Better image display
 */
export function betterImageDisplay(messageUserList: IMessageUserList) {
  messageUserList.forEach((message) => {
    // 如果这个消息是图片消息，那么我们就需要重新制作一个容器，然后把图片放进去
    const messageElement = document.getElementById(message.id);
    if (!messageElement) {
      return;
    }
    // 判断下生成了没有
    if (
      messageElement
        .querySelector(".vac-message-card")
        ?.querySelector(".vac-image-tg-container")
    ) {
      return;
    }
    const messageImage = messageElement.querySelector(
      ".vac-message-container .vac-message-card .vac-image-container"
    );
    if (!messageImage || !messageImage.querySelector("img")) {
      return;
    }
    const messageImageSrc = messageImage
      .querySelector("img")
      ?.getAttribute("src");
    // 这里会有一个问题，我们需要检测一下 messageElement 还有没有 vac-message-content 这个 class，因为它是一个文本消息
    // 如果是文本消息，那么我们就不需要重新制作一个容器了
    const isTextMessage = messageElement.querySelector(
      ".vac-message-container .vac-message-card .vac-message-content"
    );
    if (isTextMessage) {
      return;
    }
    // 接着我们就可以开始制作一个容器了
    // 先获取一些必要的信息吧
    const timestamp = messageElement
      .querySelector(
        ".vac-message-container .vac-message-card .vac-text-timestamp"
      )
      ?.querySelector("span")?.innerText!;
    const current = message.name === "current";
    const newMessageImageContainer = document.createElement("div");
    newMessageImageContainer.classList.add("vac-image-tg-container");
    if (current) {
      newMessageImageContainer.classList.add("vac-image-tg-container--current");
    }
    newMessageImageContainer.innerHTML = `
      <div class="vac-image-tg-container__image">
        <img src="${messageImageSrc}" alt="">
      </div>
      <div class="vac-image-tg-container__timestamp">
        ${timestamp.split(":").slice(0, 2).join(":")}
      </div>
    `;
    // Thanks to @dmlgzs for this fix: https://github.com/wibus-wee/icalingua-theme-telegram/issues/21#issuecomment-1621200630
    newMessageImageContainer.onclick = () => {
      // 检查一下有没有 vac-forward-container
      const forwardContainer = document.querySelector(".vac-forward-container");
      if (!forwardContainer) {
        require("electron").ipcRenderer.send("openImage", messageImageSrc, window.theme.localImageViewerByDefault);
      }
    };
    const messageCard = messageElement.querySelector(
      ".vac-message-container .vac-message-card"
    ) as HTMLElement;
    // 把里面所有内容 hidden 掉
    Array.from(messageCard.querySelectorAll("*")).forEach((element) => {
      (element as HTMLElement).style.display = "none";
    });
    // 然后把新的图片容器添加进去
    messageCard.appendChild(newMessageImageContainer); // 添加新的图片容器
    // 并且要设置多一个 class 以便于我们在 CSS 里面控制不显示垃圾边框
    messageElement
      .querySelector(".vac-message-container")
      ?.classList.add("vac-message-container--image");
  });
}
