class Snake {
    constructor() {
        this.x = 300;
        this.y = 300;

        this.velocity = {
            x: 1,
            y: 0,
        };

        this.amtOfSqrs = 1;
        this.allSqrs = [];
    }

    update() {
        if (this.amtOfSqrs === this.allSqrs.length) {
            for (var i = 0; i < this.allSqrs.length - 1; i++) {
                this.allSqrs[i] = this.allSqrs[i + 1];
            }
        }
        this.allSqrs[this.amtOfSqrs - 1] = createVector(this.x, this.y);

        this.x += this.velocity.x * resolution;
        this.y += this.velocity.y * resolution;
    }

    display() {
        fill(255);
        for (let i = 0; i < this.allSqrs.length - 1; i++) {
            rect(this.allSqrs[i].x, this.allSqrs[i].y, resolution, resolution);
        }
        rect(this.x, this.y, resolution, resolution);
    }

    setVelocity(x, y) {
        this.velocity.x = x;
        this.velocity.y = y;
    }

    hasEaten(foo) {
        var distance = dist(this.x, this.y, foo.x, foo.y);
        if (distance < 1) {
            this.amtOfSqrs++;
            return true;
        } else {
            return false;
        }
    }

    gameLost() {
        for (var i = 0; i < this.allSqrs.length - 1; i++) {
            var pos = this.allSqrs[i];
            var s = dist(this.x, this.y, pos.x, pos.y);
            if (s < 1) {
                noLoop();
                background(255, 0, 0);
            }
        }
    }
}
