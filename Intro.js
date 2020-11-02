// Intro.js
// Polaris (Galaga)
// (GAM100)
// fall 2020
//sunghyun.joo
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
class Intro
{
 constructor(){
 }   
  
  update(){
    
  }
  
  draw(){
    push();
    image(pimg, width/2-140, 265, 28, 28);
    image(pimg, width/2-150, 300, 28, 28);
    image(pimg, width/2-140, 340, 28, 28);
    textSize(16);
    textAlign(CENTER);
    textStyle(ITALIC);
    fill(33,189,153);
    text("PUSH START BUTTON", width/2, 205);
    fill(255,255,0);
    text("1ST BONUS FOR 20000 PTS", width/2, 285);
    text("2ND BOUNUS FOR 70000 PTS", width/2, 325);
    text("AND FOR EVERY 70000 PTS", width/2, 365);
    text("@ 1981 NAMCO LTD.",width/2, 520);
    if (keyIsDown(ENTER)){
      return;
    }
    pop();
  }
}