const fs = require('fs');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = 5555; 
server.listen(port, () => {
  console.log(`Сервер запущено на порті ${port}`);
});


const path = require('path');


app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../client/pages/index.html');
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('File not found');
  }
});


const users = [];
const connections = [];







  


