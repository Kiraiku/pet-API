// const port = process.env.PORT || 3000;

fetch('http://localhost:3000/pets').then((data) => {
    // console.log(data);
    return data.json();
}).then((completedata) => {
    // console.log(completedata[2].name;
    let data1 = "";
    completedata.map((values) => {
        data1+= `    <div class="card">
        <h1 class="title">${values.name} </h1>
        <img class="image" src="images/images3.jpg" alt="img">
        <p>Species: ${values.species}</p>
        <p class="favFood">Favorite food <br>${values.favFood}</p>
        <p class="birthYear">Birth Year <br>${values.birthYear}</p>


        <a class="btn"  onClick="onEdit()">Edit</a>
        <a clas="btn" id="del" type="button" onClick ="onDelete()" >Delete</a>
    </div>
`
    });
    document.getElementById('cards').innerHTML = data1;

    
}).catch((err) => {
    console.log(err);
})

//Delete A Pet: 
fetch('http://localhost:3000/pets/:id', {
  method : "DELETE", }).then((response) => response.json())
  .then((data) => console.log(data));