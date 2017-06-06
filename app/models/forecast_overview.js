/** 
 * Mongoose Schema for spatial forecast
 * @author Edam Li
 * @version 0.0.3
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var forecastAvailableSchema   = new Schema({
    ID: String,
	info: String,
	from: Date,
	to: Date,
	updated: Date,
	intensity: Number,
	type: String,
	latitude: Number,
	longitude: Number,
	radius: Number,
	points: Array
}, { collection: 'Forecast_Overview' });

module.exports = mongoose.model('Forecast_Overview', forecastAvailableSchema);