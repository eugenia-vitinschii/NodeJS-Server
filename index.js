const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New req Recevied!\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        res.end("This is a new node js project: http server");
        break;
      default:
        res.end("SORRY! 404 Not Found");
    }
    res.end("Hello from server!");
  });
});

myServer.listen(8000, () => console.log("Server Started!"));
