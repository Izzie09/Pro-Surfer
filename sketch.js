var bg, bgImg;
var surfer, surferImg;
var heart, heartImg;
var energy, energyImg;
var coral, coralImg, coralGroup;
var coin, coinImg, coinsGroup;
var rock, rockImg, rocksGroup;

var score = 0;

var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload(){
 bgImg = loadImage("assets/bg.webp");
 surferImg = loadImage("assets/surfer.png");
 coinImg = loadImage("assets/coin.png");
 heartImg = loadImage("assets/heart.png");
 energyImg = loadImage("assets/energy.png");
 coralImg = loadImage("assets/coral.png");
 rockImg = loadImage("assets/rock2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //bg = createSprite(400, 200, 50, 50);
  //bg.addImage(bgImg);
  //bg.scale = 3.75;

  surfer = createSprite(100, 250, 25, 25);
  surfer.addImage(surferImg);
  surfer.scale = 0.3;

  coinsGroup = new Group();
  coralGroup = new Group();
  rocksGroup = new Group();
}

function draw() {
  background(bgImg);  
  fill("black");
  textSize(50);
  text("Score: "+ score, width-300,50);
  
 
  
  if (gameState === PLAY) {
    if(keyDown("DOWN_ARROW")){
      surfer.velocityY = 5;
    }
  
    if(keyDown("RIGHT_ARROW")){
      surfer.velocityX = 5;
    }
  
    if(keyDown("UP_ARROW")){
      surfer.velocityY = -5;
    }
    
    if(coinsGroup.isTouching(surfer)){
      coinsGroup.destroyEach();
      score = score+1;
    }

    spawnRocks();
    spawnCoral();
    spawnCoins();
  }

  if(coralGroup.isTouching(surfer) || rocksGroup.isTouching(surfer)){
    gameState = END;
  }


  else if(gameState === END) {
    surfer.velocityX = 0;
    surfer.velocityY = 0;

    coralGroup.setVelocityXEach(0);
    coralGroup.setLifetimeEach(-1);
    
    rocksGroup.setVelocityXEach(0);
    rocksGroup.setLifetimeEach(-1);
    
    coinsGroup.setVelocityXEach(0);
    coinsGroup.setLifetimeEach(-1);
    coinsGroup.visible = false;
    
    //coralGroup.destroy();
    //coinsGroup.destroy();
    
  }
  
  drawSprites();
}

function spawnCoins() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var coin = createSprite(1000,120,40,10);
    coin.y = Math.round(random(400,20));
  //coin.x = Math.round(random(300,50));
    coin.addImage(coinImg);
    coin.scale = 0.25;
    coin.velocityX = -3;
    
  //assign lifetime to the variable
    coin.lifetime = 200;
    
    //add each cloud to the group
    coinsGroup.add(coin);
  }}

  function spawnCoral() {
    //write code here to spawn the clouds
    if (frameCount % 200 === 0) {
      var coral = createSprite(500,200,40,10);
      coral.y = Math.round(random(400,20));
    //coin.x = Math.round(random(300,50));
      coral.addImage(coralImg);
      coral.scale = 0.25;
      coral.velocityX = -3;
      
    //assign lifetime to the variable
      coral.lifetime = 200;
      
      //add each cloud to the group
      coralGroup.add(coral);
    }}

    function spawnRocks() {
      //write code here to spawn the clouds
      if (frameCount % 500 === 0) {
        var rock = createSprite(500,500,40,10);
        rock.y = Math.round(random(400,20));
      //coin.x = Math.round(random(300,50));
      rock.addImage(rockImg);
      rock.scale = 0.15;
      rock.velocityX = -3;
        
      //assign lifetime to the variable
      rock.lifetime = 200;
        
        //add each cloud to the group
      rocksGroup.add(rock);
      }}


    