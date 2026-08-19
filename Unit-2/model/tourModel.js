const fs = require('fs')
const path = require('path')
const toursFilePath = path.join(__dirname, '../data/tour.json');

const getAll = ()=> {
    const tourData = fs.readFileSync(toursFilePath, 'utf-8');
    return JSON.parse(tourData);
}

const getById = (id)=> {
    const tours = getAll();
    return tours.find(tour => tour.id === id);
}

module.exports = {
    getAll,
    getById
}
