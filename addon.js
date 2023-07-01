function createConsole(code, desc) {
  console.log(
    `%c ${code} %c ${desc}`,
    "background: #eaeffd;color:#335eea;padding: 4px 6px;border-radius:3px;",
    "background:unset;color:unset;"
  );
}

function getRoomsPanelWidth() {
  return document.getElementsByClassName('rooms-panel')[0].style.width;
}

function injectCustomRootStyle() {
  const roomsPanelWidth = getRoomsPanelWidth();

  const style = document.createElement('style');
  style.id = 'custom-root-style';
  style.innerHTML = `
    :root {
      --rooms-panel-width: ${roomsPanelWidth};
    }
  `;
  document.head.appendChild(style);
  createConsole('ADDON', 'inject custom root style success');
}

function setRootStyle(key, value) {
  const style = document.getElementById('custom-root-style');
  style.innerHTML = style.innerHTML.replace(new RegExp(`--${key}:.*;`), `--${key}: ${value};`);
  createConsole('ADDON', `set root style ${key} to ${value}`);
}

function getRootStyle(key) {
  const style = document.getElementById('custom-root-style');
  const reg = new RegExp(`--${key}: (.*);`);
  const match = style.innerHTML.match(reg);
  if (match) {
    return match[1];
  }
  return null;
}

function listenRoomsPanelDragEvent() {
  document.querySelector('div.el-main.multipane.layout-v').addEventListener('mouseup', () => {
    console.log('mouseup');
    const roomsPanelWidth = getRoomsPanelWidth();
    const customRoomsPanelWidth = getRootStyle('rooms-panel-width');
    if (roomsPanelWidth !== customRoomsPanelWidth) {
      setRootStyle('rooms-panel-width', roomsPanelWidth);
    }
  })
}

/**
 * 合并同一用户连续发送的消息
 */
function mergeMessageFromSameUser() {
  // 在同一用户连续发送的消息中，只保留最后一个头像
  const messageList = document.querySelectorAll('.vac-message-box');
  // 如果这个是“我”发的消息，在 vac-message-box 上会多一个 vac-offset-current 的 class
  // 接着我们需要构造一个列表，列表内储存着发消息的用户、信息 ID。
  // 其中如果是我本人发的消息，信息 ID 为 0 & 用户为 'current'
  const messageUserList = [];
  messageList.forEach((message) => {
    // 判断是否是“我”发的消息
    const isCurrent = message.classList.contains('vac-offset-current');
    if (isCurrent) {
      messageUserList.push({
        id: 0,
        name: 'current',
      });
    }
    // 如果不是“我”发的消息，那么我们需要获取发消息的用户 & 信息 ID
    else {
      // id 就在 message 的 attribute 里面
      const id = message.getAttribute('id');
      // 用户在 vac-message-box > vac-message-sender-avatar > el-avatar > img 的 src 里面.
      const imgSrc = message.querySelector('img').getAttribute('src');
      // 由于 imgSrc 是一个 url，我们需要从 url 里面提取出用户 (nk=xxx)
      const name = imgSrc.match(/nk=(.*)/)[1];
      messageUserList.push({
        id,
        name,
      });
    }
  })
  // 接着我们需要遍历这个列表，如果发现连续的用户是同一个人
  // 那么我们就需要把前面的头像都隐藏掉，只保留最后一个头像
  let lastUser = null;
  messageUserList.forEach((messageUser, index) => {
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
    const lastMessage = document.getElementById(messageUserList[index - 1].id);
    lastMessage.querySelector('.el-avatar').style.opacity = 0;
    const lastName = lastMessage.querySelector('.vac-message-container .vac-message-card .vac-text-username')
    if (lastName) {
      lastName.remove();
    }
  })
}

function mergeMessageFromSameUserInterval() {
  createConsole('ADDON', 'interval merge message from same user');
  setInterval(() => {
    mergeMessageFromSameUser();
  }, 500);
}

function init() {
  if (!document.getElementsByClassName('rooms-panel')[0].style.width) {
    setTimeout(init, 1000);
    createConsole('ADDON', 'rooms-panel not found, try again after 1s');
    return;
  }
  injectCustomRootStyle(); // 注入自定义根样式
  listenRoomsPanelDragEvent(); // 监听侧边栏拖拽事件
  mergeMessageFromSameUserInterval(); // 合并同一用户连续发送的消息
}

init();