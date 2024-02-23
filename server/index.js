const express = require('express');
const path = require('path');

const port = 5555; 

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});
  
app.post('/post', (req, res) => {
  const data = req.body;
  res.json({ message: 'Отримано POST-запит', data });
});

app.listen(port, () => {
  console.log(`Сервер запущено на порті ${port}`);
});

