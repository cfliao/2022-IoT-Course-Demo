const five = require('johnny-five');
const board = new five.Board({"port": "COM3", "repl": false});

board.on('ready', () => {
    const sensor = new five.Sensor({
        pin: 'A0', freq: 1000, threshold:100
    });
    sensor.on('change', () => {
        console.log(sensor.value);
    });

});