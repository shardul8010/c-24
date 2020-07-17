class Tanker {
  constructor(x, y, radius) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.circle(x,y,radius,options);
    
     this.radius = radius;
     World.add(world,this.body);

    };

    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("black");
      ellipse(pos.x,pos.y,this.radius);
    
      
      
      
      
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look

    };
}
