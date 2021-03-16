
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof,chain1,bobObject1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	


	Engine.run(engine);
	roof = new Roof(400,100,700,50)
	bobObject1 = new Bob(170,400,20,10);
	bobObject2 = new Bob(250,400,20,10);
	bobObject3 = new Bob(330,400,20,10);
	bobObject4 = new Bob(410,400,20,10);
	bobObject5 = new Bob(490,400,20,10);


	chain1 = new Chain(170,250,1,300);
	chain2 = new Chain(250,250,1,300);
	chain3 = new Chain(330,250,1,300);
	chain4 = new Chain(410,250,1,300);
	chain5 = new Chain(490,250,1,300);

	
}
	


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  
  

 
}



