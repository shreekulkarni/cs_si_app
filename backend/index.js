//express server entrypoint

const express = require('express');
const app = express();
var cors = require('cors');

const path = require('path');

console.log("Serving at port 3002");

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

app.get('/', function (req, res) {
    res.send("Server running");
})

app.get('/click', function (req, res) {
    res.send("clicked");
})

app.listen(3002)
