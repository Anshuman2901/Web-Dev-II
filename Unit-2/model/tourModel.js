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

const getByQuery = (query)=> {
    const tours = getAll();
    return tours.filter(tour => tour.name.includes(query));
}

const saveTour = (tour)=> {
    const tours = getAll();
    tours.push(tour);
    fs.writeFileSync(toursFilePath, JSON.stringify(tours));
}

const updateTour = (id, updatedTour) => {
    const tours = getAll();
    const index = tours.findIndex(tour => tour.id === id);
    if (index !== -1) {
        tours[index] = { ...tours[index], ...updatedTour };
        fs.writeFileSync(toursFilePath, JSON.stringify(tours));
    }
}
    

module.exports = {
    getAll,
    getById,
    getByQuery,
    saveTour,
    updateTour
}
