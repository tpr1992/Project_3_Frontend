
log()

let usernames = document.querySelector('.usernames').querySelector('ul')
let userCard = document.querySelector('.user-card')
let butt = document.querySelector('.btn')
let mainTitle = document.querySelector('.main_title')
let scoreBoard = document.querySelector('.scoreboard')
let mainTextArea = document.querySelector('.main-text-area')


butt.addEventListener('click', event => {
  if (carCard.innerHTML.length === 0) {
    // createCarCard(car)
  }
  if (userCard.innerHTML.length > 0) {
    // fetch users
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then((users) => {
      mainTitle.innerHTML = "Choose Your Player"
      users.forEach(user => {
        // console.log(user)
        userCard.innerHTML += createUserList(user)

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
      <th scope="col">#</th>
      <th scope="col">User Name</th>
      <th scope="col">User id</th>
      <th scope="col">Wins</th>
    </tr>
  </thead>
  <tbody>
    <tr id="table-rows">

    </tr>
  </tbody>
</table>`
}

const createTableRow =(record) => {
  return  `
  <th scope="row">${record.id}</th>
  <td>${record.user.name}
  <td>${record.user_id}</td>
  <td>${record.wins}</td>`
}
// let tableRow = document.getElementById('table-row')

let recordsButt = document.querySelector('#records-butt')
recordsButt.addEventListener('click', event => {
  mainTitle.innerHTML = "High Scores"
  fetch("http://localhost:3000/records")
  .then(res => res.json())
  .then((allRecords) => {
    // scoreBoard.innerHTML = createTable()
    mainTextArea.innerHTML = createTable()
    allRecords.forEach(record => {
      if (mainTextArea.innerHTML.length > 0 ) {
        // if mainTextArea doesn;t have table already, add rows
          mainTextArea.innerHTML += createTableRow(record)
      }
      // tableRow.innerHTML += createTableRow(record)
    })
  })
})

userCard.addEventListener('click', (event) => {

  if (event.target.tagName === "IMG") {
    console.log('hello')
  }
})


const createUserList = (user) => {
  return `<div class="card-group">
  <div class="card">
  <img id = "image" src="${user.img_url}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${user.name}</h5>
  <ul>
  <li>Tagline: ${user.tagline}</li>
  <li>Balance: ${user.money}</li>
  </ul>
  </div>
  </div>`
}
