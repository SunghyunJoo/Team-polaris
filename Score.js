class Score{
constructor(){
this.p = 0;
}

draw(){

text("score : " +this.p,20,40);

}

update(){

this.p += 1;

}

}