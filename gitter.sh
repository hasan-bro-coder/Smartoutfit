

num=1      
while [ condition ]; do
    git add .
    git commit -m $num
    git push -u origin master
    sleep 60
    num=$(($num+1))
done
