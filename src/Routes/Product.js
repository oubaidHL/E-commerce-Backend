const express = require('express');
const router = express.Router();
const productController = require('../Controllers/ProductController');

router.get("/getproduct",productController.GetProduct);
router.get("/getproduct/:id",productController.GetProductById);
router.post("/addproduct",productController.AddProduct);
router.delete("/deleteproduct/:id",productController.DeleteProduct);
router.put("/updateproduct/:id",productController.UpdateProduct);

module.exports = router;