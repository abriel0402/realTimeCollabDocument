function listen(io) {
  console.log("test");
  io.on("connection", (socket) => {
    console.log("user connected");
    console.log(socket.id);

    socket.on("content update", (updatedContent) => {
      io.emit("content update from server", updatedContent);
    });

    console.log(socket);

    socket.on("disconnect", () => {
      console.log("a client disconnected");
    });
  });
}

module.exports = {
  listen,
};
