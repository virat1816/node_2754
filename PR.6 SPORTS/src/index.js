const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./db/dbconnection")
const config = require("./config/config");
const routes = require("./routes/v1");
const app = express();
const http = require("http");


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

connectDB();

app.use("/v1", routes);

app.use((req, res, next) => {
    next(new Error("Route not found!"));
});

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("server listning port number "+config.port);
});