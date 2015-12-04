var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var port = process.env.PORT || 2595;
var app = express();
var bookings = [];
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use('view options' , {
//   layout: false 
// });
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.render('public/index.html');
});

app.get('/books', function(req, res) {
  var movies = require('./data/books.json');
  res.json(movies);
});

app.get('/bookings', function(req, res) {
  res.json(bookings);
});

app.post('/book', function(req, res) {
  var data = {
    'qty':req.body.qty,
    'date':req.body.date,
    'id':req.body.movie_id,
    'name':req.body.movie_name
  };
  bookings.push(data);
  res.json(bookings);
});
app.listen(port);
console.log('Express server running at http://localhost:' + port);