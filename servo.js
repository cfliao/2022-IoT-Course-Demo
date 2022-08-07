const {Board, Servo} = require("johnny-five");
const board = new Board({"port": "COM3", "repl": false});
let counter = 0;
board.on("ready", () => {
    const servo = new Servo({pin: 10, center: true});
    servo.to(0, 1500);
    let actions = [function () {
        servo.to(90, 1500);
    }, function () {
        servo.to(180, 1500);
    }, function () {
        servo.to(0, 1500);
    }];

    servo.on('move:complete', () => {
        actions[counter]();
        counter = (counter + 1) % 3
    });
});



