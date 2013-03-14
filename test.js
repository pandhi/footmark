var http = require("http");
var port = process.env.PORT || 1337;

function onRequest(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello FootMarks");
  response.end();
}

http.createServer(onRequest).listen(port);

console.log("Server has started.");
