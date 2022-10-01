const express = require("express");
const router = express.Router();
const cartController = require('../Controllers/CartController')

router.get("/getcart",cartController.GetPanier);
router.get("/getcart/:id",cartController.GetCartById);
router.post("/addcart",cartController.AddCart);
router.delete("/deletecart/:id",cartController.DeleteCart);
router.put("/updatecart/:id",cartController.UpdateCart);

module.exports = router;