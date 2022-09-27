const express = require("express");
const router = express.Router();
const subController = require("../Controllers/SubCatController");

router.get("/getsubcategories",subController.GetSubCategories);
router.get("/getsubcategories/:id",subController.GetSubCategoriesById);
router.post("/addsubcategory",subController.AddSubCategory);
router.delete("/deletesubcategory/:id",subController.DeleteSubCategory);
router.put("/updatesubcategory/:id",subController.UpdateSubCategory);

module.exports =router;