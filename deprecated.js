
/**
 * 修复消息内容宽度
 */
function fixMessageContentWidth(messageUserList) {
  messageUserList.forEach((message) => {
    const messageElement = document.getElementById(message.id);
    if (!messageElement) {
      return;
    }
    const messageContent = messageElement.querySelector('.vac-message-container .vac-message-card .vac-message-content');
    if (!messageContent) {
      return;
    }
    if (!messageContent.innerHTML) {
      messageContent.remove();
    }
    const stickers = messageElement.querySelectorAll('.vac-message-container .vac-message-card div > div > span');
    // 这个时候的 stickers 实际上是同时匹配了表情和文字的，他们的区别在于文字的 span 里面还有有一个 span class 叫做 vac-message-content
    if (stickers && stickers.length > 1) { // 如果这个 sticker 里面有多个 span，那么就需要考虑是不是有其他的 sticker
      stickers.forEach((sticker, index) => {
        const messageContent = sticker.querySelector('.vac-message-content'); // 如果这个 sticker 里面有 vac-message-content，那么就是文字
        // 如果这个 sticker 前后还有一个文字，实际上 sticker 不应该被处理
        const before = stickers[index - 1] && stickers[index - 1].querySelector('.vac-message-content');
        const after = stickers[index + 1] && stickers[index + 1].querySelector('.vac-message-content'); 
        if (before || after) {
          return;
        }
        if (!messageContent) {
          sticker.style.marginLeft = '-43px';
          sticker.style.marginRight = '43px';
        }
      })
    }
  })
}
