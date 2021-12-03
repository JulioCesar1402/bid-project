const express = require('express');

const app = express();

const cors = require('cors');
const server = require('http').createServer(app);
const bidController = require('./controller/bidController');

const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ['GET'],
  },
});

const PORT = 3001;

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
  res.status(200).json({ ok: true })
});

app.use('/bid', bidController);

require("./sockets")(io);

server.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});