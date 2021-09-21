const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;
var bgimg
var blowimg
var winimg
function preload(){
  bgimg = loadImage("pipe.png")
  blowimg = loadImage("blow.png")
  winimg= loadImage("win.png")
}

function setup() {
  var canvas = createCanvas(500, 500);
  engine = Engine.create();
  world = engine.world;

  win = createSprite(300,200,20,20)
  win.visible = false

  ball = new Ball(327,50, 10, 20);
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);
  button = createImg("blow.png");
  button.position(300,370);
  button.size(50,50)
  //button.class("blowButton");
  button.mouseClicked(blow);


  //buttonPressed(blow);
  
  //button = mousePressed(blow);
  
  //button.mousePressed();

}

function draw() {
  background(bgimg);
  Engine.update(engine);
  textStyle(BOLDITALIC);
  textSize(20);
  fill(225, 68, 252)
text("A ball is stuck in the pipes help the mechanics fix it !",0,460)
text("Press the blow face to remove it!",0,490)


  blower.show();
  ball.show();
  blowerMouth.show();

  if(ball.body.position.y < height - 600){
    win.visible = true
win.addImage(winimg)
  }

  drawSprites()
}

function blow() {

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.005});

  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
  
  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0.05, y:0.05});
  
  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:-0.05, y:0});

}

