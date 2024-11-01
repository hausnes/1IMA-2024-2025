// Hente inn modulen 
//import express from "express"; // Eventuelt, men då må du legge til "type":"module" i package.json
const express = require("express");

// Opprettar ein express-app
const app = express();

const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Lager ei rute til "rota" av nettstaden (= besøker jjj.no)
app.get("/", function(request, response) {
    response.send("Velkomen til JJJ!");
});

// Ny rute som sender ei konkret nettside
app.get("/test", function(request,response){
    response.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// Startar appen på ein gitt port
app.listen(3000, () => {
    console.log("Server køyrer!");
});