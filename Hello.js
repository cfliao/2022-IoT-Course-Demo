const five = require("johnny-five");
let board = new five.Board({"port": "COM3", "repl": false});

board.on("ready", function () {
    let led = new five.Led(13);
    led.blink(500);
});