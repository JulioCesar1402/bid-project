const Products = require("../models");

module.exports = (io) =>
  io.on("connection", (socket) => {
    socket.on("increasePrice", async ({ id }) => {
      console.log(`Cliente deu um lance no produto ${id}`);
      await Products.increasePrices(id);
      const data = await Products.getById(id);
      io.emit("refreshPrice", data);
    });
  });