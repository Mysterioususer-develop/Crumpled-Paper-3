class Box {
    constructor(x, y, width, height) {
        var options = {
isStatic:true

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/trash.png");
        World.add(world, this.body);
      }
      display(){
        image(this.image,890,450,220,220);
          var pos =this.body.position;
          var angle=this.body.angle;
          push();
          rectMode(CENTER);
          translate(pos.x,pos.y);
          rotate(angle);
          
          fill(255,0,0)
          rect(0,0,this.width,this.height);
        pop();
      }
};