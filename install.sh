#!/usr/bin/env bash
# Check if the system is macOS
if [ "$(uname)" == "Darwin" ]; then
   cp -r ./src/* ~/Library/Application\ Support/icalingua
   mv ~/Library/Application\ Support/icalingua/src ~/Library/Application\ Support/icalingua/icalingua-theme-telegram
   cp style.css ~/Library/Application\ Support/icalingua
   cp addon.js ~/Library/Application\ Support/icalingua
   cp main.js ~/Library/Application\ Support/icalingua
   echo "Done."
# Check if the system is Linux
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
   cp -r ./src ~/.config/icalingua
   mv ~/.config/icalingua/src ~/.config/icalingua/icalingua-theme-telegram
   cp style.css ~/.config/icalingua
   cp addon.js ~/.config/icalingua
   cp main.js ~/.config/icalingua
   echo "Done."

else
   echo "Sorry, your system is not supported."
fi
