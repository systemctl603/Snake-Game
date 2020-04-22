var snake;
var food;
var resolution = 20;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);

    snake = new Snake();
    frameRate(10);
    spawnFood();
}

function draw() {
    background("lightblue");
    snake.gameLost();
    if (0 >= snake.x || snake.x >= windowWidth) {
        console.log("awd");
        noLoop();
        background(255, 0, 0);
    } else if (0 >= snake.y || snake.y >= windowHeight) {
        noLoop();
        background(255, 0, 0);
    }
    snake.update();
    snake.display();

    fill(255, 0, 0);
    rect(food.x, food.y, resolution, resolution);

    if (snake.hasEaten(food)) {
        spawnFood();
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW && snake.dir != "down") {
        snake.setVelocity(0, -1);
        snake.dir = "up";
    } else if (keyCode === DOWN_ARROW && snake.dir != "up") {
        snake.setVelocity(0, 1);
        snake.dir = "down";
    } else if (keyCode === LEFT_ARROW && snake.dir != "right") {
        snake.setVelocity(-1, 0);
        snake.dir = "left";
    } else if (keyCode === RIGHT_ARROW && snake.dir != "left") {
        snake.setVelocity(1, 0);
        snake.dir = "right";
    }
}

function spawnFood() {
    var cols = width / resolution;
    var rows = height / resolution;

    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(resolution);
}

function mouseDragged() {
    snake.amtOfSqrs++;
}
