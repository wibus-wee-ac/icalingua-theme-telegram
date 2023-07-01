#!/usr/bin/env bash
# Check if the system is macOS
if [ "$(uname)" == "Darwin" ]; then
   cp addon.js ~/Library/Application\ Support/icalingua
   cp style.css ~/Library/Application\ Support/icalingua
   echo "Done."
# Check if the system is Linux
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
   cp addon.js ~/.config/icalingua
   cp style.css ~/.config/icalingua
   echo "Done."
else
   echo "Sorry, your system is not supported."
fi
