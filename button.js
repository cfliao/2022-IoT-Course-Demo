const five = require("johnny-five");
const board = new five.Board({"port": "COM3", "repl": false});

board.on("ready", function() {
    const button = new five.Button({pin:8});
    button.on("hold", function() {
        console.log( "Button held" );
    });

    button.on("press", function() {
        console.log( "Button pressed" );
    });

    button.on("release", function() {
        console.log( "Button released" );
    });
});
