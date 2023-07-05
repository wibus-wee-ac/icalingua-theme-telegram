import path from 'path';

const fs = require('fs');

export function themeListener() {
  // 此处只能选择忽略自定义 config.yaml 路径的用户，因为暂时没有办法获取到用户的 config.yaml 路径（似乎）
  if (!window.theme.location) { return; }
  fs.watch(path.resolve(window.theme.location, 'config.yaml'), (eventType, filename) => {
    if (eventType === 'change') {
      
    }
  });
}