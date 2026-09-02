const express = require("express"); // Import Express

const app = express(); // Create Express application


const packages = require("./data/tour.json"); // Import packages data


app.get("/", (req, res) => { // Handle GET request to /
    res.send("Hello World"); // Send response
});

app.get("/packages",(req,res)=>{
    res.json(packages);
});

app.get("/packages/:id",(req,res)=>{
    const packageId = parseInt(req.params.id);
    const selectedPackage = packages.find(item => item.id === packageId);
    res.json(selectedPackage);
});

app.listen(3000, () => { // Start server on port 3000
    console.log("Server is running on port 3000"); // Show confirmation
});