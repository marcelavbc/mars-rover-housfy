class Rover {
    constructor(name, planet, actualPosition, direction) {
        this.name = name;
        this.direction = direction;
        this.actualPosition = actualPosition;
        this.planet = planet;
    }

    //Checks if all sent commands are valid
    setCommands(string) {
        let validCommands = ['F', 'B', 'L', 'R'];
        for (let i = 0; i < string.length; i++) {
            if (!validCommands.includes(string[i])) {
                console.log(`The command ${string[i]} is not valid. Please, add a valid command: F | B | R | L`);
                console.log('********');
                //If a command is invalid, program execution is stopped
                process.exit();
            }
        }

        [...string].forEach(letter => {
            console.log(`Your command is: ${letter}`)
            console.log(`-`);

            if (letter === 'F') {
                this.moveFoward();
                return;
            } else if (letter === 'B') {
                this.moveBack();
                return;
            } else if (letter === 'L') {
                this.turnLeft();
                return;
            } else if (letter === 'R') {
                this.turnRigth();
                return;
            }
        })
    }

    turnLeft() {
        switch (this.direction) {
            case 'N':
                this.direction = 'W';
                break;
            case 'W':
                this.direction = 'S';
                break;
            case 'S':
                this.direction = 'E';
                break;
            case 'E':
                this.direction = 'N';
                break
        }
    }

    turnRigth() {
        switch (this.direction) {
            case 'N':
                this.direction = 'E';
                break;
            case 'E':
                this.direction = 'S';
                break;
            case 'S':
                this.direction = 'W';
                break;
            case 'W':
                this.direction = 'N';
                break
        }
    }

    //Check if there is an obstacle in the way
    checkObstacle(row, col) {
        let isBlocked = false
        for (let i = 0; i < this.planet.obstacles.length; i++) {
            if (this.planet.obstacles[i].row === row && this.planet.obstacles[i].col === col) {
                isBlocked = true;
                console.log(`Here there is a huge obstacle and the ${this.name} can' t follow the path. Try again... :)`);
                console.log('********');
                process.exit();
            }
        };
        return isBlocked;
    }

    moveFoward() {
        switch (this.direction) {
            case 'N':
                if (this.actualPosition[0].row - 1 >= 0) {
                    this.actualPosition[0].row--;
                    if (this.checkObstacle(this.actualPosition[0].row, this.actualPosition[0].col)) {
                        process.exit();
                    } else {
                        console.log(`${this.name} moved north`);
                        console.log('===');
                    }
                } else {
                    console.log(`It is not possible to move to ${this.direction}! The ${this.planet.name} is over... Try again with a new route.`);
                    console.log('===');
                }
                break
            case 'W':
                if (this.actualPosition[0].col - 1 >= 0) {
                    this.actualPosition[0].col--;
                    if (this.checkObstacle(this.actualPosition[0].row, this.actualPosition[0].col)) {
                        process.exit();
                    } else {                        
                        console.log(`${this.name} moved west`);
                        console.log('===');
                    }
                } else {
                    console.log(`It is not possible to move to ${this.direction}! The ${this.planet.name} is over... Try again with a new route.`);
                    console.log('===');
                }
                break
            case 'S':
                if (this.actualPosition[0].row < this.planet.board.length - 1) {
                    this.actualPosition[0].row++;
                    if (this.checkObstacle(this.actualPosition[0].row, this.actualPosition[0].col)) {
                        process.exit();
                    } else {                        
                        console.log(`${this.name} moved south`);
                        console.log('===');
                    }
                } else {
                    console.log(`It is not possible to move to ${this.direction}! The ${this.planet.name} is over... Try again with a new route.`);
                    console.log('===')
                }
                break
            case 'E':
                if (this.actualPosition[0].col < this.planet.board.length - 1) {
                    this.actualPosition[0].col++;
                    if (this.checkObstacle(this.actualPosition[0].row, this.actualPosition[0].col)) {
                        process.exit();
                    } else {                        
                        console.log(`${this.name} moved east`);
                        console.log('===');
                    }
                } else {
                    console.log(`It is not possible to move to ${this.direction}! The ${this.planet.name} is over... Try again with a new route.`);
                    console.log('===')
                }
                break
        }
    }

    moveBack() {
        switch (this.direction) {
            case 'N':
                if (this.actualPosition[0].row + 1 < this.planet.board.length) {
                    this.actualPosition[0].row++;
                    if (this.checkObstacle(this.actualPosition[0].row, this.actualPosition[0].col)) {
                        process.exit();
                    } else {
                        console.log(`${this.name} moved south`)
                        console.log('===')

                    }
                } else {
                    console.log(`It is not possible to move to ${this.direction}! The ${this.planet.name} is over... Try again with a new route.`);
                    console.log('===')
                }
                break
            case 'W':
                if (this.actualPosition[0].col + 1 < this.planet.board.length) {
                    this.actualPosition[0].col++;
                    if (this.checkObstacle(this.actualPosition[0].row, this.actualPosition[0].col)) {
                        process.exit();
                    } else {
                        console.log(`${this.name} moved east`);
                        console.log('===');

                    }
                } else {
                    console.log(`It is not possible to move to ${this.direction}! The ${this.planet.name} is over... Try again with a new route.`);
                    console.log('===');
                }
                break
            case 'S':
                if (this.actualPosition[0].row - 1 >= 0) {
                    this.actualPosition[0].row--;
                    if (this.checkObstacle(this.actualPosition[0].row, this.actualPosition[0].col)) {
                        process.exit();
                    } else {
                        console.log(`${this.name} moved north`);
                        console.log('===');
                    }
                } else {
                    console.log(`It is not possible to move to ${this.direction}! The ${this.planet.name} is over... Try again with a new route.`);
                    console.log('===');
                }
                break
            case 'E':
                if (this.actualPosition[0].col - 1 >= 0) {
                    this.actualPosition[0].col--;
                    if (this.checkObstacle(this.actualPosition[0].row, this.actualPosition[0].col)) {
                        process.exit();
                    } else {
                        console.log(`${this.name} moved west`);
                        console.log('===');

                    }
                } else {
                    console.log(`It is not possible to move to ${this.direction}! The ${this.planet.name} is over... Try again with a new route.`);
                    console.log('===');
                }
                break
        }
    }
}

module.exports = { Rover };