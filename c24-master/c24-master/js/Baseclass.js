class Baseclass{
    constructor(x,y,width,height,angle){

        this.body = bodies.rectangle(x,y,width,height)
        this.width = width;
        this.height = height;
        World.add(world,this.boody);

    }
    display(){
        var angle = this.body.angle;
        Push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle)
        rectMode(CENTER);
        rect(pos.x,ps.y,this.width,this.height);
        Pop();

        

    }

}
