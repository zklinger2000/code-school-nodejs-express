var express = require('express');
var app = express();

var logger = require('./logger');

app.use(logger);
// Static middleware serving files from the /public folder
// defaults to serving the index.html file
app.use(express.static('public'));

var blocks = require('./routes/blocks');
app.use('/blocks', blocks);

app.listen(3000, function() {
  console.log('Listening on port 3000 \n');
});