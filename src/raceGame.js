
let car1;

function setup() {
    createCanvas(windowWidth, 408);
    backGround = loadImage('https://i.imgur.com/DXXpRi1.png')
    car1 = loadImage('https://images.vexels.com/media/users/3/139450/isolated/preview/ace6caf91a5498b7ba70a50195566614-race-car-speed-racing-by-vexels.png')
    console.log(car1);
    car2 = loadImage('https://images.vexels.com/media/users/3/139450/isolated/preview/ace6caf91a5498b7ba70a50195566614-race-car-speed-racing-by-vexels.png')
    noLoop()
  }





console.log('car1', car1)

fetch("http://localhost:3000/cars")
.then(res => res.json())
.then((allCars) => {
  allCars.forEach(car => {
    let horsepower = `${car.horsepower}`
    let torque = `${car.torque}`
    console.log(`Horsepower: ${horsepower}`)
    console.log(`Torque: ${torque}`)
    // debugger
    // carCard.innerHTML += createCarCard(car)
  })
})


SPEED = 0
PLAYERSPEED = 0


document.addEventListener("keydown", function(e) {
  e = e || window.event;
  if (e.keyCode == "39") {
    moveCar(700)
    console.log('right')
  }
  else if (e.keyCode == "40") {
    console.log("down");
  }
});

// Set power of car
const moveCar = (horsepower) => {
  if (horsepower < 200) {
    PLAYERSPEED += 17
  }
  else if (horsepower >= 200 && horsepower < 350) {
    PLAYERSPEED += 28
  }
  else if (horsepower >= 350 && horsepower < 500) {
    PLAYERSPEED += 35
  }
  else if (horsepower >= 500) {
    PLAYERSPEED += 50
  }
  else if (horsepower >= 700) {
    PLAYERSPEED += 70
  }
}


function draw() {
  // if (true) {
    background(backGround);
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    // text("use arrow keys, or SPACE to stop",
    // width/2, height*0.67);
    image(car1, SPEED, 215, car1.width/6, car1.height/6)
    SPEED += 10
    image(car2, PLAYERSPEED, 270, car2.width/6, car2.height/6)
    // drawWords(width * 0.5)
    if (SPEED > window.innerWidth){
      textSize(75)
      textAlign(CENTER, CENTER)
      stroke('#222222');
      strokeWeight(4);
      text("YOU LOST!",windowWidth / 2, 200)
      noLoop()
      }
    else if (PLAYERSPEED > window.innerWidth) {
      textSize(75)
      textAlign(CENTER, CENTER)
      stroke('#222222');
      strokeWeight(4);
      text("YOU WON!", windowWidth / 2, 200)
      fetch("http://localhost:3000/records")
      .then(res => res.json())
      .then((allRecords) => {
        allRecords.forEach(record => {
          console.log(record.user_id)
        })
     fetch(`http://localhost:3000/users`)
        .then(res => res.json())
        .then((users) => {
          users.forEach((user) => {
            debugger;
            if (user.id) {}
          })
        })
      })






      // fetch(`http://localhost:3000/records/`,{
        //   method: 'PATCH',
        //   headers: {
          //     'Content-Type': 'applica'
          //   },
          //   body: JSON.stringify({
            //
            //   })
            // })

      noLoop()
      }
}

// function win(){
//   if (SPEED > window.innerWidth){
//     textSize(50)
//     text("YOU LOST!",800,200)
//     }
//   else if (PLAYERSPEED > window.innerWidth) {
//     textSize(50)
//     text("YOU WON!", 800, 200)
//     }
// }


// function drawWords(x){
//   fill(0);
//   text("YOU WON", 200,100)
// }
// function endGame(){
//   console.log("hit here 1", PLAYERSPEED, window.innerWidth)
//   if (SPEED > window.innerWidth){
//     alert('YOU LOST!')
//   }
//   if (PLAYERSPEED >= window.innerWidth){
//     console.log("hit here 2", window.innerWidth)
//     alert("YOU WON!")
//   }
// }
