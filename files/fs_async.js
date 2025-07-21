const fs = require("fs");
const path = require("path");

const fileName = "async.txt";
const pathName = path.join( __dirname, fileName);

fs.writeFile(pathName, "This is the initaila stage", "utf-8", (err) => {
    if (err) console.log(err);
    else console.log("Successfully written");
})


// fs.readFile( pathName, "utf-8", (err, data) => {
//     if (err) console.log(err);
//     else console.log(data);
// })


// fs.appendFile(pathName, "\nnew line is added", (err) => {
//     if (err) console.log(err);
//     else console.log("lines are added");
// })


// fs.unlink(pathName, (err) => {
//     if (err) console.log(err);
//     else console.log("file is successfully deleted");
// })


const updatedName = "updated_async.txt";
const updatedPath = path.join(__dirname, updatedName);

fs.rename(pathName , updatedPath, (err) => {
    if (err) console.log(err);
    else console.log("rename is done");
})