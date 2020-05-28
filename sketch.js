var striker,boundary1,boundary2,boundary3,boundary4,border,border1,border2,border3,target,target1,target2,target3;
function setup() {
  createCanvas(400, 400);
   striker = createSprite(207,320,20,20);
 boundary1 = createSprite(45,200,20,250);
 boundary2 = createSprite(350,200,20,250);
 boundary3 = createSprite(200,45,250,20);
 boundary4 = createSprite(196,350,250,20);
 border = createSprite(15,200,10,310);
 border1 = createSprite(200,15,310,10);
 border2 = createSprite(200,385,310,10);
 border3 = createSprite(385,200,10,310);
// create the targets ehich will bestriked by the striker
 target = createSprite(200,200,10,10);
 target1 = createSprite(210,210,10,10);
 target2 = createSprite(210,190,10,10);
 target3 = createSprite(220,200,10,10);
}

function draw() {
  background("wheat");
  //to make the targets and to bounce from the border
  target.bounceOff(border);
  target.bounceOff(border1);
  target.bounceOff(border2);
  target.bounceOff(border3);
   target1.bounceOff(border);
  target1.bounceOff(border1);
  target1.bounceOff(border2);
  target1.bounceOff(border3);
  target2.bounceOff(border);
  target2.bounceOff(border1);
  target2.bounceOff(border2);
  target2.bounceOff(border3);
   target3.bounceOff(border);
  target3.bounceOff(border1);
  target3.bounceOff(border2);
  target3.bounceOff(border3);
  //to make the striker bounce with the targets
  striker.bounce(target);
  striker.bounce(target1);
  striker.bounce(target2);
  striker.bounce(target3 );
  //to make the striker bounce with the borders
  striker.bounceOff(border);
    striker.bounceOff(border1);
      striker.bounceOff(border2);
        striker.bounceOff(border3);
  
  if(keyDown(LEFT_ARROW)) {
    striker.velocityX = -2;
    striker.velocityY = 0;
  }
  if (keyDown(RIGHT_ARROW)) {
    striker.velocityX= 2;
    striker.velocityY= 0;
  }  
  if (keyDown("space")) {
    striker.velocityX= -0.3;
    striker.velocityY= -4;
  }
  if (keyDown("ESCAPE")) {
    striker.velocityX= 0;
    striker.velocityY= 0;
  } 
  //from line 66 to 87  the codes specifies that if the target(s) will go in the specified place then it will display the message of winning and change the bg color+
  
if (striker.y<0 ||striker.y>400||striker.x<0||striker.x>400) {
    background("red");
    text("OOPS! Your striker went out", 132, 320);
  }
  if (target.y<0 ||target>400||target.x<0||target.x>400) {
    background("green");
    text("WOW! You did it ", 132, 320);
  }
   if (target1.y<0 ||target1>400||target1.x<0||target1.x>400) {
    background("green");
    text("WOW! You did it", 132, 320);
  }
   if (target2.y<0 ||target2>400||target2.x<0||target2.x>400) {
    background("green");
     textSize (20);
     fill("black")
    text("WOW! You did it", 132, 320);
  }
   if (target3.y<0 ||target3>400||target3.x<0||target3.x>400) {
    background("green");
     textSize (20);
     fill("black")
    text("WOW! You did it", 132, 320);
  }
  drawSprites();
}