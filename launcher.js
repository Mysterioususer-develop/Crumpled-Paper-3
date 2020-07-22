class Launcher{
    constructor(bodyA,pointB){
    
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04,
    
    
        }
    
        
    
    
    this.launcher = Constraint.create(options);
    this.pointB = pointB;
    World.add(world,this.launcher);
    
    
    
    }
    
    display(){
    
        if(this.launcher.bodyA){var pointA=this.launcher.bodyA.position;
            var pointB=this.pointB;
        
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
    
    }
    
    fly(){this.launcher.bodyA=null};
    
    }
    