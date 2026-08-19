const express = require('express');
const router = express.Router();
const tourController = require('../controller/tour.controllere');

// route to get all tours
router.get('/', tourController.getAllTours);

module.exports = router;