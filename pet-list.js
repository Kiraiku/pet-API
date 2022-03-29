
//1.0 GET method implementation.
async function fetchPets() {
    try {
    const response = await fetch('http://localhost:3000/pets',);

    if(!response.ok) {
        throw new Error(`Failed to fetch pets: ${response.status}`)
    }

    return response.json();
} catch(e) {
    console.log(e);
}
}

function listsPets(petContainerElementId) {
    const petContainerElement = document.getElementById(petContainerElementId);

    if(!petContainerElement) {
       return; 
    }


    fetchPets()
    .then(pets => {})
    .catch(e => {
        console.log(e);
    })
}

function petElement(pet) {
    const 
}