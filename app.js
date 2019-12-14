const express = require('express');
var cors = require('cors');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

// Database
const db = require('./config/database');

  // Test DB
db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log('Error: ' + err))

//define app
const app = express();

//bodyparser
app.use(bodyParser());

//cors
app.use(cors());

//root path
app.get('/', (req, res) => res.send('INDEX'));

// tv shows routes
app.use('/tv_shows', require('./routes/tv_shows'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));