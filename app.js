class Planet {
    constructor(name, num) {
        const createBoard = (num) => {
            const board = [];
            for (let i = 0; i < num; i++) {
                const rowArr = []
                for (let j = 0; j < num; j++) {
                    rowArr.push({ row: i, col: j });
                }
                board.push(rowArr);
            }
            return board
        }
        this.board = createBoard(num);
        this.name = name;
    }
}

class Rover {
    constructor(name, planet) {
        this.name = name;
        this.direction = 'E';
        this.actualPosition = { row: 0, col: 0 }
        this.travelLog = [{ row: 0, col: 0 }]
        this.planet = planet;
    }

    setCommands(string) {
        [...string].forEach(letter => {
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
                if (this.actualPosition.row > 0) {
                    this.actualPosition.row--;
                    const newPosition = { row: this.actualPosition.row, col: this.actualPosition.col };
                    this.travelLog.push(newPosition);
                    console.log('the rover moved north')
                } else {
                    console.log('the rover can not move north')
                }
                break;
            case 'W':
                if (this.actualPosition.col > 0) {
                    this.actualPosition.col--;
                    const newPosition = { row: this.actualPosition.row, col: this.actualPosition.col };
                    this.travelLog.push(newPosition);
                    console.log('the rover moved west')
                } else {
                    console.log('the rover can not move west')
                }
                break;
            case 'S':
                if (this.actualPosition.col < this.planet.board.length) {
                    this.actualPosition.row++;
                    const newPosition = { row: this.actualPosition.row, col: this.actualPosition.col };
                    this.travelLog.push(newPosition);
                    console.log('the rover moved south')
                } else {
                    console.log('the rover can not move south')
                }
                break;
            case 'E':
                if (this.actualPosition.col < this.planet.board.length) {
                    this.actualPosition.col++;
                    const newPosition = { row: this.actualPosition.row, col: this.actualPosition.col };
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
theRover.setCommands('fffff')
console.log(theRover)
