console.log('hello world')
let circ
let c = {r: 150, g: 20, b: 170}

function setup() {
  createCanvas(windowWidth, windowHeight)
  fill (200, 150, 150)
  circ = new Circle(windowWidth/2, windowHeight/2)
}

function draw() {
  background(255)
  ellipse(50, 50, 50)
  circ.initialize()
  allBlueCircles()
}
