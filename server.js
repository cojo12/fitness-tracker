const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config()
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

mongoose.connect(MONGODB_URI);

app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});