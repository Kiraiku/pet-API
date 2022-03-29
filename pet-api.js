const express = require('express')

const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();
const PORT = 3000;

//Where we add the pets
let pets = [{
    "entry": 1,
    "title": "Bosco",
    "type": "Dog",
    "attendance": "Yearly",
    "sex": "male",
    "age": 2,
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