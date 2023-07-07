cp addon.js ./dist
cp config.js ./dist
pnpm build:css
cp ./.github/install.sh ./dist
echo Done.