const express = require("express");


const  app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello world, from express');
});

app.listen(PORT, () => console.log(`Hello world app listening on port:${PORT}!`))