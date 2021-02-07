
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

 
	//Create the Bodies Here.
bob1=new chain(180,500,80)
bob2=new chain(260,500,80)
bob3=new chain(340,500,80)
bob4=new chain(420,500,80)
bob5=new chain(500,500,80)
roof1=new roof(320,200,540,40)
rope1=new rope(roof1.body,bob1.body,-bobDiameter*2,0)
rope2=new rope(roof1.body,bob2.body,-bobDiameter*2,0)
rope3=new rope(roof1.body,bob3.body,-bobDiameter*2,0)
rope4=new rope(roof1.body,bob4.body,-bobDiameter*2,0)
rope5=new rope(roof1.body,bob5.body,-bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof1.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}



