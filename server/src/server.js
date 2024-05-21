const mongoose = require("mongoose");
const http = require("http");

const PORT = process.env.PORT || 8000;

const MONGO_URL =
  "mongodb+srv://abriel0402:abriel0402@cluster0.lonp6dw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = require("./app.js");
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const sockets = require("./sockets.js");
mongoose.connection.once("open", () => {
  //console.log("mongo db connection ready");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);

  server.listen(PORT)
  sockets.listen(io);

}



startServer();
