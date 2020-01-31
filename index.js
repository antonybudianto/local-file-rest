const server = require("./server");

server.listen(5000, "0.0.0.0");
console.log("listen *:5000");
console.log(`
  Example:
  curl -F "file=@abc.txt" http://localhost:5000/api/file
`);
