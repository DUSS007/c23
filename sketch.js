
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){


	
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var plane_options={
		isStatic: true
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  Engine.update(engine);

  rotator1=Bodies.rectangle(250, 200, 150, 28, rotator_options);
  World.add(world,rotator1);
  rotator2=Bodies.rectangle(250, 200, 150, 28, rotator_options);
  World.add(world,rotator1);
  rotator3=Bodies.rectangle(250, 200, 150, 28, rotator_options);
  World.add(world,rotator1);

  drawSprites();
 
}

var plane_options={
	isStatic: true
}

