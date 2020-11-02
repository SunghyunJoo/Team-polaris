// bullet.js
// Polaris (Galaga)
// (GAM100)
// fall 2020
// jaehyeon.nam 
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
function Bullet(x,y)
{ 
    this.x=x
    this.y=y
    this.r = 8;
    this.toDelete = false;
  
  this.draw=function()
  {
    //fill(255,255,200);
   //ellipse(this.x,this.y,this.r*2,this.r*2);
    image(bimg,this.x,this.y,this.r*2,this.r*2) 
  }
  
 
  this.move=function()
  {
  
  this.y=this.y-25;
  
  }  
  
  this.evaporate = function() {
    this.toDelete = true;
  }
}