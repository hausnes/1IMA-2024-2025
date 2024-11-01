// Hente inn modulen 
//import express from "express"; // Eventuelt, men då må du legge til "type":"module" i package.json
const express = require("express");

// Opprettar ein express-app
const app = express();

// Lager ei rute til "rota" av nettstaden (= besøker jjj.no)
app.get("/", function(request, response) {
    response.send("Velkomen til JJJ!");
});

// Startar appen på ein gitt port
app.listen(3000, () => {
    console.log("Server køyrer!");
});