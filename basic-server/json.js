const http = require("http");

const host = 'localhost';
const port = 8000;

// HTTP headers are additional information that can be attached to a request or a response. 
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "This is a JSON response"}`); // this is the JSON that we are sending. 
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});