'use scrict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const config = require('config');

//config
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('common'));
app.use(express.static('public'));

//routes
app.get('/', function (req, res){
   res.render('index', {title: 'Tech Tips', greeting: config.get('mysqlConfig.database')});
});

//errors

//startup
app.listen(app.get('port'), function(){
   console.log('Listening on port:',app.get('port'));
});
