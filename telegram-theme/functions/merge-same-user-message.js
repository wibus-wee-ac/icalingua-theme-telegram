
/**
 * 在同一用户连续发送的消息中，只保留最后一个头像
 */
export function mergeSameUserMessage(messageUserList) {
  let lastUser = null;
  messageUserList.forEach((messageUser, index) => {
    if (messageUser.name === 'current') {
      return;
    }
    // 接着我们需要遍历这个列表，如果发现连续的用户是同一个人
    // 那么我们就需要把前面的头像都隐藏掉，只保留最后一个头像
    // 如果 lastUser 为空，那么我们就把 lastUser 设置为当前用户，然后继续循环
    if (!lastUser) {
      lastUser = messageUser;
      return;
    }
    // 如果 lastUser 和当前用户不一样，那么我们就把 lastUser 设置为当前用户，然后继续循环
    if (lastUser.name !== messageUser.name) {
      lastUser = messageUser;
      return;
    }
    // 如果 lastUser 和当前用户一样，那么我们就需要隐藏掉消息的头像
    const message = document.getElementById(messageUser.id);
    if (!message) {
      return;
    }
    if (messageUserList[index - 1].name === 'current') {
      return;
    }
    const name = message.querySelector('.vac-message-container .vac-message-card .vac-text-username');
    if (name) {
      name.remove();
    }
    const lastMessage = document.getElementById(messageUserList[index - 1].id);
    const lastMessageAvatar = lastMessage.querySelector('.el-avatar');
    if (lastMessageAvatar) {
      lastMessageAvatar.style.opacity = 0;
    }
    // const lastName = lastMessage.querySelector('.vac-message-container .vac-message-card .vac-text-username')
    // if (lastName) {
    //   lastName.remove();
    // }
  })
}
