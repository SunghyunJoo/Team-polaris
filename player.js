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
fill('white');
  rect(this.x,this.y,this.width,this.height)   
  }
  
update()
  {
    if(keyIsDown(LEFT_ARROW)&&this.x>0)
    {
      this.x -= 10;
    }
    
   if(keyIsDown(RIGHT_ARROW)&&this.x+this.width<width)
    {
      this.x += 10;
    }
    
      
  }
  


}