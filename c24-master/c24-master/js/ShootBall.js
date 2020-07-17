class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world,pointB);
    }

    attach(body){}

    shoot(){}

    display(){
        line(this.body.bodyA.position.x,this,body.bodyA.position.y,this.pointB.x,this.pointB.y);

    }

}
