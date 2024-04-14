npm run start


@echo off
echo Running npm start...


timeout /t 1 /nobreak >nul
tasklist /FI "WINDOWTITLE eq npm run start" | findstr npm > .pidfile

echo Process ID saved to .pidfile

