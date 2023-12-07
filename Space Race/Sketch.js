//each ship
let leftShip;
let rightShip;

//each score
let leftScore;
let rightScore;

//difficulty
const NUM_DEBRIS = 30;

//spaceship image
let spaceshipImage;

function setup() {
    createCanvas(400, 400);

    // get the spaceship image from your project-folder
    spaceshipImage = loadImage('spaceship.png');

    leftShip = new Ship(width * 0.33,spaceshipImage);
    rightShip = new Ship(width * 0.66,spaceshipImage);

    //create debris
    for (let i = 0; i < NUM_DEBRIS; i++) {
        allDebris.push(new Debris());
    }

    // creating the score objects
    leftScore = new Score(width * 0.33 - 40);
    rightScore = new Score(width * 0.66 + 40);
}

function draw() {
    background(0);

    leftShip.update();
    rightShip.update();

    leftShip.display();
    rightShip.display();

    // update debris
    updateDebrisAndCheckCollisions();

    // pass in the players current score
    leftScore.display(leftShip.score);
    rightScore.display(rightShip.score);
}

function updateDebrisAndCheckCollisions() {
    for (let i = 0; i < allDebris.length; i++) {
        allDebris[i].update();
        allDebris[i].display();
      
        if (allDebris[i].hasHitShip(leftShip)) {
            leftShip.respawn();
        } else if (allDebris[i].hasHitShip(rightShip)) {
            rightShip.respawn();
        }
    }
  }

function keyPressed() {
    if (keyCode == UP_ARROW) {
        rightShip.isUp = true;
        rightShip.isDown = false;
    } else if (keyCode == DOWN_ARROW) {
        rightShip.isDown = true;
        rightShip.isUp = false;
    }

    if (keyCode == 87) {
        //87 is letter 'w'
        leftShip.isUp = true;
        lefthip.isDown = false;
    } else if (keyCode == 83) {
        //83 is letter 's'
        leftShip.isDown = true;
        leftShip.isUp = false;
    }
}

function keyReleased() {
    if (keyCode == UP_ARROW) {
        rightShip.isUp = false;
    } else if (keyCode == DOWN_ARROW) {
        rightShip.isDown = false;
    }

    if (keyCode == 87) {
        //87 is letter 'w'
        leftShip.isUp = false;
    } else if (keyCode == 83) {
        //83 is letter 's'
        leftShip.isDown = false;
    }
}

