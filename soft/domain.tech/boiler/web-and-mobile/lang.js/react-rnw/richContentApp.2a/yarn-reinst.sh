yarn clear
rm -rf node_modules
rm -f yarn.lock
rm -f package-lock.json
rm -rf flow-typed
rm -rf .gradle

yarn cache clean

yarn install