import { createConsole } from '../utils.js';
import { mergeSameUserMessage } from '../functions/merge-same-user-message.js';
import { betterImageDisplay } from '../functions/better-image-display.js';
import { specialUsernameColor } from '../functions/special-username-color.js';
// import { fixImageClickEvent } from '../functions/fix-image-click-event.js';

/**
 * 修改聊天框，对聊天框进行深度定制
 */
export function modifyChatBox() {
  // 在同一用户连续发送的消息中，只保留最后一个头像
  const messageList = document.querySelectorAll('.vac-message-box');
  // 如果这个是“我”发的消息，在 vac-message-box 上会多一个 vac-offset-current 的 class
  // 接着我们需要构造一个列表，列表内储存着发消息的用户、信息 ID。
  // 其中如果是我本人发的消息，信息 ID 为 0 & 用户为 'current'
  const messageUserList = [];
  messageList.forEach((message) => {
    // id 就在 message 的 attribute 里面
    const id = message.getAttribute('id');
    // 判断是否是“我”发的消息
    const isCurrent = message.classList.contains('vac-offset-current');
    if (isCurrent) {
      messageUserList.push({
        id,
        name: 'current',
      });
    }
    // 如果不是“我”发的消息，那么我们需要获取发消息的用户 & 信息 ID
    else {
      // 用户在 vac-message-box > vac-message-sender-avatar > el-avatar > img 的 src 里面.
      const imgSrc = message.querySelector('.el-avatar img');
      if (!imgSrc) {
        // 在私聊模式下，如果对方没有头像，那么 imgSrc 会是 null
        // 这个时候我们就需要把这个消息的 name 都设置为 'friend'
        messageUserList.push({
          id,
          name: "friend",
        });
        return;
      }
      // 由于 imgSrc 是一个 url，我们需要从 url 里面提取出用户 (nk=xxx)
      const name = imgSrc.getAttribute('src').match(/nk=(.*)/)[1];
      messageUserList.push({
        id,
        name,
      });
    }
  })
  // === Feat1: Merge Same User Message ===
  mergeSameUserMessage(messageUserList);
  // === Feat2: Better image display ===
  betterImageDisplay(messageUserList);
  // === Fix(Better Image Display): Fix click event was destroyed ===
  // fixImageClickEvent(messageUserList);
  // === Feat3: Special Username Color ===
  specialUsernameColor(messageUserList);
  // === Fix1: Fix message content width ===
  // fixMessageContentWidth(messageUserList);
}


export function modifyChatBoxInterval() {
  createConsole('ADDON', 'modify chat box interval');
  setInterval(() => {
    modifyChatBox();
  }, 500);
}
