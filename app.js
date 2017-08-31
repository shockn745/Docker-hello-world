const express = require('express');
const app = express();

const uniqueId = Math.ceil((Math.random() * 1000));
const port = 80;

const world = process.env.WORLD

app.get("/", function(req, res) {
    console.log(`Receiving request | uniqueId: ${uniqueId}`);
    res.send(`Hello ${world}, My uniqueId is ${uniqueId}`);
});

console.log(`listening on ${port} | world: ${world} | uniqueId: ${uniqueId}`);
app.listen(port);