const express = require("express");
const crudRoute = require("./routes/crud");

const api = express();

//Middlewares
api.use("/halffar", crudRoute);

api.listen(3000, () => console.log("Server is running"));
