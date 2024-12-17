import express from 'express';
import path from 'path'
import dotenv from 'dotenv'

const app = express();

app.use(express.static(path.join(path.dirname("."), 'dist')));

dotenv.config()

app.get('/*', function (req, res) {
  res.sendFile(path.join(path.dirname("."), 'dist', 'index.html'));
  console.log("sent!")
});

app.listen(process.env.PORT);

console.log("Listening on port " + process.env.PORT)