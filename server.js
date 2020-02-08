const 
  express = require('express'), 
  app = express(), 
  logger = require('morgan'),
  mongoose = require('mongoose'),
  bodyParse = require('body-parser'),
  Todo = require('./Models/Todo.js');

mongoose.connect('mongodb://localhost/nodeReview', (err) => {
  console.log(err || "Connected to MongoDB");
});

app.get('/', (req, res) => {
  //might have to change this later for React front end
  res.sendFile(`${__dirname}/public/index.html`)
});

app.get('/todos', (req, res) => {
  Todo.find({}, (err, allTheTodos) => {
    if (err) return console.log(err);
    res.json(allTheTodos);
  })
});

app.post('/todos', (req, res) => {
  Todo.create(req.body, (err, newTodo) => {
    if (err) return console.log(err);
    res.json({message: "Todo created.", todo: newTodo})
  })

});


app.listen(3000, (err) => {
  console.log(err || "Serving up To-Dos, y'all");
});