
@echo off
echo Running npm build...
npm run build

echo Running npm start...
start npm start

timeout /t 1 /nobreak >nul
tasklist /FI "WINDOWTITLE eq npm start" | findstr npm > .pidfile

echo Process ID saved to .pidfile

