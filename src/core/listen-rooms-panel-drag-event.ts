import { createConsole, getRoomsPanelWidth, getRootStyle, setRootStyle } from '../utils.js';

export function listenRoomsPanelDragEvent() {
  const elMain = document.querySelector('div.el-main.multipane.layout-v');
  if (elMain) {
    elMain.addEventListener('mouseup', () => {
      const roomsPanelWidth = getRoomsPanelWidth();
      const customRoomsPanelWidth = getRootStyle('rooms-panel-width');
      if (roomsPanelWidth !== customRoomsPanelWidth) {
        setRootStyle('rooms-panel-width', roomsPanelWidth);
      }
    });
    createConsole('ListenRoomsPanelDragEvent', 'Rooms panel drag event listening');
  }
}
