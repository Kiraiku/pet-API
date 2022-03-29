
//1.0 GET method implementation.
const app = document.getElementById('app');

function getPet() {
    fetch('http://localhost:3000/pets')
    .then(res => res.json())
    .then(data => {
        app.innerHTML = `${data.pets}`;
    })
}

getPet(app);