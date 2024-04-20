@echo off

set /A num=1      
:loop
    git add .
    git commit -m $num
    git push -u origin master
    timeout 5 > NUL
    num= %num% + 1
    echo %num%
    goto :loop
done
