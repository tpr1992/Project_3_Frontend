
// let customizeCarButt = document.querySelector('#customize-car')
//

const showUserProfile = () => {
  return `
  <div align="center">
  <div class="col-xl">

  <div class="card" style="width: 28rem;">
  <img class="card-img-top" src="https://files.gamebanana.com/img/ico/sprays/mariokart.png" alt="Card image cap">
  <div class="card-body">
  <h5 class="card-title">User Name Goes Here</h5>
  <p class="card-text">Tagline lkdflkdsflkj</p>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">Horsepower</li>
  <li class="list-group-item">Torque</li>
  <li class="list-group-item">Weight</li>
  </ul>
  <div class="card-body">
  <a href="#" class="btn btn-primary" style="background-color: black; border-color: black" >Start Race</a>

  <a id="btn" href="#" class="btn btn-primary" style="background-color: black; border-color: black">Customize</a>
  </div>
  </div>
  </div>
  </div>`
}


const makeRaceTrack = () => {
  return `<img src="https://i.imgur.com/DXXpRi1.png"></img>`
}

// Select player
mainTextArea.addEventListener('click', (event) => {
  if (event.target.tagName === "IMG") {
    mainTextArea.innerHTML = ""
    mainTextArea.innerHTML = showUserProfile()

  }

// when you click customize
  // let customizeCarButton = document.querySelector('#customize-car')
  // customizeCarButton.addEventListener('click', event => {
  //   mainTextArea.innerHTML = ""
  // })
  // 
  // let startRaceButt = document.querySelector('#start-race')
  // startRaceButt.addEventListener('click', event => {
  //
  //   if (event.target.className === "btn btn-primary") {
  //     mainTextArea.innerHTML = ""
  //     mainTextArea.innerHTML = makeRaceTrack()
  //
  //     // setupRace()
  //   }
  // })


})
