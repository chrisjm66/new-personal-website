import express from 'express';
import path, { dirname } from 'path'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(path.dirname("."), 'dist')));
dotenv.config()

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/contact', function (req, res) {
  console.log("meow")
  res.send("meow")
});

app.listen(process.env.PORT);

console.log("Listening on port " + process.env.PORT)