/**
 * Author: Jordan Earle
 *
 * Description: The main backend for all routing logic.
 */

//imports
const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

//Render ejs files. No more HTML
app.set("view engine", "ejs");

//render index page
app.get("/", (req, res) => {
  console.log("index page");
  res.render("index");
});

const employeeRouter = require("./routes/employeeRoute");
app.use("/employee", employeeRouter);

app.listen(3000, () => console.log("server running on http://localhost:3000"));
