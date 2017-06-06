var express = require('express');
var router = express.Router();
var Forecast = require('../app/models/forecast');
var Forecast_Overview = require('../app/models/forecast_overview')


// filter forecasts by ForecastID
router.get('/forecasts',function(req, res){
        
        Forecast.find({ ForecastID: req.query.id }, function(err, fc){
            if(err){
                res.status(500).send(err);
            }else{
                res.json(fc);
            }
        });
});

// return a list of available forecast regions
router.get('/forecasts/overview',function(req, res){
    Forecast_Overview.find(function(err, fc){
        if(err){
            res.status(500).send(err);
        }else{
            res.json(fc);
        }
    });
});

// filter result by tstart and tend
router.get('/forecasts/timefilter',function(req, res){
    Forecast.find({ ForecastID: req.query.id, tstart: req.query.tstart, tend: req.query.tend }, function(err, fc){
        if(err){
            res.status(500).send(err);
        }else{
            res.json(fc);
        }
    });
});

// filter result by location and radius
router.get('/forecasts/geofilter',function(req, res){
    var lat = req.query.latitude;
    var long = req.query.longitude;
    var r = req.query.radius
    Forecast.find({ ForecastID: req.query.id, loc : { $near : [ long, lat], $maxDistance: r } }, function(err, fc){
        if(err){
            res.status(500).send(err);
        }else{
            res.json(fc);
        }
    });
});

// filter both time range and geo location
router.get('/forecasts/filter',function(req, res){
    var tstart = req.query.tstart;
    var tend = req.query.tend;
    var lat = req.query.latitude;
    var long = req.query.longitude;
    var r = req.query.radius
    Forecast.find(
        { 
            ForecastID: req.query.id,
            tstart: tstart, 
            tend: tend,
            loc : { $near : [ long, lat ], $maxDistance: r } 
        }, function(err, fc){
        if(err){
            res.status(500).send(err);
        }else{
            res.json(fc);
        }
    });
});

module.exports=router;