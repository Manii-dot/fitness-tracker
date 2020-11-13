const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/api_route.js")(app);
require("./routes/html_route.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/exercise")
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  