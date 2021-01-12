const express = require("express");
const app = express();
const path = require("path")

const PORT = process.env.port || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, './Develop/public')));

require("./routes/api-route")(app);
require("./routes/html-route")(app);

app.listen(PORT, function () {
    console.log("Server listening on PORT: " + PORT)
})