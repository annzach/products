require('dotenv').config();
const PORT = process.env.PORT || 8000;

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Organizer = require('./models/productorganizer');

const app = express();


app.set('views','public')
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/productorganizer', require('./routes/productorganizers'));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
})


app.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
});