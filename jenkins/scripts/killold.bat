@echo off
setlocal enabledelayedexpansion

set jobname=%JOB_NAME%
set /a my_buildnum=%BUILD_NUMBER%

echo Job is %jobname%, build number is %my_buildnum%

for /f "tokens=*" %%a in ('jenkins-cli get-job %jobname%') do (
    set "line=%%a"
    for /f "tokens=1,2 delims= " %%b in ("!line!") do (
        set /a this_buildnum=%%b
        if not "!this_buildnum!"=="%%b" (
            set /a this_buildnum=0
        )
        if !this_buildnum! leq %my_buildnum% (
            echo Build !this_buildnum! isn't building.
            continue
        )
        if !my_buildnum! equ !this_buildnum! (
            echo Build !this_buildnum! is building and it's this build.
            continue
        )
        if !my_buildnum! lss !this_buildnum! (
            set "errorMsg=A newer build is already scheduled"
            echo !errorMsg!
            exit /b 1
        )
        echo Kill build %%a number !this_buildnum!.
        set "newname=%%a(stopped by #%my_buildnum%)"
        jenkins-cli stop-build %jobname% %this_buildnum% -s "!newname!"
        ping localhost -n 6 >nul
    )
)
