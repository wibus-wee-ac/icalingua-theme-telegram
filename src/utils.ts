export function injectScript(
  url: string,
  async: boolean,
  callback: ((this: GlobalEventHandlers, ev: Event) => any) | null
) {
  const script = document.createElement("script");
  script.src = url;
  script.async = async;
  document.head.appendChild(script);
  if (callback) {
    script.onload = callback;
  }
}

export function injectCSS(url: string) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}

export function setRootStyle(key: any, value: any) {
  const style = document.getElementById("custom-root-style");
  if (!style) {
    return;
  }
  style.innerHTML = style.innerHTML.replace(
    new RegExp(`--${key}:.*;`),
    `--${key}: ${value};`
  );
  createConsole("ADDON", `set root style ${key} to ${value}`);
}

export function getRootStyle(key: any) {
  const style = document.getElementById("custom-root-style");
  if (!style) {
    return null;
  }
  const reg = new RegExp(`--${key}: (.*);`);
  const match = style.innerHTML.match(reg);
  if (match) {
    return match[1];
  }
  return null;
}

export function getRoomsPanelWidth() {
  return (document.getElementsByClassName("rooms-panel")[0] as HTMLElement)
    .style.width;
}

export function createConsole(code: string, desc: string) {
  if (!window.theme.log) return;
  console.log(
    `%c ${code} %c ${desc}`,
    "background: #eaeffd;color:#335eea;padding: 4px 6px;border-radius:3px;",
    "background:unset;color:unset;"
  );
}

export function createConsoleGroup(
  code: string,
  desc: string,
  group: {
    text: string;
    type: "log" | "error" | "warn" | "info";
  }[]
) {
  if (!window.theme.log) return;
  console.groupCollapsed(
    `%c ${code} %c ${desc}`,
    "background: #eaeffd;color:#335eea;padding: 4px 6px;border-radius:3px;",
    "background:unset;color:unset;"
  );
  group.forEach((item) => {
    console[item.type](item.text);
  });
  console.groupEnd();
}
