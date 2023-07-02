#!/usr/bin/env bash
# Check if the system is macOS
if [ "$(uname)" == "Darwin" ]; then
   cp -r ./src/* ~/Library/Application\ Support/icalingua
   cp style.css ~/Library/Application\ Support/icalingua
   echo "Done."
# Check if the system is Linux
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
   cp -r ./src ~/.config/icalingua
   cp style.css ~/.config/icalingua
   mv addon.js ~/.config/icalingua
   mv main.js  ~/.config/icalingua
   echo "Done."

else
   echo "Sorry, your system is not supported."
fi
