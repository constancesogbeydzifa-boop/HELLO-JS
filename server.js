require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());   

app.get('/', (req, res) => {
  res.send('MY WEEK 2 API!');
});

app.get('/', (req, res) => {
  res.send('hello');
});


app.post('/user', (req, res) => {
  res.json({echoed: req.body})
 });


app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.send(`Welcome ${id} to my API!`);
});



app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
