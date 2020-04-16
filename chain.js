class Chain {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA.body,
            pointB : pointB,
            length : 15,
            stiffness : 0.04
        }
        
        this.pointB = pointB;

        this.body = Matter.Constraint.create(options);
        World.add(world,this.body);
    }

    fly(){
        this.body.bodyA = null;
    }

    display(){
        if(this.body.bodyA = this.body.bodyA){
            push();
            var pointA = this.body.bodyA.position;

            strokeWeight(5);
            line(pointA.x,pointA.y,this.pointB.x,this.pointB.y);
            pop();
        }
    }
}

