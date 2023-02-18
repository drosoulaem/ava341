class Coin{

    constructor() {
        this.h = 100
        this.w = 100
        this.x = width
        this.y = height - this.h 
        this.image = loadImage('Coin.png');
    }
   
    move() {
        this.x -= 15
      }

    show() {
        
         image(this.image, this.x,this.y, this.w, this.h);
      }
}