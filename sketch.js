
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  

}

function setup(){
  createCanvas(600,200);
  trex = createSprite(100,150,20,40);
  trex.addAnimation("trexrunning", trex_running);
  trex.scale =0.5;
  edges = createEdgeSprites()
  
  //create a trex sprite
 
}

function draw(){
  background("black");
  if(keyDown("space")){
    trex.velocityY = -5;
  }
  trex.velocityY = trex.velocityY + 0.2;
  trex.collide(edges[3])
  drawSprites();
  

}
