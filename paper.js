class Paper {
    constructor(x, y, radius) {
        var options = {
    isStatic:false,
    restitution:0.9,
    friction:1,
    density:1,

        }
        this.body = Bodies.circle(x, y, radius/2-10, options);
        this.radius = radius;
        this.image = loadImage("sprites/paper.png");
        
        World.add(world, this.body);
      }
      display(){
          var pos =this.body.position;
          var angle=this.body.angle;
          push();
          imageMode(CENTER);
          
          translate(pos.x,pos.y);
         // rotate(angle);
          
          fill("blue");
          image(this.image,0,0,this.radius,this.radius);
        pop();
      }
};