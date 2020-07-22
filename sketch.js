

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var chain;
var trash;
var paper;
var ground;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	box1 = new Box(910,597,20,100);
	box2 = new Box(1090,597,20,100);
	box3 = new Box(1000,647,200,20);
	box4 = new Box(600,675,1200,20);

	paper = new Paper(200,200,50);

	launcher = new Launcher(paper.body,{x:200,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
 // Engine.update(engine);
 text(mouseX + "," +mouseY,mouseX,mouseY);
 paper.display();
 box1.display();
  box2.display();
  box3.display();
 box4.display();
 launcher.display();

  

  
}

function mouseDragged(){

	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
	
	}
	
	function mouseReleased(){
	
	launcher.fly();
	
	}