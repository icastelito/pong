/* Características da forma Circle*/
let xPosiBola  = 300, yPosiBola  = 200, diaBola = 20;

let xVeloBola = 5;


function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(160);
    circle(xPosiBola, yPosiBola, diaBola);
    xPosiBola = xPosiBola + xVeloBola;
  }