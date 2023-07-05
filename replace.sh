#!/usr/bin/env bash
# Check if the system is macOS
if [ "$(uname)" == "Darwin" ]; then
   pnpm build
   cp ./dist/main.mjs ~/Library/Application\ Support/icalingua
   cp ./dist/style.css ~/Library/Application\ Support/icalingua
   cp ./dist/opengraph.mjs ~/Library/Application\ Support/icalingua
   cp addon.js ~/Library/Application\ Support/icalingua
   echo "Done."
# Check if the system is Linux
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
   pnpm build
   cp ./dist/style.css ~/.config/icalingua
   cp addon.js ~/.config/icalingua
   cp ./dist/main.mjs ~/.config/icalingua
   cp ./dist/opengraph.mjs ~/.config/icalingua
   echo "Done."

else
   echo "Sorry, your system is not supported."
fi
