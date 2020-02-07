const 
  mongoose = require('mongoose'),
  todoSchema = new mongoose.Schema({
    body: {type: String},
    completed: {type: Boolean, default: false}
  }, {timestamps: true});

  const Todo = mongoose.model('Todo', todoSchema);
  
  module.exports = Todo;