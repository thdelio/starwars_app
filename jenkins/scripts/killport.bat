@echo off
echo Buscando el proceso que utiliza el puerto 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| find ":3000"') do (
    echo Proceso encontrado: %%a
    taskkill /F /PID %%a
)

if not exist %%a (
    echo No se encontraron procesos utilizando el puerto 3000.
)

echo Puerto 3000 liberado exitosamente.