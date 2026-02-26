const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h1>Hello, the current time is ${new Date().toLocaleTimeString()}
  !</h1>`);
});

server.listen(3005, () => console.log("Server running on http://localhost:3005"));