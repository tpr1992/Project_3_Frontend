let car1;

function preload(){
  OPPONENTPOSITION = 0
  PLAYERPOSITION = 0
  TESTSPEED = 1.5
  OPPPONENTSTESTSPEED = 1.5
}


function setup() {
    createCanvas(windowWidth, 408);
    backGround = loadImage('https://i.imgur.com/DXXpRi1.png')
    car1 = loadImage('https://images.vexels.com/media/users/3/139450/isolated/preview/ace6caf91a5498b7ba70a50195566614-race-car-speed-racing-by-vexels.png')
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
  })
})




function updateRecords(id, win){
  fetch(`http://localhost:3000/records/${id}`, {
  method: 'PATCH',
  headers: {
  "Content-Type": "application/json"
},
  body: JSON.stringify({wins: win})
})
}

function getRecords(id) {
  return fetch(`http://localhost:3000/records/${id}`)
    .then(res => res.json())
}

// 
// OPPONENTPOSITION = 0
// PLAYERPOSITION = 0


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
    PLAYERPOSITION += 17
  }
  else if (horsepower >= 200 && horsepower < 350) {
    PLAYERPOSITION += 28
  }
  else if (horsepower >= 350 && horsepower < 500) {
    PLAYERPOSITION += 35
  }
  else if (horsepower >= 500) {
    PLAYERPOSITION += 50
  }
  else if (horsepower >= 700) {
    PLAYERPOSITION += 70
  }
}


function draw() {
    background(backGround);
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    // text("use arrow keys, or SPACE to stop",
    // width/2, height*0.67);
    image(car1, OPPONENTPOSITION, 215, car1.width/6, car1.height/6)
    OPPONENTPOSITION += 10
    image(car2, PLAYERPOSITION, 270, car2.width/6, car2.height/6)
    // drawWords(width * 0.5)
    if (OPPONENTPOSITION > window.innerWidth){
      textSize(75)
      textAlign(CENTER, CENTER)
      stroke('#222222');
      strokeWeight(4);
      text("YOU LOST!",windowWidth / 2, 200)
      noLoop()
      }
    else if (PLAYERPOSITION > window.innerWidth) {
      textSize(75)
      textAlign(CENTER, CENTER)
      stroke('#222222');
      strokeWeight(4);
      text("YOU WON!", windowWidth / 2, 200)

      getRecords(selectedId).then(record => {
        console.log('FUCKME', record);
        console.log('INCREASE')
        record.wins++;
        updateRecords(selectedId, record.wins)

      }); // returns a record object
              noLoop()
      }
}


function resetValues(){
  OPPONENTPOSITION = 0
  PLAYERPOSITION = 0
  TESTSPEED = 1.5
  OPPPONENTSTESTSPEED = 1.5
}
