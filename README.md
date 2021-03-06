# mars-rover-housfy

Project developed for Housfy's recruitment process. 

## Introducción

### Development

There are many planets to visit besides Mars! With that in mind, this software has been developed to be used on any other surface specified by the customer. 
The software is written in JavaScript following object oriented.

The function of the **Planet class** is: 

- Give name to the planet;
- Determine the area of the planet;
- Create the obstacles to be avoided. 

On the other hand, the **Rover class** is responsible for: 

- Determining where the rover will be initially placed;
- Setting the initial direction of the rover (north, south, east, west);
- Moving the equipment across the surface. 

### Commands:

In index.js, the client must insert the following data:

**Planet:** <br />
*Name and Surface* <br />
- Example for Planet Mars with a 10 x 10 area:<br />
**const thePlanet = new Planet('Mars', 10)**

*Obstacles*
- Example for two obstacles at positions 0,1 and 3,2:<br />
**thePlanet.generateObstacles([{ row: 0, col: 1 }, { row: 3, col: 2 }]);**

**Rover:** <br />
*Create the Rover*<br />
- Example for Rover Nebula that arrives to Mars at position 0,0 and is facing east:<br />
**const theRover = new Rover('Nebula', thePlanet, [{ row: 0, col: 0 }], 'E');** 

*Create route for the rover:*<br />
- Example for route Forward, Forwards, Right, Right, Back, Left:<br />
**theRover.setCommands('FFRRBL');**

### Execution

Node.js is used to execute the Javascript code on the server. This means your machine will need to have node and npm installed.

To run de program, inside de project folder, **run npm install**. <br />
Next, to execute: 
**npm start**

To see execute teste: <br />
**npm test**

## The task
You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface of the planet. Develop a software that translates the commands sent from earth to instructions that are understood by the rover.
### Requirements

- You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W)
it is facing.
- The rover receives a collection of commands. (E.g.) FFRRFFFRL
- The rover can move forward (f).
- The rover can move left/right (l,r).
- Suppose we are on a really weird planet that is square. 200x200 for example :)
- Implement obstacle detection before each move to a new square. If a given
sequence of commands encounters an obstacle, the rover moves up to the last
possible point, aborts the sequence and reports the obstacle.

### Take into account

- Rovers are expensive, make sure the software works as expected.
