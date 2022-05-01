import * as http from "http";
import { Server } from "socket.io";

const server = http.createServer();
const PORT = 8081;

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("connected", socket.id);
  socket.on("login", (a) => {
    console.log(a);
  });
});

server.listen(PORT, () => {
  console.log(`Socket server connected on port ${PORT}`, PORT);
});
