import { getRoomsPanelWidth, getRootStyle, setRootStyle } from '../utils.js';

export function listenRoomsPanelDragEvent() {
  document.querySelector('div.el-main.multipane.layout-v').addEventListener('mouseup', () => {
    const roomsPanelWidth = getRoomsPanelWidth();
    const customRoomsPanelWidth = getRootStyle('rooms-panel-width');
    if (roomsPanelWidth !== customRoomsPanelWidth) {
      setRootStyle('rooms-panel-width', roomsPanelWidth);
    }
  })
}
