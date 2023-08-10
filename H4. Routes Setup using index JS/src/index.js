const http = require("http");
const express = require("express");
const { connectDB } = require("./db/dbConnection");
const routes = require("./routes/v1");
const config = require("./config/config");

const app = express();

app.use("/v1", routes);

/** whenever route not created and you try to use that route then throw error. */
app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

/** Database connection */
connectDB()

/** create server using http */
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("server listning port number 3000!");
});