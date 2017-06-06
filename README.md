# README #

To Setup the Environment for the first time:
```
#!javascript

npm install
```
To Setup the Intellisense in VisualStudio Code:
```
#!javascript

typings install
```
To Run API:
```
#!javascript

npm start 
```
### Preparing MongoDB
run `npm run load`

This will import all forecast example's data and create necessary indexes.

### Sample query URLs
Get forecast data by ForecastID `http://localhost:8080/api/forecasts/?id=29042a9c-0c5c-4317-b0ad-133260a0d56f`

Filtering both time range and geolocation `http://localhost:8080/api/forecasts/filter?id=29042a9c-0c5c-4317-b0ad-133260a0d56f&longitude=-121&latitude=36&radius=100&tstart=2016-05-02%2009%3A42%3A19&tend=2016-05-03%2009%3A42%3A19`

Timefilter only `http://localhost:8080/api/forecasts/timefilter?id=29042a9c-0c5c-4317-b0ad-133260a0d56f&tstart=2016-05-02%2009%3A42%3A19&tend=2016-05-03%2009%3A42%3A19`

Geofilter only `http://localhost:8080/api/forecasts/geofilter?id=29042a9c-0c5c-4317-b0ad-133260a0d56f&longitude=-121&latitude=36&radius=100`

Return a list of available forecasts `http://localhost:8080/api/forecasts/overview`


### What is this repository for? ###

* Quick summary: USGS API for AAFS
* Version
  0.0.2
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)