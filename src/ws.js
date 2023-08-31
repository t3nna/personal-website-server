const WebSocket = require("ws");
const wsClient = require("./entities/WsClients");

module.exports = (server) => {
  const wsServer = new WebSocket.Server({ server });

  wsServer.on("connection", async (ws, req) => {
    console.log("A client has connected");

    if (req.url === "/logs") {
      wsClient.add(ws);
      ws.on("error", () => {
        ws.close();
      });
      ws.on("close", () => {
        wsClient.remove(ws);
      });
    }
  });
};
