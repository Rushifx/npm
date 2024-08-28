'use strict'; //inform javascript engine that the code on this index uses strict rules

const express = require("express");

// constants

const PORT = 8989;
const HOST = "127.0.0.1";
const OS = require("os");
const ENV = "DEV";

// application

const app = express(); //invoking express library through app

app.get("/", (req, res)=> { //listens for http://localhost:8989 to be called
    res.statusCode = 200;
    const msg = "Hello FSD Learner! Running Node.js";
    res.send(msg);
});

app.get("/test", (req, res)=> {
    res.statusCode = 200;
    const msg = "Hello from the /test Node"
    res.send(msg);
});

app.listen(PORT, HOST);
//console.log("Running on PORT:" + PORT + " and HOST :" + HOST); //conventional way to concatenate strings
console.log(`Running on http://${HOST}:${PORT}`); //template string to  concatenate string
console.log(OS.platform());
