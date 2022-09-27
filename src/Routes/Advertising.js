const express = require('express');
const router = express.Router();
const advertisingController = require('../Controllers/AdvertisingController');

router.get("/getadvertising",advertisingController.GetAdvertising);
router.get("/getadvertising/:id",advertisingController.GetAdvertisingById);
router.post("/addadvertising",advertisingController.AddAdvertising);
router.delete("/deleteadvertising/:id",advertisingController.DeleteAdvertising);
router.put("/updateadvertising/:id",advertisingController.UpdateAdvertising);

module.exports= router;