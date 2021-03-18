class Planet {
    constructor(name, size) {
        this.board = this.createBoard(size);
        this.name = name;
        this.size = size;
    }

    //Creates the planet's area according to the customer's specifications 
    createBoard(size) {
        const board = [];
        let count = 1
        for (let i = 0; i < size; i++) {
            const rowArr = []
            for (let j = 0; j < size; j++) {
                rowArr.push({ row: i, col: j, id: count++ });
            }
            board.push(rowArr);
        }
        return board
    }

    //Generates obstacles on the planet's surface
    generateObstacles(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].row > this.board.length || array[i].col > this.board.length) {
                console.log('ALERT: You can not add obstacles out of the planet! The obstacle position can not be bigger than the planet size.');
                console.log('********')
                //If an obstacle has been created outside the planet area, stop program execution.
                process.exit()
            } else {
                this.obstacles = array;
            }
            this.obstacles = array;
        }
    }
}


module.exports = { Planet };
