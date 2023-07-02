import { createConsole } from '../utils.js';
import { getRoomsPanelWidth } from '../utils.js';

export function injectCustomRootStyle() {
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

