let obstacles;
let randint;
let score;
let lost;
let next;
//let spread;
//let slider;

function setup() {
  createCanvas(600, 450);
  textSize(24)
 // slider = createSlider(10, 20, 12, 1)
 // slider.position(width - slider.width, 0)
 bg = loadImage('background2.jpg'); 
 var patch
  $.get('game.pd', function(patchStr){
  patch= Pd.loadPatch(patchStr);
 })
  resetSketch()
}
function preload (){
  //imageslime=loadImage('SLIME123.png');
  imageslime=loadImage('slime2.png');
  imagehero=loadImage('myheroo.png')
  
}

function keyPressed() {
  if (key == ' ') {
    dinosaur.jump();
    Pd.start();
    if (lost) {
      resetSketch();
    }
  }
  if(keyIsDown(77)){
    Pd.send('music',[]);
  }

}

//function touchStarted() {
//    if (touchStarted) {
//     dinosaur.jump();
//     if (lost) {
//       resetSketch();
//     }
//   }
// }


function resetSketch() {
  console.log("Restarting game")
  score = 0;
  lost = false;
  obstacles = []
  next = 0;
  dinosaur = new Dinosaur();
  new Obstacle();
  randint = int(random(50, 150));
  loop();
}

function draw() {
  //background(bg)
  background(255,204,255)
  text(score, 5, 24)
  next += 1
  if (next == randint) {
    obstacles.push(new Obstacle())
    score += 1
    next = 0
    //spread = slider.value()
    randint = int(random(40, width/5))
  }
  for (let o of obstacles) {
    if (o.x < 0) {
      if (obstacles.length > 3) {
        obstacles.shift()
      }
    }
    o.move();
    o.show();
    if (dinosaur.hits(o)) {
      console.log("Game Over!")
      lost = true;
      noLoop();
    }
  }

  dinosaur.show();
  dinosaur.move();
}