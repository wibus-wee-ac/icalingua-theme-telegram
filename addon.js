window.onload = async function () {
  const scriptElement = document.head.getElementsByTagName('script')[0].src;
  const settings = await require('electron').ipcRenderer.invoke('getSettings');
  window.theme = {
    dev: false,
    location: decodeURIComponent(scriptElement.replace('addon.js', '').replace('file:///', '')),
    theme: settings.theme,
  }
  const refineScript = document.createElement('script');
  refineScript.type = 'module';
  refineScript.src = scriptElement.replace('addon.js', 'main.mjs');
  document.head.appendChild(refineScript);
}