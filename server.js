const express = require("express");

const app = express();

const PORT = process.env.port || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'))

app.listen(PORT, function () {
    console.log("Server listening on PORT: " + PORT)
})