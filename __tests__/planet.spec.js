const { Planet } = require('../javascript/planet')

test('The is created', () => {
    const thePlanet = new Planet('Pluto', 3)
    expect(thePlanet).toEqual({"board": [[{"col": 0, "id": 1, "row": 0}, {"col": 1, "id": 2, "row": 0}, {"col": 2, "id": 3, "row": 0}], [{"col": 0, "id": 4, "row": 1}, {"col": 1, "id": 5, "row": 1}, {"col": 2, "id": 6, "row": 1}], [{"col": 0, "id": 7, "row": 2}, {"col": 1, "id": 8, "row": 2}, {"col": 2, "id": 9, "row": 2}]], "name": "Pluto", "size": 3});
});

test('The planet board has the right size', () => {
    const thePlanet = new Planet('Pluto', 3)
    expect(thePlanet.board[0]).toEqual([{"col": 0, "id": 1, "row": 0}, {"col": 1, "id": 2, "row": 0}, {"col": 2, "id": 3, "row": 0}], [{"col": 0, "id": 4, "row": 1}, {"col": 1, "id": 5, "row": 1}, {"col": 2, "id": 6, "row": 1}], [{"col": 0, "id": 7, "row": 2}, {"col": 1, "id": 8, "row": 2}, {"col": 2, "id": 9, "row": 2}]);
    expect(thePlanet.board[0].length).toEqual(3)
});

test('The obstacles are setted', () => {
    const thePlanet = new Planet('Pluto', 3)
    thePlanet.generateObstacles([{ row: 1, col: 1 }, { row: 0, col: 2 }]);
    expect(thePlanet.obstacles).toEqual([{ row: 1, col: 1 }, { row: 0, col: 2 }]);
});