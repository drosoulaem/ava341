class Dinosaur {
  constructor() {
    this.r = 80
    this.x = this.r;
    this.y = height - this.r -650;
    this.vy = 0;
    this.gravity = 0.6;
    this.image = imagehero 
  }

  jump() {
    this.elev = height - this.y - this.r
    if (this.elev == 0) {
      this.vy = - 15;
    }
  }
  
  hits(obs) {
    return collideRectRect(this.x,this.y,this.r,this.r,obs.x,obs.y,obs.w,obs.h)
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity
    this.y = constrain(this.y, 0, height - this.r)
  }

  show() {
    //rect(this.x, this.y, this.r, this.r);
    image(this.image, this.x,this.y, this.w, this.h);
  }
}