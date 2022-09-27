const express = require('express');
const router = express.Router();
const ratingController = require('../Controllers/RatingController');

router.get("/getrating",ratingController.GetRating);
router.get("/getrating/:id",ratingController.GetRatingById);
router.post("/addrating",ratingController.AddRating);
router.delete("/deleterating/:id",ratingController.DeleteRating);
router.put("/updaterating/:id",ratingController.UpdateRating);

module.exports= router;