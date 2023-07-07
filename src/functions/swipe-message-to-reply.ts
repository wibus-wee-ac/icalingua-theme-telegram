import { IMessageUserList } from "../types";

type Direction = "left" | "right";

function handleSwipeLeft(
  element: HTMLElement,
  callback: () => void,
  direction: Direction = "left"
): void {
  let isMoving = false;
  if (element.classList.contains("swipe-left")) return;

  element.addEventListener("wheel", handleWheel);

  element.classList.add("swipe-left"); // 添加 class，防止重复绑定事件

  function handleWheel(event: WheelEvent): void {
    const deltaX = event.deltaX;

    if (direction === "left") {
      isMoving = true;

      // 添加过渡效果
      element.style.transition = "transform 0.3s";
      // element.style.transform = `translateX(${deltaX}%)`;
      const originDeltaX = Number(element.style.transform.match(/-?\d+/)?.[0]);
      element.style.transform = `translateX(${originDeltaX + deltaX}%)`;
      callback();

      // 等待过渡结束后重置样式和 isMoving 标志
      setTimeout(() => {
        element.style.transition = "";
        element.style.transform = "";
        isMoving = false;
      }, 300);
    } else if (direction === "right") {
      isMoving = true;

      // 添加过渡效果
      element.style.transition = "transform 0.3s";
      element.style.transform = `translateX(${deltaX}%)`;
      callback();

      // 等待过渡结束后重置样式和 isMoving 标志
      setTimeout(() => {
        element.style.transition = "";
        element.style.transform = "";
        isMoving = false;
      }, 300);
    }
  }
}

export function swipeMessageToReply(messageUserList: IMessageUserList) {
  messageUserList.forEach((messageUser) => {
    const element = document
      .getElementById(messageUser.id)
      ?.querySelector(".vac-message-card") as HTMLElement;
    handleSwipeLeft(element, () => {
      console.log("reply");
    });
  });
}
