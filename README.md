# ZCW-JS-repl
a small, local only Javascript REPL page, one that can be used via a static site for students who wish to play with small javascript programs.

Source for a very simple REPL page, one that allows you to type in JavaScript programs and run them in order to follow along with Zip Code's JS booklet. 

This should be deployed to https://code.zipcode.rocks

code/index.html is main page.

src-noconflict is the distribution from the Ace Editor. (https://github.com/ajaxorg/ace)

when you get to the machine, to restart, do a `git pull` of changes,
and then, `sudo docker ps` and see what the container name is.
finally, from the source code root, do a `sudo docker restart container_name`
it should respond with a `container_name` as output.

and run local?

```
python3 -m http.server
```

## Futures

- Gists? able to save and load to gist
- more better toolbar
- More Trails! Moar!

## Local development

rather than uploading to a known server, one can run a local webserver easily with python3.
do it from inside the code directory, that way `localhost:8000` will act right URL-wise.

```
cd code
python3 -m http.server
```

## Deployment

Jump to the server, do a `git pull` to fetch changes, the webserver will pick up the changes.

