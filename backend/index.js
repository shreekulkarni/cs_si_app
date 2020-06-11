//express server entrypoint

const express = require('express');
const app = express();

const path = require('path');

console.log("Serving at port 3000");

app.use(express.static(path.join(__dirname, 'build')));

app.listen(3000)

app.get('./', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/schedule', function (req, res) {
    res.send("schedule reached")
})

app.get('/contact', function (req, res) {
    res.send("contact reached")
})
