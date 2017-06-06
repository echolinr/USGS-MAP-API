/** 
 * Example of RESTful API using Express and NodeJS
 * @author Clark Jeria
 * @version 0.0.2
 */

/** BEGIN: Express Server Configuration */
var compression = require('compression')
var cors       = require('cors');
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var environment = process.env.NODE_ENV || 'development';

var mongoose    = require('mongoose');

if(environment != 'development'){  
  mongoose.connect('mongodb://127.0.0.1:27017/usgs');
}else {  
  /** REPLACE WITH SERVER IP */
  mongoose.connect('mongodb://127.0.0.1:27017/usgs');
}
/** END: Express Server Configuration */

/** BEGIN: Express Routes Definition */
var forecasts = require('./routes/forecasts');

app.use(cors());
app.use(compression());

app.use('/api', forecasts);

app.use(function(req, res, next) {
  res.status(404).json({"errorCode": "1012", "errorMessage" : "Invalid Resource Name", "statusCode" : "404"});  
});
/** END: Express Routes Definition */

/** BEGIN: Express Server Start */
app.listen(port);
console.log('Service running on port ' + port);

module.exports = app;
/** END: Express Server Start */