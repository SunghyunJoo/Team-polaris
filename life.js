
class Life{
constructor(){
this.p = 3;
}

draw(){
  
text("life :"+this.p,20,20);
  
}
  
update(){
  
this.p -= 1;
  
}
  
}