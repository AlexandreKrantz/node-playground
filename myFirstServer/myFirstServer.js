const http = require('http');

const host = 'localhost'; 
// The value localhost is a special private address that computers use to refer to themselves. It’s typically the equivalent of the internal IP address 127.0.0.1 and it’s only available to the local computer, not to any local networks we’ve joined or to the internet.

const port = 3000;
// The port is a number that servers use as an endpoint or “door” to our IP address. In our example, we will use port 8000 for our web server. Ports 8080 and 8000 are typically used as default ports in development, and in most cases developers will use them rather than other ports for HTTP servers.

// When we bind our server to this host and port, we will be able to reach our server by visiting http://localhost:8000 in a local browser.

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};
// All request listener functions in Node.js accept two arguments: req and res (we can name them differently if we want). The HTTP request the user sends is captured in a Request object, which corresponds to the first argument, req. The HTTP response that we return to the user is formed by interacting with the Response object in second argument, res.
// The first line res.writeHead(200); sets the HTTP status code of the response. 
// The next line of the function, res.end("My first server!");, writes the HTTP response back to the client who requested it. It also returns data to the client in this case the data is a string.

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
// In the first line, we create a new server object via the http module’s createServer() function. This server accepts HTTP requests and passes them on to our requestListener() function.
// After we create our server, we must bind it to a network address. We do that with the server.listen() method. It accepts three arguments: port, host, and a callback function that fires when the server begins to listen.