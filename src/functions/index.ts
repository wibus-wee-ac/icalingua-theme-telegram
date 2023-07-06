import { betterImageDisplay } from "./better-image-display";
import { enhanceStickersDisplay } from "./enhance-stickers-display";
import { fixMessageContentWidth } from "./fix-message-content-width";
import { mergeSameUserMessage } from "./merge-same-user-message";
import { specialUsernameColor } from "./special-username-color";

export const Functions = {
  "merge-same-user-message": mergeSameUserMessage,
  "better-image-display": betterImageDisplay,
  "special-username-color": specialUsernameColor,
  "enhance-stickers-display": enhanceStickersDisplay,
  "fix-message-content-width": fixMessageContentWidth,
}

export type FunctionsKey = keyof typeof Functions;