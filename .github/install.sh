#!/usr/bin/env bash

# Define the destination directory path
if [ "$(uname)" == "Darwin" ]; then
   destination_dir=~/Library/Application\ Support/icalingua
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
   destination_dir=~/.config/icalingua
else
   echo "Sorry, your system is not supported."
   exit 1
fi

# Copy the files to the destination directory
cp_files() {
   cp "$1" "$destination_dir"
}

# Copy the file and prompt for overwrite if necessary (only for config.js)
copy_file_with_prompt() {
   local file="$1"
   local dest_path="$destination_dir/$file"
   if [ "$file" == "config.js" ]; then
      if [ -f "$dest_path" ]; then
         echo "The file 'config.js' already exists in the destination directory."
         read -p "Do you want to overwrite it? (y/n): " answer
         if [ "$answer" == "y" ]; then
            cp_files "$file"
         fi
      else
         cp_files "$file"
      fi
   else
      cp_files "$file"
   fi
}

# Copy the files based on the system type
if [ -n "$destination_dir" ]; then
   copy_file_with_prompt "main.js"
   copy_file_with_prompt "style.css"
   copy_file_with_prompt "addon.js"
   copy_file_with_prompt "config.js"
   echo "Done."
fi
