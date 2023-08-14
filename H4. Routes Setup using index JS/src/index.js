const express  =  require("express");
const http = require("http");
const {connectDB} =require("./db/dbConnection");
const config = require("./config/config");
const routes = require("./routes/V1");
const app = express();

//databse connect
connectDB();


app.use("/V1",routes);

app.use((req, res, next) => {
     next(new Error("Route not found!"));
   });

//simple server create
http.createServer(app).listen(config.port,() =>{
     console.log("Server SuccessFully Listing PORT Number in 3000 !...")
});