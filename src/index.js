
log()

let usernames = document.querySelector('.usernames').querySelector('ul')

let butt = document.querySelector('.btn')
butt.addEventListener('click', event => {
  if (carCard.innerHTML.length === 0) {
    // createCarCard(car)
  }
})

let recordsButt = document.querySelector('#records-butt')
recordsButt.addEventListener('click', event => {
	 console.log('bye')
})



// fetch users
fetch("http://localhost:3000/users")
.then(res => res.json())
.then((users) => {
  users.forEach(user => {
    // console.log(user)
    createUserList(user)
  })
})

const createUserList = (user) => {
  return usernames.innerHTML += `<li>${user.name}</li>
  <img src="${user.img_url}"></img>`
  }
