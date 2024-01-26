const http = require('http');

// Creates an HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello Peter, Welcome to my website!\n');
        res.write("Been a cold few days hasn't it?");
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});
// Starts the server
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
// writes to the conswle
console.log('HTTP Server created');
