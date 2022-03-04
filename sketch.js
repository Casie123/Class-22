//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ceiling, leftWall, rightWall;
var ball;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  //Steps for creating Bodies in the world
  //1- define physics properties 
  //2- create a shape for the body
  //3-Add the body in the world


  var options = {
    //is not going to move of true and will move if false
    isStatic: true
  }
  
  //step #2
  ground = Bodies.rectangle(400,390,800,20, options);
  //step #3
  World.add(world, ground);
  

  ceiling = Bodies.rectangle(400,10,800,20, options);
  World.add(world, ceiling);

  leftWall = Bodies.rectangle(10,200,20,400,options);
  World.add(world, leftWall);

  rightWall = Bodies.rectangle(790,200,20,400,options);
  World.add(world, rightWall);

  var ballOptions = {
    //restitution= bounciness, higher the # more bounciness and lower the # less bounciness
    restitution: 1,
    frictionAir: 0.01,
    density: 0.5
  }

  ball = Bodies.circle(400,100,25,ballOptions);
  //step #3
  World.add(world, ball);
}

function draw() {
  background(255,255,255);  
  
  Engine.update(engine);


  //Physics object is created, we will use p5 lib to make the shape visible on the screen
  rectMode(CENTER)
  //push is to capture the new detail and pop is to delete after the same property is used
  push();
  fill("brown");
  rect(ground.position.x, ground.position.y, 800,20);
  rect(ceiling.position.x, ceiling.position.y, 800,20);
  rect(leftWall.position.x, leftWall.position.y, 20,400);
  rect(rightWall.position.x, rightWall.position.y, 20,400);
  pop();
  
  ellipseMode(RADIUS);
  push();
  fill("cyan");
  ellipse(ball.position.x, ball.position.y, 25,25);
  pop();
  
}