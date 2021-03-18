class Rover {
    constructor(name, planet, actualPosition, direction) {
        this.name = name;
        this.direction = direction;
        this.actualPosition = actualPosition;
        this.travelLog = [{ row: 0, col: 0 }]
        this.planet = planet;
    }

    setCommands(string) {
        let validCommands = ['F', 'B', 'L', 'R'];
        for (let i = 0; i < string.length; i++) {
            if (!validCommands.includes(string[i])) {
                console.log(`The command ${string[i]} is not valid. Please, add a valid command: F | B | R | L`);
                return
            }
        }

        [...string].forEach(letter => {
            console.log(`Movement: ${letter}`)
            if (letter === 'F') {
                this.moveFoward()
                return;
            } else if (letter === 'B') {
                this.moveBack()
                return;
            } else if (letter === 'L') {
                this.turnLeft()
                return;
            } else if (letter === 'R') {
                this.turnRigth()
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

    checkObstacle(row, col) {
        let isBlocked = false
        for (let i = 0; i < this.planet.obstacles.length; i++) {
            if (this.planet.obstacles[i].row === row && this.planet.obstacles[i].col === col) {
                isBlocked = true;
            }
        };
        return isBlocked
    }

    moveFoward() {
        switch (this.direction) {
            case 'N':
                if (this.actualPosition[0].row - 1 >= 0) {
                    this.actualPosition[0].row--;
                    if (this.checkObstacle(this.actualPosition[0].row, this.actualPosition[0].col)) {
                        console.log('You can not move! Find another route');
                        return;
                    } else {
                        const newPosition = { row: this.actualPosition[0].row, col: this.actualPosition[0].col };
                        this.travelLog.push(newPosition);
                        console.log('the rover moved north')
                    }
                } else {
                    console.log('The rover can not move north')
                }
                break
            case 'W':
                if (this.actualPosition[0].col - 1 >= 0) {
                    this.actualPosition[0].col--;
                    if (this.checkObstacle(this.actualPosition[0].row, this.actualPosition[0].col)) {
                        console.log('You can not move! Find another route');
                        return;
                    } else {
                        const newPosition = { row: this.actualPosition[0].row, col: this.actualPosition[0].col };
                        this.travelLog.push(newPosition);
                        console.log('the rover moved west')
                    }
                } else {
                    console.log('The rover can not move west')
                }
                break
            case 'S':
                if (this.actualPosition[0].row < this.planet.board.length - 1) {
                    this.actualPosition[0].row++;
                    if (this.checkObstacle(this.actualPosition[0].row, this.actualPosition[0].col)) {
                        console.log('You can not move! Find another route');
                        return;
                    } else {
                        const newPosition = { row: this.actualPosition[0].row, col: this.actualPosition[0].col };
                        this.travelLog.push(newPosition);
                        console.log('the rover moved south')
                    }
                } else {
                    console.log('The rover can not move south')
                }
                break
            case 'E':
                if (this.actualPosition[0].col < this.planet.board.length - 1) {
                    this.actualPosition[0].col++;
                    if (this.checkObstacle(this.actualPosition[0].row, this.actualPosition[0].col)) {
                        console.log('You can not move! Find another route');
                        return;
                    } else {
                        const newPosition = { row: this.actualPosition[0].row, col: this.actualPosition[0].col };
                        this.travelLog.push(newPosition);
                        console.log('the rover moved east')
                    }
                } else {
                    console.log('The rover can not move east')
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
                        console.log('You can not move! Find another route');
                        return;
                    } else {
                        const newPosition = { row: this.actualPosition[0].row, col: this.actualPosition[0].col };
                        this.travelLog.push(newPosition);
                        console.log('The rover moved south')
                    }
                } else {
                    console.log('The rover can not move south')
                }
                break
            case 'W':
                if (this.actualPosition[0].col + 1 < this.planet.board.length) {
                    this.actualPosition[0].col++;
                    if (this.checkObstacle(this.actualPosition[0].row, this.actualPosition[0].col)) {
                        console.log('You can not move! Find another route');
                        return;
                    } else {
                        const newPosition = { row: this.actualPosition[0].row, col: this.actualPosition[0].col };
                        this.travelLog.push(newPosition);
                        console.log('the rover moved east')
                    }
                } else {
                    console.log('The rover can not move east')
                }
                break
            case 'S':
                if (this.actualPosition[0].row - 1 >= 0) {
                    this.actualPosition[0].row--;
                    if (this.checkObstacle(this.actualPosition[0].row, this.actualPosition[0].col)) {
                        console.log('You can not move! Find another route');
                        return;
                    } else {
                        const newPosition = { row: this.actualPosition[0].row, col: this.actualPosition[0].col };
                        this.travelLog.push(newPosition);
                        console.log('the rover moved north')
                    }
                } else {
                    console.log('The rover can not move north')
                }
                break
            case 'E':
                if (this.actualPosition[0].col - 1 >= 0) {
                    this.actualPosition[0].col--;
                    if (this.checkObstacle(this.actualPosition[0].row, this.actualPosition[0].col)) {
                        console.log('You can not move! Find another route');
                        return;
                    } else {
                        const newPosition = { row: this.actualPosition[0].row, col: this.actualPosition[0].col };
                        this.travelLog.push(newPosition);
                        console.log('the rover moved west')
                    }
                } else {
                    console.log('The rover can not move west')
                }
                break
        }
    }
}

module.exports = { Rover };