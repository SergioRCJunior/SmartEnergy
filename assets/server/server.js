const WebSocket = require("ws");
const server = new WebSocket.Server({
  port: 8000,
});

/*
  Informações energia
  watts: "0",
  horas: "0",
  wh: "0",
  kwh: "0",
*/

let sockets = [];
server.on("connection", function (socket) {
  sockets.push(socket);

  socket.on("message", function (msg) {
    sockets.forEach((s) => s.send(msg));
  });

  socket.on("close", function () {
    sockets = sockets.filter((s) => s !== socket);
  });
});

let clients = [
  new WebSocket("ws://localhost:8080"),
  new WebSocket("ws://localhost:8080"),
];
clients.map((client) => {
  client.on("message", (msg) => console.log(msg));
});
// Esperamos o cliente conectar com o servidor usando async/await
await new Promise((resolve) => clients[0].once("open", resolve));
// Imprimi "Hello!" duas vezes, um para cada cliente
clients[0].send("Hello!");
