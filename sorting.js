let color = {r: 227, g: 30, b: 82}
let pandian = new Circle(window.innerWidth - 500, window.innerHeight - 100, color)

let blueCircles = []
  blueCircles[0] = new Circle((window.innerWidth/100) * 13, (window.innerHeight/10) * 6.2, color);
  blueCircles[1] = new Circle(blueCircles[0].x + window.innerWidth/17, blueCircles[0].y + window.innerHeight/9, color);
  blueCircles[2] = new Circle(blueCircles[0].x + window.innerWidth/7.6, blueCircles[0].y + window.innerHeight/6, color);
  blueCircles[3] = new Circle(blueCircles[0].x + window.innerWidth/4.7, blueCircles[0].y + window.innerHeight/5.4, color);

function allBlueCircles() {
  for (i = 0; i < blueCircles.length; i ++) {
    blueCircles[i].initialize()
  }
}
