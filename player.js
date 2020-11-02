
// player.js
// Polaris (Galaga)
// (GAM100)
// fall 2020
// jaehyeon.nam 
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
class Player
{
constructor(x,y,w,h)
  {
    this.x=x
    this.y=y
    this.width=w
    this.height=h
    
  }
  
  draw()
  {
  //fill('white');
  //rect(this.x,this.y,this.width,this.height) 
    
    

    image(pimg,this.x,this.y,this.width,this.height)
  }
  
update()
  {
    if(keyIsDown(LEFT_ARROW)&&this.x>0)
    {
      this.x -= 15;
    }
    
   if(keyIsDown(RIGHT_ARROW)&&this.x+this.width<width)
    {
      this.x += 15;
    }
    
      
  }
  


}