import { createConsole } from './src/utils.js';
import { injectCustomRootStyle } from './src/core/inject-custom-root-style.js';
import { listenRoomsPanelDragEvent } from './src/core/listen-rooms-panel-drag-event.js';
import { modifyChatBoxInterval } from './src/core/modify-chat-box.js';
import { refinedImageGallery } from './src/core/refined-image-gallery.js';

function init() {
  if (!document.getElementsByClassName('rooms-panel')[0].style.width) {
    setTimeout(init, 1000);
    createConsole('ADDON', 'rooms-panel not found, try again after 1s');
    return;
  }
  injectCustomRootStyle(); // 注入自定义根样式
  listenRoomsPanelDragEvent(); // 监听侧边栏拖拽事件
  modifyChatBoxInterval(); // 修改聊天框
  // refinedImageGallery(); // 优化图片显示
}

init();