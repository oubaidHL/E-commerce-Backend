const express = require("express");
const router = express.Router();
const userController = require("../Controllers/CatController");

router.get("/api/getcategories",userController.GetCategories);
router.get("/api/getcategories/:id",userController.GetCategoriesById);
router.post("/api/addcategory",userController.AddCategory);
router.delete("/api/deletecategory/:id",userController.DeleteCategory);
router.put("/api/updatecategory/:id",userController.UpdateCategory);

module.exports =router;