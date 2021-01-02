var backG, backG_Img, tom_move, tom, tom_stand, tom_stay, jerry_stay, jerry, jerry_tease ;

function preload() 
{
    backG_Img = loadImage("garden.png");
    tom_stay = loadImage("tomOne.png");
    tom_stand = loadAnimation("tomFour.png");
    jerry_stay = loadImage("jerryOne.png");
    tom_move = loadAnimation("tomTwo.png","tomThree.png");
    jerry_tease = loadAnimation("jerryTwo.png","jerryThree.png");
    jerry_stop = loadAnimation("jerryFour.png");
}

function setup()
{
    createCanvas(1000,1000);
    
    backG = createSprite(100,400,20,20);
    backG.addImage(backG_Img);
    backG.scale = 1

    tom = createSprite(400,600,20,20);
    tom.addImage(tom_stay);
    tom.scale = 0.1

    jerry = createSprite(200,600,20,20);
    jerry.addImage(jerry_stay);
    jerry.scale = 0.04

}

function draw() 
{
    if(tom.x-jerry.x < (tom.width/2 - jerry.width/2))
    {
       tom.addAnimation("stop",tom_stand);
       tom.changeAnimation("stop");

       jerry.addAnimation("over",jerry_stop);
       jerry.changeAnimation("over");
      
       tom.velocityX = 0;
       jerry.velocityX = 0;
    }
  
  keyPressed();
    
    

    drawSprites();
}


function keyPressed()
{
    if(keyDown("left"))
    {
       tom.velocityX = -4 ; 
       tom.addAnimation("running",tom_move);
       tom.changeAnimation("running");

       jerry.addAnimation("teasing",jerry_tease);
       jerry.changeAnimation("teasing");
    }


}

