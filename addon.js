window.onload = async function () {
  const scriptElement = document.head.getElementsByTagName('script')[0].src;
  const settings = await require('electron').ipcRenderer.invoke('getSettings');
  const refineScript = document.createElement('script');
  refineScript.type = 'module';
  refineScript.src = scriptElement.replace('addon.js', 'main.js');
  const configScript = document.createElement('script');
  configScript.src = scriptElement.replace('addon.js', 'config.js');
  document.head.appendChild(configScript);
  configScript.onload = function () {

    window.theme = {
      ...window.theme,
      location: decodeURIComponent(scriptElement.replace('addon.js', '').replace('file:///', '')),
      theme: settings.theme,
    };
    
    document.head.appendChild(refineScript);
  };
}