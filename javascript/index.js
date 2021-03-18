
const { Planet } = require('./planet')
const { Rover } = require('./rover')




const thePlanet = new Planet('Pluto', 3)
console.log(`Planet ${thePlanet.name} found! The dimension of ${thePlanet.name} is  ${thePlanet.size} x ${thePlanet.size}.`);

thePlanet.generateObstacles([{ row: 1, col: 1 }]);
console.log(`ALERT: ${thePlanet.name} has ${thePlanet.obstacles.length} obstacle!`);
const theRover = new Rover('Nebula', thePlanet, [{ row: 0, col: 0 }], 'E');
console.log(`The ${theRover.name} rover has arrived at ${thePlanet.name}. The equipment is currently at position (row: ${theRover.actualPosition[0].row}, col: ${theRover.actualPosition[0].col}) and is pointing ${theRover.direction}. Now, let's move around!`);
theRover.setCommands('FFRFF');
console.log(`The ${theRover.name} finish the route at the position (row: ${theRover.actualPosition[0].row}, col: ${theRover.actualPosition[0].col}).`)

