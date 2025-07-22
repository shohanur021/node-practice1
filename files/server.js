const http = require("http");

const server = http.createServer( (req, res) => {
    if(req.url === "/"){
       res.setHeader("Content-Type", "text/plain"); 
       res.write("The world is very cruel");
       res.end();
    }
    else if(req.url === "/store"){
        res.setHeader("Content-Type", "text/html");
        res.write("<h1> This is our products</h1>");
        res.end();
    }
    else if(req.url === "/product"){
        res.setHeader("Content-Type", "Text/plain");
        res.write("this is a product page");
        res.end();
    }
})

port = 3000;
server.listen(port, () => {
    console.log(`${port} is listening`);
})
