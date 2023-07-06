import { fileChangesListener } from "./file-changes-listener";
import { injectCustomRootStyle } from "./inject-custom-root-style";
import { listenRoomsPanelDragEvent } from "./listen-rooms-panel-drag-event";
import { modifyChatBoxInterval } from "./modify-chat-box";
import { themeListener } from "./theme-listener";

export const Cores = {
  "inject-custom-root-style": injectCustomRootStyle,
  "listen-rooms-panel-drag-event": listenRoomsPanelDragEvent,
  "modify-chat-box-interval": modifyChatBoxInterval,
  "file-changes-listener": fileChangesListener,
  "theme-listener": themeListener,
};

export type CoresKey = keyof typeof Cores;