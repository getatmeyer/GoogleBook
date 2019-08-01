const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
// const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true, useNewUrlParser: true }));
app.use(express.json());

// Serve heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// Connect Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");
// Send every other request to the React app
// Define any API routes before this runs
//let defaultRoute = path.join(__dirname, "./clent/build/index.html");
// if (process.env.NODE_ENV === "production") {
//   defaultRoute = path.join(__dirname, "./client/build/index.html");
// }
// app.get("*", (req, res) => {
//   res.sendFile("./client/build/index.html");
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});