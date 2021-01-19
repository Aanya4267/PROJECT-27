var b1,b2,b3,b4,b5,roof1,r1,r2,r3,r4,r5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	b1 = new bob(300,500,20);
	b2 = new bob(340,500,20);
	b3= new bob(380,500,20);
	b4= new bob(420,500,20);
	b5= new bob(460,500,20);
	roof1=new roof(380,300,200,20);
	r1=new rope(b1.body,roof1.body,-80,10);
	r2=new rope(b2.body,roof1.body,-40,10);

	r3=new rope(b3.body,roof1.body,0,10);

	r4=new rope(b4.body,roof1.body,40,10);
	r5=new rope(b5.body,roof1.body,80,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  roof1.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-100,y:-20});
		
	}
}




