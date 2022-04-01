const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const { v4: uuidv4 } = require('uuid');



const bodyParser = require('body-parser');

const cors = require('cors');



// const PORT = 3000;

//Where we add the pets
const importData = require('./data.json');

app.use(cors());

//Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/pets', (req, res) => {
    res.json(importData);
    res.sendFile(path + '/client/index.html');
});

app.post('/pet', (req, res) => {
    const pet = req.body;

    const petId = uuidv4();

    const petWithId = { ...pet, id: petId}

    //Output pet to console for debugging
    // console.log(pet);
    importData.push(petWithId);

    res.send('Pet is added to the database');
});

app.listen(port, () => console.log(`Hello world app listening on port:${port}!`));




// Delete Pet from List
app.delete ('/pets/:id', (req, res) => {
       const { id } = req.params;

       const deleted = importData.find(pet => pet.id == id);
       if(deleted) {
        importData = importData.filter(pet => pet.id !== id);

        res.send('Pet deleted from listf successfully')
       } else {
           res.status(404).json({ message: "Channel you are looking for does not exist"});
       }
   
})