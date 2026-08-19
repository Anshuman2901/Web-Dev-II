const tourModel = require('../model/tourModel');

// get all tours
const getAllTours = (req, res) => {
    const tours = tourModel.getAll();
    res.json(tours);
};

module.exports = {
    getAllTours
};
