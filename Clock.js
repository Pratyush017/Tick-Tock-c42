class Clock{
    constructor(x,y,width,height) {
       
        this.image = loadImage("clock.png");
      }
      display(){
        push();
        imageMode(CENTER);
        image(this.image, 0, 0, 493,493);
        pop();
      }
    };
  