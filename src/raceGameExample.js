function setup(){
  createCanvas(500, 500);
}
NUMBER = 0
document.addEventListener("keyup", (e) => {
  NUMBER++
})








function draw() {
  if (false) {
    background(50);
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    text("use arrow keys, or SPACE to stop",
      width/2, height*0.67);
    circle(NUMBER, 30, 55)
  }
}
