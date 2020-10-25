class enemy{
    constructor(x,y,tx,ty) {
        this.pos = createVector(x,y);
        this.targetPos = createVector(tx,ty);
        this.direction = createVector(this.targetPos.x-this.pos.x,this.targetPos.y-this.pos.y);
        this.angle=this.direction.heading();
    }
    update() {
        this.direction = createVector(this.targetPos.x-this.pos.x,this.targetPos.y-this.pos.y);
        let length =10;
        if(this.direction.mag()<=length) {
            this.pos.set(this.targetPos.x,this.targetPos.y);
            this.angle=this.direction.heading()+HALF_PI;
        }
        else {
            this.direction.setMag(length);
            this.pos.add(this.direction);
        }
    }
    display() {
        if(second()%2)
            fill(255,100,100);
        else
            fill(100,100,255);
        circle(this.pos.x,this.pos.y,20);
        let dx =this.pos.x + cos(this.angle)*20;
        let dy =this.pos.y + sin(this.angle)*20;
        line(this.pos.x,this.pos.y,dx,dy);
    }
    //
    // collisionCheck(Bullet(x,y)) {
        //check bullet with all enemy
        // if collide remove enemy
        //send score value to score.js
        //return true or false

    // }
}