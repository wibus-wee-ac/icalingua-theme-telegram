const fs = require('fs');

const watcher = ["addon.js", "main.js", "style.css"]

export function fileChangesListener() {
  // The current simple idea is to use node:fs to listen for changes to all files, and once a file change is detected, it automatically copies that file to the data directory and requires the page to reload.
  // If it is a css file, re-append the CSS file.
  // https://github.com/wibus-wee/icalingua-theme-telegram/issues/15

  fs.watch(window.theme.location, { recursive: true }, (eventType, filename) => {
    if (watcher.includes(filename) || filename.includes("telegram-theme")) {
      // console.log(`${filename} has been changed`);
      if (filename.endsWith('.css')) {
        // console.log(`${filename} has been updated`)
        const oldStyleElement = document.querySelector(`link`);
        if (oldStyleElement) {
          oldStyleElement.remove();
          // console.log(`Removed old style element`)
        }
        const cssFile = window.theme.location + filename;
        const styleElement = document.createElement('link');
        styleElement.rel = 'stylesheet';
        styleElement.href = cssFile;
        document.head.appendChild(styleElement);
        // console.log(`Appended new style element`)
      } else {
        location.reload();
      }
    }
  })

}