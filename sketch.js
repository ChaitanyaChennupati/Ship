var seaImg;
var ship, shipImg, edges;

function preload(){
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(800,800); 
  
  sea=createSprite(300,180,800,800);
  sea.addImage(seaImg);
  sea.scale=0.5;
  sea.x=sea.width/4;
  
  ship = createSprite(100,200,20,50);
  ship.addAnimation("ship-1.png",shipImg);
  ship.scale=0.4;
  ship.x=200;
  
  edges=createEdgeSprites();
  
  
  
}

function draw() {
  background(136,206,235);
  
  console.log(ship.y);
  
  sea.velocityX=-3;

  if (sea.x<0){
  sea.x=sea.width/4;
}  
  drawSprites();

}
