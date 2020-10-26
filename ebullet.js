class Ebullet
  {
  constructor(x,y)
  {
    this.x = x;
    this.y = y;
    this.r = 6;
    this.speed = 4;
  }


show(){
fill(255,255,255);
rect(this.x ,this.y,this.r,this.r);
}
update(){
this.y += this.speed;
}
  hits(player){
  return collideRectRect(this.x,this.y,this.r,this.r,player.x,player.y,player.width,player.height);
  }
}
