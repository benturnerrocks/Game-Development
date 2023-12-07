class Ship {

    //constructs the ship object
    constructor(x, spaceshipImage) {
        this.x = x;
        this.score = 0;
        this.respawn();
        this.r = 10;

        //store image in ship object
        this.spaceshipImage = spaceshipImage;
    }

    //restarts the ship
    respawn() {
        this.y = height - 20;
        this.isUp = false;
        this.isDown = false;
    }

    //updates the ship
    update() {
        if (this.isUp && this.y > 0) {
            this.up();
        } else if (this.isDown && this.y < height - 20) {
            this.down();
        }

        if (this.hasPlayerScoredAPoint()) {
            this.score ++;
            this.respawn();
        }
    }

    //creates the ship
    display() {
        ellipse(this.x,this.y,this.r * 2, this.r *2);
        
        // display ship
        imageMode(CENTER); //centers for hit detection
        image(this.spaceshipImage, this.x, this.y, this.r*2, this.r*2);
    }

    //moves ship up on screen
    up() {
        this.y--;
    }

    //moves ship down on screen
    down() {
        this.y++;
    }

    //checks if the ship has scored
    hasPlayerScoredAPoint() {
        if (this.y <= 0) {
            return true;
        }
        return false;
    }
}
