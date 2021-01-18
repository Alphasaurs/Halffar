const express = require("express");
const endPoints = require("./routers/endpoints");
const cors = require("cors");

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/halffar", endPoints);

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Halffar is listening on port " + port + "!");
});
