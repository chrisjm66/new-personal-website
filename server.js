import express from 'express';
import path from 'path'
const app = express();

app.use(express.static(path.join(path.dirname("."), 'dist')));

app.get('/', function (req, res) {
  res.sendFile(path.join(path.dirname("."), 'dist', 'index.html'));
  console.log("sent!")
});

app.listen(9000);