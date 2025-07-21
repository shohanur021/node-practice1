const fs = require("fs");
const path = require("path");


const directoryName = __dirname;

// fs.promises.readdir(directoryName)
// .then( (data) => console.log(data))
// .catch((err) => console.log(err));


const fileName = "test1.txt";
const filePath = path.join(__dirname, fileName);

fs.promises.writeFile(filePath, "This is the initial line", "utf-8")
.then(() => console.log("file created successfully"))
.catch((err) => console.log(err));


// fs.promises.readFile(filePath, "utf-8")
// .then((data) => console.log(data))
// .catch((err) => console.log(err));


// fs.promises.appendFile(filePath, "\nThis is the second line", "utf-8")
// .then(() => console.log("successfully updated"))
// .catch((err) => console.log(err));


// fs.promises.unlink(filePath)
// .then(() => console.log("deleted successfully"))
// .catch((err) => console.log(err))
