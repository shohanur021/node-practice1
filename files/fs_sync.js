const fs = require("fs");
const path = require("path");

const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);

fs.writeFileSync(filePath, "This is a new file, which is also updated", "utf-8");

// const readFile = fs.readFileSync(fileName, "utf-8");
// console.log(readFile);

fs.appendFileSync(fileName, "\nHi, I am Sajib", "utf-8");

// fs.unlinkSync(filePath);

const updatedName = "updated.txt";
const updatedPath = path.join(__dirname, updatedName);

fs.renameSync(filePath, updatedPath);