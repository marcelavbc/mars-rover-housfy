class Planet {
    constructor(name, num) {
        this.board = this.CreateBoard(num);
        this.name = name;
        this.num = num;
    }

    CreateBoard(num) {
        const board = [];
        let count = 1
        for (let i = 0; i < num; i++) {
            const rowArr = []
            for (let j = 0; j < num; j++) {
                rowArr.push({ row: i, col: j, id: count++, obstacle: false });
            }
            board.push(rowArr);
        }
        return board
    }

    CreateObstacles() {
        let sizeGrid = this.num * this.num;
        var random;
        for (let i = 0; i < this.board.length - 2; i++) {
            random = Math.floor(Math.random() * sizeGrid) + 1;
            for (let j = 0; j < this.board.length; j++) {
                for (let k = 0; k < this.board.length; k++) {
                    if (this.board[j][k].id === random) {
                        if (this.board[0][0].id !== random) {
                            this.board[j][k].obstacle = true;
                        } else {
                            this.CreateObstacles()
                        }
                    }
                }
            }
        }
    }
}


class Rover {
    constructor(name, planet) {
        this.name = name;
        this.direction = 'E';
        this.actualPosition = { row: 0, col: 0, id: 1 }
        this.travelLog = [{ row: 0, col: 0, id: 1 }]
        this.planet = planet;
    }

    setCommands(string) {
        let validCommands = ['f', 'b', 'l', 'r'];

        for (let i = 0; i < string.length; i++) {
            if (!validCommands.includes(string[i])) {
                console.log(`The command ${string[i]} is not valid. Please, add a valid command: F | B | R | L`);
                return
            }
        }

        [...string].forEach(letter => {
            letter = letter.toLowerCase()
            console.log('instruction:', letter)
            if (letter === 'f') {
                console.log('moveForward')
                this.moveFoward()
                return;
            } else if (letter === 'b') {
                console.log('moveBack');
                this.moveBack()
                return;
            } else if (letter === 'l') {
                console.log('turnLeft');
                this.turnLeft()
                return;
            } else if (letter === 'r') {
                console.log('turnRight')
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

    moveFoward() {
        switch (this.direction) {
            case 'N':
                if (this.actualPosition.row -1 >= 0) {
                    this.actualPosition.row--;
                    this.actualPosition.id = this.actualPosition.id - this.planet.board.length;
                    const newPosition = { row: this.actualPosition.row, col: this.actualPosition.col, id: this.actualPosition.id };
                    this.travelLog.push(newPosition);
                    console.log('the rover moved north')
                } else {
                    console.log('the rover can not move north')
                }
                break;
            case 'W':
                if (this.actualPosition.col - 1 >= 0) {
                    // console.log('position:', this.actualPosition.row);
                    // console.log('length', this.planet.board.length)
                    this.actualPosition.col--;
                    this.actualPosition.id = this.actualPosition.id - 1;
                    const newPosition = { row: this.actualPosition.row, col: this.actualPosition.col, id: this.actualPosition.id };
                    this.travelLog.push(newPosition);
                    console.log('the rover moved west')
                } else {
                    // console.log('position en else:', this.actualPosition.row);
                    // console.log('length en else', this.planet.board.length)
                    console.log('the rover can not move west')
                }
                break;
            case 'S':
                if (this.actualPosition.row < this.planet.board.length - 1) {
                    this.actualPosition.row++;
                    this.actualPosition.id = this.actualPosition.id + this.planet.board.length;
                    const newPosition = { row: this.actualPosition.row, col: this.actualPosition.col, id: this.actualPosition.id };
                    console.log(newPosition)
                    this.travelLog.push(newPosition);
                    console.log('the rover moved south')
                } else {
                    console.log('the rover can not move south')
                }
                break;
            case 'E':
                if (this.actualPosition.col <= this.planet.board.length - 1) {
                    this.actualPosition.col++;
                    this.actualPosition.id++;
                    console.log('length board', this.planet.board.length)
                    const newPosition = { row: this.actualPosition.row, col: this.actualPosition.col, id: this.actualPosition.id };
                    this.travelLog.push(newPosition);
                    console.log('the rover moved east')
                } else {
                    console.log('the rover can not move east')
                }
                break
        }
    }

    moveBack() {
        switch (this.direction) {
            case 'N':
                if (this.actualPosition.row < this.planet.board.length) {
                    this.actualPosition.row++;
                    const newPosition = { row: this.actualPosition.row, col: this.actualPosition.col };
                    this.travelLog.push(newPosition)
                    console.log('the rover moved south')
                } else {
                    console.log('the rover can not move south')
                }
                break;
            case 'W':
                if (this.actualPosition.col < this.planet.board.length) {
                    this.actualPosition.col++;
                    const newPosition = { row: this.actualPosition.row, col: this.actualPosition.col };
                    this.travelLog.push(newPosition)
                    console.log('the rover moved east')
                } else {
                    console.log('the rover can not move east')
                }
                break;
            case 'S':
                if (this.actualPosition.row > 0) {
                    this.actualPosition.row--;
                    const newPosition = { row: this.actualPosition.row, col: this.actualPosition.col };
                    this.travelLog.push(newPosition)
                    console.log('the rover moved north')
                } else {
                    console.log('the rover can not move north')
                }
                break;
            case 'E':
                if (this.actualPosition.col > 0) {
                    this.actualPosition.col--;
                    const newPosition = { row: this.actualPosition.row, col: this.actualPosition.col };
                    this.travelLog.push(newPosition)
                    console.log('the rover moved west')
                } else {
                    console.log('the rover can not move west')
                }
                break;
        }
    }
}

const thePlanet = new Planet('Mars', 3)
const theRover = new Rover('Apolo XVII', thePlanet)
thePlanet.CreateObstacles()
theRover.setCommands('ffrffrffrfff')
console.log(theRover)
