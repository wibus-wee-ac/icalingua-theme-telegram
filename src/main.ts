import { fileChangesListener } from './core/file-changes-listener';
import { injectCustomRootStyle } from './core/inject-custom-root-style';
import { listenRoomsPanelDragEvent } from './core/listen-rooms-panel-drag-event';
import { modifyChatBoxInterval } from './core/modify-chat-box';
import { themeListener } from './core/theme-listener';
import { createConsole, getRoomsPanelWidth } from './utils';

function init() {
    if (!getRoomsPanelWidth()) {
    setTimeout(init, 1000);
    createConsole('ADDON', 'rooms-panel not found, try again after 1s');
    return;
  }
  injectCustomRootStyle(); // 注入自定义根样式
  listenRoomsPanelDragEvent(); // 监听侧边栏拖拽事件
  modifyChatBoxInterval(); // 修改聊天框
  // refinedImageGallery(); // 优化图片显示
  fileChangesListener(); // 监听文件变化
  themeListener(); // 监听主题变化
}
init();