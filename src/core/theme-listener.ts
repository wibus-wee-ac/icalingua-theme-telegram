import { createConsole } from "../utils";

export function themeListener() {
  // https://github.com/wibus-wee/icalingua-theme-telegram/issues/21#issuecomment-1621126078
  setInterval(async () => {
    const settings = await require('electron').ipcRenderer.invoke('getSettings');
    window.theme.theme = settings.theme;
    const theme = settings.theme;
    if (theme === 'auto') {
      if (!window.theme.systemTheme) {
        window.theme.systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      document.documentElement.setAttribute("theme", window.theme.systemTheme);
    } else {
      document.documentElement.setAttribute("theme", theme);
    }
  }, 500);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? 'dark' : 'light';
    if (window.theme.theme === 'auto') {
      window.theme.systemTheme = newColorScheme;
      document.documentElement.setAttribute('theme', newColorScheme);
    }
  });

  createConsole('ThemeListener', 'Theme listener listening');
}
