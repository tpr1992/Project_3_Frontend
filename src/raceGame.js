
let car1;

function preload(){
  OPPONENTPOSITION = 0
  PLAYERPOSITION = 0
  TESTSPEED = 1.5
  OPPONENTTESTSPEED = 1.5
  DRAW = 0
}

function setup() {
  createCanvas(windowWidth, 408);
  backGround = loadImage('https://i.imgur.com/DXXpRi1.png')
  car1 = loadImage('https://images.vexels.com/media/users/3/139450/isolated/preview/ace6caf91a5498b7ba70a50195566614-race-car-speed-racing-by-vexels.png')
  console.log(car1);
  car2 = loadImage('https://images.vexels.com/media/users/3/139450/isolated/preview/ace6caf91a5498b7ba70a50195566614-race-car-speed-racing-by-vexels.png')
  DRAW += 1
  noLoop()
}

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

document.addEventListener("keydown", function(e) {
  // debugger
  e = e || window.event;
  if (e.keyCode == "39") {
    // moveCar(300)
    // test algo
    moveCar('test')
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
  else if (horsepower === 'test') {
    console.log('width', PLAYERPOSITION, window.innerWidth/2)
    if (PLAYERPOSITION > (window.innerWidth / 2)) {
      console.log('window', window.innerWidth)
      TESTSPEED -= 2.5;
    }
    else if (PLAYERPOSITION > 0 ) {
      console.log('A;DSKFJASL;DFJ')
      TESTSPEED *= 1.5;
    }
    PLAYERPOSITION += TESTSPEED
  }
}


function draw() {
  console.log("drawwwwwwww")
  // if (true) {
  background(backGround);
  fill(255);
  noStroke();

  textAlign(CENTER, CENTER);

  image(car1, OPPONENTPOSITION, 215, car1.width/6, car1.height/6)

  OPPONENTTESTSPEED *= 1.03
  OPPONENTPOSITION += OPPONENTTESTSPEED
  image(car2, PLAYERPOSITION, 270, car2.width/6, car2.height/6)
  // drawWords(width * 0.5)
  if (OPPONENTPOSITION > window.innerWidth){
    textSize(75)
    textAlign(CENTER, CENTER)
    stroke('#222222');
    strokeWeight(4);
    text("YOU LOST!",windowWidth / 2, 150)
    text("click again to restart", windowWidth/2.7, 225 )
    noLoop()
    //noLoop()
    // resetGame()

  }
  else if (PLAYERPOSITION > window.innerWidth) {
    textSize(75)
    textAlign(CENTER, CENTER)
    stroke('#222222');
    strokeWeight(4);
    text("YOU WON!", windowWidth / 2, 200)


    // -------------------------
    getRecords(selectedId).then(record => {
      console.log('FUCKME', record);
      console.log('INCREASE')
      record.wins++;
      updateRecords(selectedId, record.wins)
    })
      // -----------------------------------

    noLoop()
    resetValues()
  }

}

function mousePressed(event) {
  if (event.target.tagName === "CANVAS") {
    console.log(event)
    OPPONENTPOSITION = 0
    PLAYERPOSITION = 0
    TESTSPEED = 1.5
    OPPONENTTESTSPEED = 1.5
    noLoop()
    loop()

  }}

  function resetValues(){
    OPPONENTPOSITION = 0
    PLAYERPOSITION = 0
    TESTSPEED = 1.5
    OPPONENTTESTSPEED = 1.5
  }
