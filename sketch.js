
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;
var tree;
var ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12,mango13,mango14;
var stone;
var sling1;
var onsling=1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 620);


	engine = Engine.create();
	world = engine.world;

    tree = new Tree(600,420,400,400);

    ground = new Ground(400,height,800,30);

    boy = new Boy(100,570,200,200);

    stone = new Stone(100,50,50,50);

    sling1 = new Slingshot(stone.body,{x:30,y:520})

    mango1 = new Mango(580,300,40,50);

    mango2 = new Mango(550,250,40,50)

    mango3 = new Mango(650,300,40,50);

    mango4 = new Mango(650,250,40,50);

    mango5 = new Mango(700,300,40,50);

    mango6 = new Mango(550,360,40,50);

    mango7 = new Mango(480,380,40,50);

    mango8 = new Mango(600,350,40,50);

    mango9 = new Mango(650,380,40,50);

    mango10 = new Mango(700,380,40,50);

    mango11 = new Mango(500,330,40,50);

    mango12 = new Mango(780,360,40,50);

    mango13 = new Mango(740,330,40,50);

    mango14 = new Mango(450,330,40,50);

	Engine.run(engine);
  
}


function draw() {
  imageMode(CENTER);
  background("white");
  tree.display();
  ground.display();
  boy.display();
  stone.display();
  sling1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);
  detectcollision(stone,mango10);
  detectcollision(stone,mango11);
  detectcollision(stone,mango12);
  detectcollision(stone,mango13);
  detectcollision(stone,mango14);
  drawSprites();
 
}

function mouseDragged(){
 if(onsling===1)
  {
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  sling1.fly();
  onsling=0;
}

function detectcollision(lstone,lmango)
{
  var lmango1 = lmango.body.position;
  var lstone1 = lstone.body.position;
  console.log(lmango.body.position)
  console.log(lstone.body.position)
  if (lstone1.x - lmango1.x < 200
    &&  lmango1.x - lstone1.x < 200
    &&  lstone1.y - lmango1.y < 200
    &&   lmango1.y - lstone1.y < 200) 
    {
       Matter.Body.setStatic(lmango.body,false);
    }

}