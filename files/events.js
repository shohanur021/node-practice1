const eventEmiter = require("events");

const emitter = new eventEmiter();

emitter.on("greet", () => {
    console.log("event is fired");
})

emitter.on("bye", (name, prof) => {
    console.log(`${name} is a ${prof}`);
})

// emitter.on & emitter.addListener are the same thing.

emitter.addListener("start", (obj) => {
    console.log(`${obj.name} is a ${obj.prof}`);
})

emitter.emit("greet");
emitter.emit("bye", "Sajib", "student");
emitter.emit("start", {name: "Rasel", prof: "teacher"});
