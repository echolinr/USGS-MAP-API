/** 
 * Mongoose Schema for spatial forecast
 * @author Edam Li
 * @version 0.0.3
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var forecastSchema   = new Schema({
 //    loc: Object,
 //    ForecastVersion: String,
 //    p_MMI: Object,
 //    p_PGA: Object,
 //    tstart: String,
 //    tend: String,
 //    latitude: Number,
 //    longtitude: Number,
 //    Ranges: Array,
 //    ForecastID: String
}, { collection: 'Forecast' });

module.exports = mongoose.model('Forecast', forecastSchema);