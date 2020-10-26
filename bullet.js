class Bullet
{
  constructor(x,y)
  {
    this.x=x
    this.y=y
    
  }
  
  draw()
  {
    fill(50,0,200);
   rect(this.x,this.y,5,20);
  }
  
 
move(){
  
 //this.x=this.x+this.speedX;
 this.y=this.y-5;
}  
  


}