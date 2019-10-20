const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fetch = require('node-fetch');

app.use(express.static('dist/app'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});


const appId = "3266f6cee43fd792d469b260301721c1";
const googleKey = "AIzaSyBe1z7-kcsUos92LHb3Qfq_km1WVLFrdtE";

app.get("/api/data", (req, res) => {
  const {lng, lat} = req.query;

  const weatherDataPromise = fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat || 0}&lon=${lng || 0}&appid=${appId}`).then(res => res.json());
  const elevationDataPromise = fetch(`https://maps.googleapis.com/maps/api/elevation/json?locations=${lat || 0},${lng || 0}&key=${googleKey}`).then(res => res.json());

  Promise.all([weatherDataPromise, elevationDataPromise]).then( data => {
    res.json({
      temp: data[0].main.temp,
      pressure: data[0].main.pressure,
      humidity: data[0].main.humidity,
      elevation: data[1].results[0].elevation,
    })

  })
}) 

app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist/app/index.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  // console.log('Example app listening on port 3000!');
});