const express = require("express");
const router = express.Router();
const userController = require("../Controllers/CatController");

router.get("/getcategories",userController.GetCategories);

module.exports =router;