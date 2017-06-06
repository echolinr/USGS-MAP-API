python util/ETL.py util/exampleforecast.txt
python util/duplicate.py
# mongoimport --db usgs --collection Forecast --drop --file util/forecasts.json
mongoimport --db usgs --collection Forecast --drop --file util/dummy_data.json
mongoimport --db usgs --collection Forecast_Overview --drop --file util/forecast_overview.json
mongo usgs --eval "db.Forecast.createIndex({ \"loc\": \"2d\" })" 