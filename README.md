# Telegram Theme For Icalingua++
A Telegram-like theme based on [Icalingua++](https://github.com/Icalingua-plus-plus/Icalingua-plus-plus).

<pre align="center">
🧪 Working in Progress
</pre>

## Motivation

I like the style of Telegram Desktop very much, but in some areas it couldn't be accessed. Instead, Icalingua++ is a great alternative to Telegram Desktop. So I decided to make a Telegram-like theme for Icalingua++.

## Attentions

- _**You should **switch on** the "默认使用本地图片查看器" option in Icalingua++**._ Because of the limitation of Icalingua++, I changed the DOM structure of the message list, so I can't implement the function of clicking the image to enlarge it. So you should use the local image viewer to achieve this function. 
- It **forces** a lot of changes to the **DOM structure**, which can cause problems with some functions
- Since we want to enhance the functionality, we may need to start a **child process**. If you **don't trust me**, you don't have to use this theme.

## Features

- **😄 Basic Style.** Port most of the Telegram style to Icalingua++.
- **🪓 Deep Modification.** Merge me ssages from the same contact into one to reduce the interface occupancy.
  - **📷 Better Image Display.** Display the image in a better way.
  - **🔗 Auto parse URL.** Auto parse URL to display the title and description of the website.
  - **🧸 New Icons.** Replace the icons with Telegram-like style icons.
  - **📜 Good-looking Modal.** Change the style of the modal to make it more beautiful.
- **🎨 More Style.** Will add more styles to make Icalingua++ more like Telegram.

## Installation

### Automatic

1. Download the latest release or clone this repository.
2. Run `sh install.sh` in the root directory of this repository.
3. Reroad Icalingua++.

### Manual

1. Download the latest release or clone this repository.
2. Copy the `addon.js` & `style.css` to the [data directory](https://github.com/Icalingua-plus-plus/Icalingua-plus-plus#%E9%BB%98%E8%AE%A4%E6%95%B0%E6%8D%AE%E7%9B%AE%E5%BD%95) of Icalingua++.
3. Reroad Icalingua++.

## Addon.js

This file is used to help some elements that cannot be directly implemented by changing CSS due to DOM structure to achieve the target style. The functions that have been implemented are:

- [x] Get the width of ChatGroup aside to change ChatGroup Aside to the header menu bar in Telegram style.
- [x] Merge multiple messages from the same contact into one.
- [x] A better way to display the image. (Just for single image message)
- [x] Remove the icon to reply to the message and change it to the style that you can reply to the message by clicking.
- [x] Unique style for the username.
- [ ] Replace the icons with Telegram-like style icons.
- [ ] Change the style of the modal to make it more beautiful.
- [ ] Mouse slide reply message
- [ ] Mouse slide message list

## tg-theme-plugin.js

This file is used to help some elements that cannot be directly implemented by `addon.js`. The functions that have been implemented are:

- [ ] Auto parse URL to display the title and description of the website.
- [ ] TBD...

## Preview

|Light|Dark|
|---|---|
|<img alt="light" src="https://github.com/wibus-wee/icalingua-theme-telegram/assets/62133302/841d7e5e-5e82-4373-9983-f61903879c86">|<img  alt="dark" src="https://github.com/wibus-wee/icalingua-theme-telegram/assets/62133302/e07826bd-99a8-49fb-96b6-c7dad19cf16e">|


## Author

Telegram Theme For Icalingua++ © Wibus, Released under AGPLv3. Created on Jul 1, 2023

> [Personal Website](http://wibus.ren/) · [Blog](https://blog.wibus.ren/) · GitHub [@wibus-wee](https://github.com/wibus-wee/) · Telegram [@wibus✪](https://t.me/wibus_wee)
