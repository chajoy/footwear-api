const express = require("express");
const app = express();
const products = require("../products.json");
const cors = require("cors");

app.use(cors());

app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(3000, () => console.log("server running at port 3000"));

module.exports = app;
