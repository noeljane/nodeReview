const 
  express = require('express'), 
  app = express(), 
  logger = require('morgan'),
  bodyParse = require('body-parser');


app.listen(3000, (err) => {
  console.log(err || "Serving up To-Dos, y'all");
});