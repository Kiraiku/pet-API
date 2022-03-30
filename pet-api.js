const express = require('express')

const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();
const PORT = 3000;

//Where we add the pets
let pets = [{
    "name": "Pursloud",
    "species": "Cat",
    "favFood": "Dry Food",
    "birthYear": "2018",
    "photo": ""
}];

app.use(cors());

//Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post('/pet', (req, res) => {
    const pet = req.body;

    //Output pet to console for debugging
    console.log(pet);
    pets.push(pet);

    res.send('Pet is added to the database');
});

app.listen(PORT, () => console.log(`Hello world app listening on port:${PORT}!`));

app.get('/pets', (req, res) => {
    res.json(pets);
});