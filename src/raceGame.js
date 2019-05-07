function setup(){
  createCanvas(windowWidth, 408);
  backGround = loadImage('https://i.imgur.com/DXXpRi1.png')
  car = loadImage('https://images.vexels.com/media/users/3/139450/isolated/preview/ace6caf91a5498b7ba70a50195566614-race-car-speed-racing-by-vexels.png')

  car2 = loadImage('https://images.vexels.com/media/users/3/139450/isolated/preview/ace6caf91a5498b7ba70a50195566614-race-car-speed-racing-by-vexels.png')
}

// fetch('http://localhost:3000/cars')
// .then(res => res.json())
// .then((allCars) => {
//   allCars.forEach((car) => {
//     let car2 = loadImage(car.car_img)
//   })
// })



SPEED = 0
PLAYERSPEED = 0
document.addEventListener("keyup", (e) => {
  PLAYERSPEED += 50
})









function draw() {
  if (true) {
    background(backGround);
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    text("use arrow keys, or SPACE to stop",
      width/2, height*0.67);
    image(car, SPEED, 215, car.width/6, car.height/6)
    SPEED += 10
    image(car2, PLAYERSPEED, 270, car.width/6, car.height/6)
  }
}
