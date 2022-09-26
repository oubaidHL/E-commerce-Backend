const express = require("express");
const router = express.Router();
const userController = require("../Controllers/CatController");


router.get("/getcategories",userController.GetCategories);
/*router.get("/getcategories/:id",userController.GetCategoriesById);
router.post("/addcategory",userController.AddCategory);
router.delete("/deletecategory/:id",userController.DeleteCategory);
router.put("/updatecategory/:id",userController.UpdateCategory);*/


module.exports =router;