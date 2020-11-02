class Intro
{
 constructor(){
   img = loadImage('사진주소');
 }   
  
  update(){
    
  }
  
  draw(){
    image(img, 5, 285, 16, 16);
    image(img, 5, 325, 16, 16);
    image(img, 5, 365, 16, 16);
    textSize(16);
    textAlign(CENTER);
    textStyle(ITALIC);
    fill(33,189,153);
    text("PUSH START BUTTON", 80, 205);
    fill(255,255,0);
    text("1ST BONUS FOR 20000 PTS", 40, 285);
    text("2ND BOUNUS FOR 70000 PTS", 40, 325);
    text("AND FOR EVERY 70000 PTS", 40, 365);
    text("@ 1981 NAMCO LTD.",90, 520);
    if (keyIsDown(ENTER)){
      return;
    }
  }
}

var A;
function setup(){
  A = new Intro();
}
function draw(){
  A.draw();
}
