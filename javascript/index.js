
const { Planet } = require('./planet')
const { Rover } = require('./rover')

//Create the Planet
const thePlanet = new Planet('Mars', 10)
console.log(`Planet ${thePlanet.name} created! The dimension of ${thePlanet.name} is  ${thePlanet.size} x ${thePlanet.size}.`);
console.log('***');

//Generate obstacles
thePlanet.generateObstacles([{ row: 1, col: 1 }]);
console.log(`ALERT: ${thePlanet.name} has ${thePlanet.obstacles.length} obstacle! You should avoid them!`);
console.log('***');

//Land the rover and define position and direction
const theRover = new Rover('Nebula', thePlanet, [{ row: 0, col: 0 }], 'E');
console.log(`The ${theRover.name} rover has arrived at ${thePlanet.name}. The equipment is currently at position (row: ${theRover.actualPosition[0].row}, col: ${theRover.actualPosition[0].col}) and is pointing ${theRover.direction}. Now, let's move around!`);
console.log('***');

//Define rover commands
theRover.setCommands('FFFFFFRFF');

//Rover final position
console.log('***');
console.log(`The ${theRover.name} finish the route at the position (row: ${theRover.actualPosition[0].row}, col: ${theRover.actualPosition[0].col}). ${theRover.name} is facing ${theRover.direction}`)


