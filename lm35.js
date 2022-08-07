const { Board, Thermometer } = require("johnny-five");
const board = new Board({"port": "COM3", "repl": false});

board.on("ready", () => {

    const thermometer = new Thermometer({
        controller: "LM35",
        pin: "A0",
        freq: 5000
    });
    //
    thermometer.on("change", () => {
        const {celsius, fahrenheit} = thermometer;
        console.log("  celsius      : ", celsius);
        console.log("  fahrenheit   : ", fahrenheit);
        console.log("--------------------------------------");
    });
});