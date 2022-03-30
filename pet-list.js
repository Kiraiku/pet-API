

fetch('http://localhost:3000/pets').then((data) => {
    // console.log(data);
    return data.json();
}).then((completedata) => {
    // console.log(completedata[2].name;
    let data1 = "";
    completedata.map((values) => {
        data1+= `    <div class="card">
        <h1 class="title">${values.name} </h1>
        <img class="image" src="images/puss1.jpg" alt="img">
        <p>Species: ${values.species}</p>
        <p class="favFood">Favorite food <br>${values.favFood}</p>
        <p class="birthYear">Birth Year <br>${values.birthYear}</p>


        <button class="btn" type="button" class="btn btn danger">Edit</button>
        <button clas="btn" id="del" type="button" class="btn btn danger">Delete</button>
    </div>
`
    });
    document.getElementById('cards').innerHTML = data1;

    
}).catch((err) => {
    console.log(err);
})