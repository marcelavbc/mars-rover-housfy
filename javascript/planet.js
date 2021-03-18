class Planet {
    constructor(name, size) {
        this.board = this.createBoard(size);
        this.name = name;
        this.size = size;
    }

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

    generateObstacles(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].row > this.board.length || array[i].col > this.board.length) {
                console.log('ALERT: You can not add obstacles out of the planet! The obstacle position can not be bigger than the planet size.')
                //here, stop script
            } else {
                this.obstacles = array;

            }
            this.obstacles = array;
        }
    }
}


module.exports = { Planet };
