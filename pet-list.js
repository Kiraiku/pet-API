
//1.0 GET method implementation.
// async function fetchPets() {
//     try {
//     const response = await fetch('http://localhost:3000/pets',);

//     if(!response.ok) {
//         throw new Error(`Failed to fetch pets: ${response.status}`)
//     }

//     return response.json();
// } catch(e) {
//     console.log(e);
// }
// }

// function listsPets(petContainerElementId) {
//     const petContainerElement = document.getElementById(petContainerElementId);

//     if(!petContainerElement) {
//        return; 
//     }


//     fetchPets()
//     .then(pets => {})
//     .catch(e => {
//         console.log(e);
//     })
// }

// function petElement(pet) {
//     const 
// }

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
    </div>
`
    });
    document.getElementById('cards').innerHTML = data1;

    
}).catch((err) => {
    console.log(err);
})