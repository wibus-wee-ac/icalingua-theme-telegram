import { createConsole } from './telegram-theme/utils.js';
import { injectCustomRootStyle } from './telegram-theme/core/inject-custom-root-style.js';
import { listenRoomsPanelDragEvent } from './telegram-theme/core/listen-rooms-panel-drag-event.js';
import { modifyChatBoxInterval } from './telegram-theme/core/modify-chat-box.js';
import { refinedImageGallery } from './telegram-theme/core/refined-image-gallery.js';
import { fileChangesListener } from './telegram-theme/core/file-changes-listener.js';

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
  fileChangesListener(); // 监听文件变化
}
init();