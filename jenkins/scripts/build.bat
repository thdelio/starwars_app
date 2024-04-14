npm run build

timeout /t 1 /nobreak >nul
tasklist /FI "WINDOWTITLE eq npm run start" | findstr npm > .pidfile

echo Process ID saved to .pidfile
