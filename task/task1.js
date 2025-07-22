const eventEmiter = require("events");
const fs = require("fs");
const path = require("path");

const emitter = new eventEmiter();

let eventCount = { };

const fileName = path.join(__dirname, "data.json");

const updateCount = async () => {
    try{
        await fs.promises.writeFile(fileName, JSON.stringify(eventCount, null, 2));
    }
    catch(err){
        console.log(err);
    }
}

emitter.on("user-login", (username) => {
    console.log(`${username} is loged in`);
    eventCount["login-user"]++;
    updateCount();
})

emitter.on("user-purchase", (username, item) => {
    console.log(`${username} purchases a ${item}`);
    eventCount["user-purchase"]++;
    updateCount();
})

emitter.on("user-update", (username, mail) => {
    console.log(`${username}'s email is updated`);
    eventCount["user-update"]++;
})

emitter.on("user-logout", (username) => {
    console.log(`${username} is successfully logout`);
    eventCount["user-logout"]++;
    updateCount();
})

const readCount = async () => {
    try{
       const res = await fs.promises.readFile(fileName, "utf8");
       const result = JSON.parse(res);
       eventCount = {...result};
       
       emitter.emit("user-login","Rana");
       emitter.emit("user-purchase","Rana", "laptop");
       emitter.emit("user-update", "Rana", "email");
       emitter.emit("user-logout", "Rana");
    }
    catch(err){
       console.log(err);
    }
}

readCount();

