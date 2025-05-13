const express = require("express");
const app = express();
const products = require("../products.json");
const cors = require("cors");

app.use(cors());

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) res.status(404).json({ message: "product not found" });
  res.send(product);
});

app.listen(3000, () => console.log("server running at port 3000"));

module.exports = app;
