#!/bin/bash

@echo off  
num=1      
while [ condition ]; do
    git add .
      git commit -m $num
        git push -u origin master
          timeout /t 60
            num=$(($num+1))
          done
