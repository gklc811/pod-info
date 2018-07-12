# Sample Node JS app


A sample Node.js app using Express 4 to deploy in docker and get the info of pods spun through kubernetes

# Routes
  - / 
  - /podinfo
  - /route1
  - /route2

### Installation

```sh
$ npm install 
$ npm start
> nodejs-sample@0.1.0 start C:\Users\Gokul\Desktop\NodeProj\node-js-sample
> node index.js

Node app is running at 0.0.0.0:5000
```
### CURLResponse

```sh
$ npm install 
$ npm start
> nodejs-sample@0.1.0 start C:\Users\Gokul\Desktop\NodeProj\node-js-sample
> node index.js

Node app is running at 0.0.0.0:5000
```
For production environments...

```sh
$ curl localhost:5000
Hello World!
$ curl localhost:5000/podinfo
{"Pod Host":"DESKTOP-K8TOO6L","Pod uptime":"4292.3069913 secs","Pod CPU load":[0,0,0],"Pod Total Memory":"63.92 GB","Pod Free Memory":"56.93 GB"}
```

