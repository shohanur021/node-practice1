const fs = require("fs");
const path = require("path");

const directoryName = __dirname;

const opendir = async () => {
    try{
        const data = await fs.promises.readdir(directoryName);
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

opendir();


const fileName = "test2.txt";
const filePath = path.join(__dirname, fileName);

const writeFileExample = async () => {
    try{
        const data = await fs.promises.writeFile(filePath, "This is the first line", "utf-8");
        console.log("File is writeen successfully");
    }
    catch(err){
        console.log(err);
    }
}

writeFileExample();


// const updateFileExample = async () => {
//     try{
//         await fs.promises.appendFile(filePath, "This is the second line", "utf-8");
//         console.log("successfully updated");
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// updateFileExample();


// const updateFileExample = async () => {
//     try{
//         await fs.promises.appendFile(filePath, "\nThis is the second line", "utf-8");
//         console.log("successfully updated");
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// updateFileExample();

// const readFileExample = async () => {
//     try{
//         const data = await fs.promises.readFile(filePath, "utf-8");
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// readFileExample();


const deleteFileExample = async () => {
    try{
        const data = await fs.promises.unlink(filePath);
        console.log("successfully deleted");
    }
    catch(err){
        console.log(err);
    }
}

deleteFileExample();