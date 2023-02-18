let obstacles;
let randint;
let score;
let lost;
let next;
let song;

//coinsscore;

let message = false;
let value=0;


function setup() {
  createCanvas(600, 450);
  textSize(24)

 // bg = loadImage('background.png');
  song = loadSound('obit.wav');
 
 var patch
  $.get('game.pd', function(patchStr){
  patch= Pd.loadPatch(patchStr);
 })
 
  resetSketch()
}
function preload (){
  
  imageslime=loadImage('slime2.png');
  imagehero=loadImage('myheroo.png')
 // imagecoin=loadImage('Coin.png')
  value=0
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
   song.play();
  }
  if(keyIsDown(78)){
    Pd.stop();
    song.stop();
  }
  if(keyIsDown(82)){
  resetSketch();
    
  }
  
}


function touchStarted() {
    if (value==0) {
     dinosaur.jump();
     
    }
     if (lost) {
      value=1
      resetSketch();
      
     }
     
   
}
 

function resetSketch() {
  console.log("Restarting game")
  score = 0;
  //coinsscore=0;
  value=0
  lost = false;
  obstacles = []
  next = 0;
// new Coin();
  dinosaur = new Dinosaur();
  new Obstacle();
  randint = int(random(50, 150));
  loop();
}

function draw() {
 // background(bg)

  background(255,204,255)
  text ('Score:', 08, 50)
  text(score,90, 51)
  //text(coinsscore,400,80)
 // text(highscore, 200,80)
  showMessages();
 next += 1
  if (next == randint) {
    obstacles.push(new Obstacle())
    score += 1
    next = 0
    
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
      value=1
      noLoop();
    }
  }

 

  dinosaur.show();
  dinosaur.move();

 
}

function showMessages()
		{
      textSize(27);
			if (message==false) 
			{
				text('Press space to jump or tap. ', 190, 50, 400 , 200);
				textSize(25);
				text('For sound press M or press N to close it.', 140, 10, 800, 200);
				text('Press R to restart or tap', 210, 90, 800, 200);
			}
			
}
	

