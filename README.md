<div>
  <a href="https://github.com/wibus-wee/icalingua-theme-telegram">
  <img align="right" width="200" src="https://github.com/wibus-wee/icalingua-theme-telegram/assets/62133302/563396b0-9211-409a-9136-74a6f3cad037#gh-light-mode-only" />
  </a>

  <a href="https://github.com/wibus-wee/icalingua-theme-telegram">
  <img align="right" width="200" src="https://github.com/wibus-wee/icalingua-theme-telegram/assets/62133302/115cdb16-88fa-4ba6-9a14-32b9ab669b1b#gh-dark-mode-only" />
  </a>

</div>

# Telegram Theme For Icalingua++

一个基于 [Icalingua++](https://github.com/Icalingua-plus-plus/Icalingua-plus-plus) 的 Telegram 风格主题。

<pre align="center">
🧪 Working in Progress
</pre>

## Motivation | 动机

我非常喜欢 Telegram Desktop 的 UI，但是在很多时候我都没法访问 Telegram，并且地区使用习惯的原因，我很难使用 Telegram，而是使用 QQ。

但是 Tencent QQ NT 版本的 UI 完全没有办法自由定制，即使定制成功了也是 HACK 进去的，对这款软件来说它并不合法。所以我决定使用 Icalingua++ 来实现这个主题。它完全可以实现 Telegram 的 UI，而且它是开源的，可以让更多的人使用。

> 总结：**QQ NT 一坨屎，Icalingua++ 大大滴好！**

但其实这个主题与其名曰主题，不如说是一个增强版的 Icalingua++，因为它不仅仅是一个主题，它还会增强 Icalingua++ 的功能与体验。

## Attentions | 注意事项

- 由于 Icalingua++ 的限制，我改变了消息列表的 DOM 结构，所以我暂时无法实现点击图片放大的功能。后续可能我会尝试重写灯箱来实现这个功能。[Issue #16](https://github.com/wibus-wee/icalingua-theme-telegram/issues/16)
- 它**强制改变**了很多原本的**DOM结构**，这可能会导致一些功能出现问题，如果你发现了这些问题，欢迎提交 [Issue](https://github.com/wibus-wee/icalingua-theme-telegram/issues)。
- 由于我们想要增强聊天功能，我们可能需要另外启动一个子进程来处理一些信息。如果你**不信任我 / 不信任仓库代码**，你可以不使用这个主题。

## Features | 特性

- **基础样式。** 将 Telegram 的大部分样式移植到 Icalingua++。
- **深度修改。** 将同一联系人的多条消息合并为一条，以减少界面占用。
  - **更好的图片信息显示效果。** 以更好的方式显示图片信息。
  - **自动解析 URL。** 自动解析 URL 以显示网站的标题和描述。
  - **新图标。** 用 Telegram 风格的图标替换图标。
  - **漂亮的模态框。** 更改模态框的样式，使其更加美观。
  - **不同的用户名颜色。** 为每个用户名分配不同的颜色，以便更好地区分不同的联系人。
  - **良好的动效。** 为 Icalingua++ 移除与主题不和谐的动效以及添加更多合理的动效。
- **更多样式。** 将添加更多样式，使 Icalingua++ 更像 Telegram。
- **更好的开发体验。** 自动重载样式和页面，以便开发者更好地开发主题。

## Installation | 安装

### Automatic | 自动安装

1. 下载最新的发布版本或从 Actions 下载最新的构建版本。
2. 在解压缩包后的目录下运行 `sh install.sh`。
3. 重启 Icalingua++。

### Manual | 手动安装

1. 下载最新的发布版本或从 Actions 下载最新的构建版本。
2. 将 `addon.js`, `style.css`, `main.js` 复制到 Icalingua++ 的[数据目录](https://github.com/Icalingua-plus-plus/Icalingua-plus-plus#%E9%BB%98%E8%AE%A4%E6%95%B0%E6%8D%AE%E7%9B%AE%E5%BD%95)
3. 重启 Icalingua++。

## Addon.js

这个文件用于帮助一些由于 DOM 结构的原因无法直接通过改变 CSS 实现目标样式的元素。已经实现的功能有：

- [x] 获取 ChatGroup 的宽度以改变 ChatGroup Aside 为 Telegram 风格的头部菜单栏。
- [x] 合并同一联系人的多条消息为一条。
- [x] 更好的图片信息显示效果。（仅针对单张图片消息）
- [x] 移除回复消息的图标并改为点击即可回复消息的样式。
- [x] 为每个用户名分配不同的颜色。
- [x] 自动重载 CSS 和 JS 文件。
- [ ] 用 Telegram 风格的图标替换图标。
- [ ] 更改模态框的样式，使其更加美观。
- [ ] 鼠标滑动以回复消息


## Preview

|Light|Dark|
|---|---|
|<img alt="light" src="https://github.com/wibus-wee/icalingua-theme-telegram/assets/62133302/841d7e5e-5e82-4373-9983-f61903879c86">|<img  alt="dark" src="https://github.com/wibus-wee/icalingua-theme-telegram/assets/62133302/e07826bd-99a8-49fb-96b6-c7dad19cf16e">|


## Author

Telegram Theme For Icalingua++ © Wibus, Released under AGPLv3. Created on Jul 1, 2023

> [Personal Website](http://wibus.ren/) · [Blog](https://blog.wibus.ren/) · GitHub [@wibus-wee](https://github.com/wibus-wee/) · Telegram [@wibus✪](https://t.me/wibus_wee)
