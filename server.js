const http = require("http");

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "GET" && parsedUrl.
    pathname === "/get-form") {
      const name = parsedUrl.searchParams.get("name") || "Guest";
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<h1>Hello, ${name}! This data was sent using GET.</h1>`);
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Not Found</h1>");
    }
});

server.listen(3005, () => console.log("Server running on http://localhost:3005"));