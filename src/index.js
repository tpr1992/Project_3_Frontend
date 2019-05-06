
log()

let usernames = document.querySelector('.usernames').querySelector('ul')
let userCard = document.querySelector('.user-card')

let butt = document.querySelector('.btn')

butt.addEventListener('click', event => {
  if (carCard.innerHTML.length === 0) {
    // createCarCard(car)
  }
  if (userCard.innerHTML.length > 0) {
    // fetch users
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then((users) => {
      users.forEach(user => {
        // console.log(user)
        userCard.innerHTML += createUserList(user)
      })
    })
  }
})

const renderPlayer = () =>{

}



let recordsButt = document.querySelector('#records-butt')
recordsButt.addEventListener('click', event => {
  
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
