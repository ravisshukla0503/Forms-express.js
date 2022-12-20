/** @format */

const express = require("express");

const router = require("./routes/routers");

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded());
app.use(router);

app.listen(8000, (err) => {
  err
    ? console.log(err)
    : console.log("Server is successfully run on port 8000");
});

