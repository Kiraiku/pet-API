const PORT = process.env.PORT || 3000;

const { v4: uuidv4 } = require('uuid');

const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();

// const PORT = 3000;

//Where we add the pets
let pets = [];

app.use(cors());

//Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json(pets);
});

app.post('/pet', (req, res) => {
    const pet = req.body;

    const petId = uuidv4();

    const petWithId = { ...pet, id: petId}

    //Output pet to console for debugging
    // console.log(pet);
    pets.push(petWithId);

    res.send('Pet is added to the database');
});

app.listen(PORT, () => console.log(`Hello world app listening on port:${PORT}!`));




// Delete Pet from List
app.delete ('/pets/:id', (req, res) => {
       const { id } = req.params;

       const deleted = pets.find(pet => pet.id == id)
       if(deleted) {
        pets = pets.filter(pet => pet.id !== id);

        res.send('Pet deleted from listf successfully')
       } else {
           res.status(404).json({ message: "Channel you are looking for does not exist"})
       }
   
})