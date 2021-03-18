const { Planet } = require('../javascript/planet')
const { Rover } = require('../javascript/rover')

test('The Rover turns left', () => {
    const thePlanet = new Planet('Pluto', 3)
    const theRover = new Rover('Nebula', thePlanet, [{ row: 0, col: 0 }], 'N')
    theRover.turnLeft("L");
    expect(theRover.direction).toEqual("W");
});

test('The Rover turns right', () => {
    const thePlanet = new Planet('Pluto', 3)
    const theRover = new Rover('Nebula', thePlanet, [{ row: 0, col: 0 }], 'N')
    theRover.turnRigth("R");
    expect(theRover.direction).toEqual("E");
});

test('The Rover moves foward', () => {
    const thePlanet = new Planet('Pluto', 3)
    const theRover = new Rover('Nebula', thePlanet, [{ row: 0, col: 0 }], 'E')
    thePlanet.generateObstacles([{ row: 1, col: 1 }]);
    theRover.moveFoward();
    expect(theRover.actualPosition[0]).toEqual({ row: 0, col: 1 });
});

test('The Rover moves back', () => {
    const thePlanet = new Planet('Pluto', 3)
    const theRover = new Rover('Nebula', thePlanet, [{ row: 0, col: 2 }], 'E')
    thePlanet.generateObstacles([{ row: 1, col: 1 }]);
    theRover.moveBack();
    expect(theRover.actualPosition[0]).toEqual({ row: 0, col: 1 });
});

