export default class Planet {
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
