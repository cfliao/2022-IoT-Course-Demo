const {Animation, Board, Servo} = require("johnny-five");
const board = new Board({"port": "COM3", "repl": false});

board.on("ready", () => {

    const servo = new Servo({pin: 10, center: true});
    servo.to(0, 500);

});
