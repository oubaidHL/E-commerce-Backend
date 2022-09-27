const express = require('express');
const router = express.Router();
const reviewController = require('../Controllers/ReviewController');

router.get("/getreview",reviewController.GetReview);
router.get("/getreview/:id",reviewController.GetReviewById);
router.post("/addreview",reviewController.AddReview);
router.delete("/deletereview/:id",reviewController.DeleteReview);
router.put("/updatereview/:id",reviewController.UpdateReview);

module.exports = router;