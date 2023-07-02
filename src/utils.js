export function injectScript(url, async) {
  const script = document.createElement('script');
  script.src = url;
  script.async = async;
  document.head.appendChild(script);
}

export function injectCSS(url) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
}

export function setRootStyle(key, value) {
  const style = document.getElementById('custom-root-style');
  style.innerHTML = style.innerHTML.replace(new RegExp(`--${key}:.*;`), `--${key}: ${value};`);
  createConsole('ADDON', `set root style ${key} to ${value}`);
}

export function getRootStyle(key) {
  const style = document.getElementById('custom-root-style');
  const reg = new RegExp(`--${key}: (.*);`);
  const match = style.innerHTML.match(reg);
  if (match) {
    return match[1];
  }
  return null;
}


export function getRoomsPanelWidth() {
  return document.getElementsByClassName('rooms-panel')[0].style.width;
}

export function createConsole(code, desc) {
  console.log(
    `%c ${code} %c ${desc}`,
    "background: #eaeffd;color:#335eea;padding: 4px 6px;border-radius:3px;",
    "background:unset;color:unset;"
  );
}