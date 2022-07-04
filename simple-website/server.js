const http = require("http");
const fs = require("fs").promises; // enables you to use the file system

const host = 'localhost';
const port = 8000;

// TODO: you need to somehow read the url and serve the correct file
const requestListener = function (req, res) {
    fs.readFile(__dirname + '/index.html').then(contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
    }).catch(err => {
        res.writeHead(500);
        res.end(err);
        return;
    });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});