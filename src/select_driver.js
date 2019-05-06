

function log() {
  console.log('hit here')
}
log()

let carCard = document.querySelector('.car-options')

let images = document.querySelectorAll('#image')

fetch("http://localhost:3000/cars")
.then(res => res.json())
.then((allCars) => {
  allCars.forEach(car => {
    // carCard.innerHTML += createCarCard(car)
  })
})

carCard.addEventListener('click', (event) => {

  if (event.target.tagName === "IMG") {
    console.log('hello')
  }
})





const createCarCard = (car) => {
  return `<div class="card-group">
  <div class="card">
  <img id = "image" src="${car.car_img}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${car.name}</h5>
  <ul>
  <li>
  Horsepower: ${car.horsepower}
  </li>
  <li>
  Torque: ${car.torque}
  </li>
  <li>
  Weight: ${car.weight}
  </li>
  </ul>
  </div>
  </div>`
}
