// -------------------------------Main Variables------------------------------- //
let usernames = document.querySelector('.usernames').querySelector('ul')
let userCard = document.querySelector('.user-card')
let startGameBtn = document.querySelector('.btn')
let mainTitle = document.querySelector('.main_title')
let scoreBoard = document.querySelector('.scoreboard')
let mainTextArea = document.querySelector('.main-text-area')
let tableRow = document.getElementById('table-row')
let recordsBtn = document.querySelector('#records-butt')


// ------------------------------Main Functions-------------------------------- //

// Click on Start Game
startGameBtn.addEventListener('click', event => {
  if (mainTextArea.innerHTML.length === 0) {
  }
  if (mainTextArea.innerHTML.length > 0) {

    // Fetch users
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then((users) => {
      // Page heading
      mainTitle.innerHTML = "Choose Your Player"
      mainTextArea.innerHTML = ""
      users.forEach(user => {
        // Fill main text area w/ list of users
        mainTextArea.innerHTML += createUserList(user)
        // Create HTML for specific user profiles
        const createUserProfile = (user) => {
          return `
          <div align="center">
          <div class="col-xl">
          <div class="card" style="width: 28rem;">
          <img class="card-img-top" src="https://files.gamebanana.com/img/ico/sprays/mariokart.png" alt="Card image cap">
          <div class="card-body">
          <h5 class="card-title">${user.name}</h5>
          <p class="card-text">${user.tagline}</p>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">$${user.money}</li>
          <li class="list-group-item">HP</li>
          <li class="list-group-item">Torque</li>
          <li class="list-group-item">Weight</li>
          </ul>
          <div id='start-race'>
          <div class="card-body" data-id="${user.id}">
          <a href="#" class="btn btn-primary" style="background-color: black; border-color: black" >Start Race</a>
          <a id="customize-btn" href="#" class="btn btn-primary" style="background-color: black; border-color: black">Customize</a>
          </div>
          </div>
          </div>
          </div>
          </div>`
        }

        // Select player by button
        mainTextArea.addEventListener('click', (event) => {
          if (event.target.tagName === "A" && event.target.dataset.set == `${user.id}`) {
            mainTextArea.innerHTML = ""
            mainTextArea.innerHTML = createUserProfile(user)
            let customizeBtn = document.querySelector("#customize-btn")
            customizeBtn.addEventListener('click', (event) => {
              console.log('jfdjkfdkj')
            })
            let startBtn = document.querySelector(`#start-race`)
            startBtn.addEventListener('click', event => {
              mainTextArea.innerHTML = ""
              console.log('start race')
              // loop()
              if (event.target.innerText != 'Start Race') {
                noLoop()
              }
              else {
                console.log('hi')
                loop()
                // setTimeout(function () {
                //   remove()
                // }, 2000);
              }
              // redraw()
            })
          }
        })
        // Select player by photo
        // mainTextArea.addEventListener('click', (event) => {
        //   if (event.target.tagName === "IMG" && event.target.dataset.set == `${user.id}`) {
        //     mainTextArea.innerHTML = ""
        //     mainTextArea.innerHTML = createUserProfile(user)
        //     let startBtn = document.getElementById(`start-race-${user.id}`)
        //     startBtn.addEventListener('click', event => {
        //       mainTextArea.innerHTML = ""
        //       console.log('start race')
        //       // loop()
        //       if (event.target.innerText != 'Start Race') {
        //         noloop()
        //       }
        //       else {
        //         console.log('hi')
        //         loop()
        //         // setTimeout(function () {
        //         //   remove()
        //         // }, 2000);
        //       }
        //       redraw()
        //       debugger;
        //       // startRace(user);
        //     })
        //   }
        // })
      })
    })
  }
})

// Create table for records list
const createTable = () => {
  return`<table class="table table-striped table-dark">
  <thead>
  <tr>
  <th scope="col">User Name</th>
  <th scope="col">User id</th>
  <th scope="col">Wins</th>
  </tr>
  </thead>
  <tbody id="table-body">
  </tbody>
  </table>`
}

// Add event listener to Records button
recordsBtn.addEventListener('click', event => {
  mainTitle.innerHTML = "High Scores"

})

// Create HTML for users list
const createUserList = (user) => {
  return `
  <div align="center">
  <div class="card-deck" data-set="${user.id}">
  <div class="card">
  <div class="w-25 p-3">
  <img data-set="${user.id}" class="card-img-top" src="${user.img_url}"  alt="Card image cap"> </div>  <div class="card-body">
  <h5 class="card-title">${user.name}</h5>
  <p class="card-text">${user.tagline}</p>

  <div class="select-user-btn" id="select-user-btn">
  <a href="#" class="btn btn-primary btn-sm active" style="background-color: black; border-color: black" role="button" aria-pressed="true" data-set="${user.id}">Play as ${user.name}</a>
  </div>
  <p class="card-text"><small class="text-muted"></small></p>
  </div>
  </div>
  </div>`
}
