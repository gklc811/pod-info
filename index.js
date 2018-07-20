var express = require('express')
var cors = require('cors')
var os = require('os')
var nocache = require('nocache')
var roundTo = require('round-to');

require('dotenv').config()

var app = express()
app.use(cors())
app.use(nocache())

var Client = require('node-rest-client').Client;

var client = new Client();


app.set('port', (process.env.PORT || 5000))

app.get('/', function (request, response) {
    response.send('Hello World!')
})

app.get('/podinfo', function (request, response) {
    var data = {
        'Pod Host': os.hostname(),
        'Pod uptime': os.uptime() + ' secs',
        'Pod CPU load': os.loadavg(),
        'Pod Total Memory': roundTo(os.totalmem() / (1024 * 1024 * 1024), 2) + ' GB',
        'Pod Free Memory': roundTo(os.freemem() / (1024 * 1024 * 1024), 2) + ' GB',
        'Pod CPU Count': os.cpus().length
    }
    response.send(data)
})

app.get('/route1', function (request, response) {
    var data = {
        'Hit route': 'route1',
        'Pod Host': os.hostname(),
        'Pod uptime': os.uptime() + ' secs',
        'Pod CPU load': os.loadavg(),
        'Pod Total Memory': roundTo(os.totalmem() / (1024 * 1024 * 1024), 2) + ' GB',
        'Pod Free Memory': roundTo(os.freemem() / (1024 * 1024 * 1024), 2) + ' GB',
        'Pod CPU Count': os.cpus().length
    }
    response.send(data)
})

app.get('/crossapi', function (request, response) {
    if (process.env.CROSS_API_URL) {
        client.get(process.env.CROSS_API_URL, function (data, res) {
            response.send(data)
        });
    }
    else {
        response.send("Cross API URL Not Defined")
    }
})

app.get('/route2', function (request, response) {
    var data = {
        'Hit route': 'route2',
        'Pod Host': os.hostname(),
        'Pod Uptime': os.uptime() + ' secs',
        'Pod CPU load': os.loadavg(),
        'Pod Total Memory': roundTo(os.totalmem() / (1024 * 1024 * 1024), 2) + ' GB',
        'Pod Free Memory': roundTo(os.freemem() / (1024 * 1024 * 1024), 2) + ' GB',
        'Pod CPU Count': os.cpus().length
    }
    response.send(data)
})

app.get('/crasher', function (request, response) {
    // process.exit(1)
    // response.send("Crashed...")
    process.nextTick(function () {
        throw new Error;
    });
})

app.listen(app.get('port'), '0.0.0.0', function () {
    console.log("Node app is running at 0.0.0.0:" + app.get('port'))
})