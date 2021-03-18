const { Planet } = require('../planet')
const { Rover } = require('../rover')

describe("Test Rover Class", () => {
    test("Rover should move", () => {
        const thePlanet = new Planet('Mars', 3)
        const theRover = new Rover('Apolo XVII', [{ row: 0, col: 0 }], 'W')
        //thePlanet.CreateObstacles()
        theRover.setCommands('frlf')
        // aqui tem numeros aleatorios.
        
        // Tem que avaliar qual seria a posicao depois de executar os comandos acima
        // E expor o getPosition()pra poder chamar:
        //
        expect(theRover.getPosition().row).toEqual(3);
        
        expect(theRover.getPosition().col).toEqual(4);
        // essa linha eh so pra ver o teste unitario funcionando.Apagar:
        expect(4).toEqual(4);
    });
});