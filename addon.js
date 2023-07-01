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

function init() {
  if (!document.getElementsByClassName('rooms-panel')[0].style.width) {
    setTimeout(init, 1000);
    createConsole('ADDON', 'rooms-panel not found, try again after 1s');
    return;
  }
  injectCustomRootStyle();
  listenRoomsPanelDragEvent();
}

init();