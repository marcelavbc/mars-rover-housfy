export default class Planet {
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
