const express = require('express');
const app = express();

app.use('/custom-api', function(req, res, next) {
  console.log(req);
  console.log(res);
  next();
});