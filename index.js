import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const pessoas = [];

app.post('/pessoas', (req, res) => {
  const pessoa = req.body;
  pessoas.push(pessoa);
  res.send(pessoa);
});

app.get("/forecast", (req, res) => {
    res.send(weather);
});

app.get("/forecast/:day", (req, res) => {
    const id = parseInt(req.params.day);
    const dia = weather.find(item => item.day === id);
    res.send(dia);
});

app.listen(5000);