const express = require('express');
const router = express.Router();
const tourController = require('../controller/tour.controllere');

// route to get all tours
router.get('/', tourController.getAllTours);

router.get('/:id', tourController.getTourById);

router.get('/search', tourController.getToursByQuery);

router.post('/tours', (req, res) => {
    const newTour = req.body;
    const tours = tourController.getAllTours();
    tours.push(newTour);
    tourController.saveTour(tours);
    res.status(201).json(newTour);
}
);

module.exports = router;