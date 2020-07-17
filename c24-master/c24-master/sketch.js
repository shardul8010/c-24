// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;


// The above line creates different constant variables for Engine, World, Bodies etc.

/*



const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

var box1,engine,world;


function setup() {
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
   world = engine.world;

   ground = new Ground(600,490,1200,20);
   
   cir1 = new Tanker(140,470,100);
   box1 = new Tanker1(160,420,80,20,PI/7);

    
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

}

function draw() {
ground.display();
box1.display();
cir1.display();


    // Remember to update the Matter Engine and set the background.
}


function keyReleased() {
    // Call the shoot method for the cannon.
}