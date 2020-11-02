// particle.js
// Polaris (Galaga)
// (GAM100)
// fall 2020
// jaehyeon.nam 
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
class Particle{

    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.x1 = 0;
        this.y1 = 7;
        this.p = 255;
    }

    die(){
        return this.p < 0;
    }

    update() {
        this.x += this.x1;
        this.y += this.y1;
        this.p -= 10;
    }

    draw(){
        fill(random(255),random(255),random(255),this.p);
        ellipse(this.x, this.y, 7);
    }
}