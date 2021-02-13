var cat,mouse,catImg1, catAnimation2, catImg3, mouseImg1, mouseAnimation2, mouseImg3, garden, gardenImg;
function preload() {
    catImg1=loadImage("images/cat1.png");
    catAnimation2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadImage("images/cat4.png");
    mouseImg1=loadImage("images/mouse1.png");
    mouseAnimation2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadImage("images/mouse4.png");
    gardenImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    garden=createSprite(500,400,20,20);
    garden.addImage(gardenImg);
    garden.scale=1.1;
    cat=createSprite(700,600,20,20);
    cat.addImage(catImg1);
    cat.scale=0.1;
    mouse=createSprite(200,600,20,20);
    mouse.addImage(mouseImg1);
    mouse.scale=0.1;
    

}

function draw() {

    background(255);
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
        cat.addAnimation("lastCatImage",catImg3);
        cat.changeAnimation("lastCatImage");
        mouse.addAnimation("lastMouseImage",mouseImg3);
        mouse.changeAnimation("lastMouseImage");
        cat.velocityX=0;
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode===LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("catRunning",catAnimation2);
      cat.changeAnimation("catRunning");
      mouse.addAnimation("mouseTaunting",mouseAnimation2);
      mouse.changeAnimation("mouseTaunting");
  }


}
