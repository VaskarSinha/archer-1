const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  var options ={
    isStatic: true
  };
  //create player base body
  playerBase= Bodies.rectangle(350,350,180,150,options);
  World.add(world,playerBase);
  //create player body
  player= Bodies.rectangle(185,380,50,180,options);
  World.add(world,player);
}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image(playerimage,player.position.y,player.position.x,50,180);
  //show the playerbase image using image() function
  image(baseimage,playerBase.position.y,playerBase.position.x,180,150);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
