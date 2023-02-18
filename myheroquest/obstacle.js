class Obstacle
 {
 
  constructor() {
    this.h = 60
    this.w = 60
    this.x = width
    this.y = height - this.h +10
    this.image = loadImage('SLIME123.png');
  }
  
  move() {
    this.x -= 6.5
  }
  
  show() {
    // rect(this.x, this.y, this.w, this.h);
     image(this.image, this.x,this.y, this.w, this.h);
  }
}