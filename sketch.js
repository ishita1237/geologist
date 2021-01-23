
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone1;
var ground;
var rubber1;
var hammer1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 stone1=new stone (30,70,150,100);
	 ground=new plane(200,650,700,50);
	 rubber1=new rubber(40,10,50,100);
	 hammer1=new hammer(50,20,70,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone1.display();
  ground.display();
  rubber1.display();
  hammer1.display();
  drawSprites();
 
}



