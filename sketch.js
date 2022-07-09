var football,basketball,dodgeball;
var player,playerImg;
var bg,bgimg;
var ballGroup;

function preload(){
 bgImg = loadImage("football2.jpeg");
 playerImg = loadImage("player.png") ;
 //football = loadImage("football.jpeg");
 //basketball = loadImage("basketball.jpeg");
 //dodgeball = loadImage("dodgeball.jpeg");
 ballImg = loadImage("football.jpeg","basketball.jpeg","dodgeball.jpeg");


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
player.dbug = true;
player.setCollider("rectangle", 0,0,300,300);

ballGroup = new Group();





}

function draw(){
 //background("black");
 drawSprites();

 if(keyDown("LEFT_ARROW")){
player.x = player.x - 30;
 }

if(keyDown("RIGHT_ARROW")){
    player.x = player.x + 30;
     }
  obs();
    }

    function obs(){
     ball = createSprite(random(500,1000),random(100,500),random(20,20));
     ball.addImage(ballImg);
     ball.scale = 0.15;
    }