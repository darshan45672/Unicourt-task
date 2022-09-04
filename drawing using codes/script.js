let colorlist = ['gold', 'yellow', 'turquoise', 'red','green', 'white']

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(1);
}

function draw() {
  noStroke()
  fill(random(colorlist));
  ellipse(mouseX, mouseY, 20, 20);
}