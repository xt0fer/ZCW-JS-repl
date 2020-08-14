#!/bin/bash
sudo docker run --name zcw-js-repl -p 8087:80 -d -v /gitea/code/ZCW-JS-repl/code:/usr/share/nginx/html nginx
