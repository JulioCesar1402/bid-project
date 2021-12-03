const { Router } = require("express");

const Product = require("../models");

const router = Router();

router.get("/", async (_req, res) => {
  const products = await Product.getAll();
  res.status(200).json(products);
});

module.exports = router;