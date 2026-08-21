const tourModel = require('../model/tourModel')

// Get all tours
const getAllTours = (req, res) => {
    const tours = tourModel.getAll();
    res.json(tours);
}

// Get a single tour by ID
const getTourById = (req, res) => {
    const tour = tourModel.getById(req.params.id);
    if (!tour) {
        return res.status(404).json({ message: 'Tour not found' });
    }
    res.json(tour);
}

const getTourByQuery = (req, res) => {
    const query = req.query.name;
    const tours = tourModel.getByquery(query);
    res.json(tours);
}


const saveTour = (req, res) => {
    const tour = req.body;
    tourModel.saveTour(tour);
    res.status(201).send.json({ message: 'Tour saved successfully' });
}
module.exports = {
    getAllTours,
    getTourById,
    getTourByquery,
    saveTour
};