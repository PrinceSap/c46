var football;
var player,playerImg;
var bg,bgimg;
var ballGroup;
var score = 0;
var life = 3;
var gameState = "play";

function preload(){
 bgImg = loadImage("football2.jpeg");
 playerImg = loadImage("player.png") ;
 //football = loadImage("football.jpeg");
 //basketball = loadImage("basketball.jpeg");
 //dodgeball = loadImage("dodgeball.jpeg");
 ballImg = loadImage("football.png",);
 


}

function setup(){
createCanvas(windowWidth,windowHeight);
//bg = createSprite(200,200,1,1);
bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg);
bg.scale = 5.5;

player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
player.addImage(playerImg);
player.scale = 0.65;
player.debug = true;
player.setCollider("rectangle", 0,0,300,300);

ballGroup = new Group();




}

function draw(){
 //background("black");
 
 if(gameState === "play"){
  if(life===0){ 
    gameState = "lost" 
  }

  if(score==100){ 
    gameState = "won" 
  }

 

 if(keyDown("LEFT_ARROW")){
player.x = player.x - 30;
 }

if(keyDown("RIGHT_ARROW")){
    player.x = player.x + 30;
     }




if(ballGroup.isTouching(player)){

  for(var i = 0; i<ballGroup.length; i++ ){
    if(ballGroup[i].isTouching(player)){
      ballGroup[i].destroy();
      score = score + 5;
      life = life + 1;
    }
  }
  }
  obs();
}

drawSprites();
  
textSize(20)
fill("yellow");
text("Score = " + score,displayWidth-200,displayHeight/2-220) ;
text("Lives = " + life,displayWidth-200,displayHeight/2-280) ;


if(gameState == "lost"){ 
  textSize(100) 
  fill("red") 
text("You Lost ",400,400) 
ballGroup.destroyEach(); 
player.destroy();

}
else if(gameState == "won"){
  textSize(100) 
  fill("yellow") 
text("You Won",400,400) 
ballGroup.destroyEach(); 
player.destroy();
}
}


    



    function obs(){
      if(frameCount%50===0){

      
     ball = createSprite(random(100,1100),640,20,20);
     ball.addImage(ballImg);
     ball.scale = 0.035;
     ball.velocityX = -5;
     ball.debug = true;
     ball.setCollider("rectangle",0,0,200,200);

     ball.lifetime = 400;
     ballGroup.add(ball);

    }




   //if(ballGroupCollision.collided || playerCollision.collided){
   //lives += -1;
 // }
  





    }