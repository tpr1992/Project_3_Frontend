
log()

let usernames = document.querySelector('.usernames').querySelector('ul')
let userCard = document.querySelector('.user-card')
let butt = document.querySelector('.btn')
let mainTitle = document.querySelector('.main_title')
let scoreBoard = document.querySelector('.scoreboard')
let mainTextArea = document.querySelector('.main-text-area')


butt.addEventListener('click', event => {
  if (mainTextArea.innerHTML.length === 0) {
    // createCarCard(car)

  }
  if (mainTextArea.innerHTML.length > 0) {
    // fetch users
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then((users) => {
      mainTitle.innerHTML = "Choose Your Player"
      mainTextArea.innerHTML = ""
      users.forEach(user => {
        mainTextArea.innerHTML += createUserList2(user)
        const showUserProfile = (user) => {
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
          <div class="card-body">
          <a href="#" class="btn btn-primary" style="background-color: black; border-color: black" >Start Race</a>
          <a id="btn" href="#" class="btn btn-primary" style="background-color: black; border-color: black">Customize</a>
          </div>
          </div>
          </div>
          </div>`
        }

        // Select player
        mainTextArea.addEventListener('click', (event) => {
          if (event.target.tagName === "IMG") {
            mainTextArea.innerHTML = ""
            mainTextArea.innerHTML = showUserProfile(user)
            console.log('line 62')

          }





        // if (event.target.tagName === "IMG") {
        //   mainTextArea.innerHTML = ""
        //   mainTextArea.innerHTML = showUserProfile(user)
        //   console.log('hello')
        //
        // }



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


      })
    })
  }
})

const renderPlayer = () =>{

}
let tableRow = document.getElementById('table-row')

// Tables
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

let recordsButt = document.querySelector('#records-butt')


recordsButt.addEventListener('click', event => {
  // if (event.target.id === 'records-butt') {}
  mainTitle.innerHTML = "High Scores"
  fetch("http://localhost:3000/records")
  .then(res => res.json())
  .then((allRecords) => {
    mainTextArea.innerHTML = createTable()
    let tableBody = document.querySelector('#table-body')
    allRecords.forEach(record => {
      // if (mainTextArea.innerText.length === 0 ) {
      // if mainTextArea doesn;t have table already, add rows
      let userId = record.user_id
      // tableBody.innerHTML += createTableRow(record)
      fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then((users) => {
        users.forEach(user => {
          if (userId === user.id) {
            tableBody.innerHTML += `<tr>
            <td>${user.name}</td>
            <td>${record.id}</td>
            <td>${record.wins}</td>
            </tr>`
          }
        })
      })
    })
  })
})

// mainTextArea.addEventListener('click', (event) => {
//
//   if (event.target.tagName === "IMG") {
//     console.log('fkdfjkdfkjdfkj')
//     showUserProfile()
//   }
// })


// const createUserList = (user) => {
//   return `<div class="card-group">
//   <div class="card">
//   <img id = "image" src="${user.img_url}" class="card-img-top" alt="...">
//   <div class="card-body">
//   <h5 class="card-title">${user.name}</h5>
//   <ul>
//   <li>Tagline: ${user.tagline}</li>
//   <li>Balance: ${user.money}</li>
//   </ul>
//   </div>
//   </div>`
// }

const createUserList2 = (user) => {
  return `
  <div align="center">
  <div class="card-deck" data-set="${user.id}">
  <div class="card">
  <div class="w-25 p-3">
    <img class="card-img-top" src="${user.img_url}"  alt="Card image cap"> </div>
    <div class="card-body">
      <h5 class="card-title">${user.name}</h5>
      <p class="card-text">${user.tagline}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  </div>`
}

// const carouselDiv = () => { return
