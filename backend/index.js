const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5005;

const fs = require('node:fs');
var API_KEY = '';

fs.readFile('apiKey', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  API_KEY = data;
  console.log('API key loaded');
  console.log(data);
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/realtime-weather', async (req, res) => {
  try {
    const [gliwiceResponse, hamburgResponse] = await Promise.all([
      axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Gliwice`),
      axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Hamburg`),
    ]);
    res.json({
      gliwice: gliwiceResponse.data,
      hamburg: hamburgResponse.data,
    });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data?.error?.message || 'Error loading realtime weather data' });
  }
});
app.get('/forecast-weather', async (req, res) => {
  try {
    const [gliwiceResponse, hamburgResponse] = await Promise.all([
      axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Gliwice&days=7&aqi=no&alerts=no`),
      axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Hamburg&days=7&aqi=no&alerts=no`),
    ]);
    res.json({
      gliwiceForecast: gliwiceResponse.data,
      hamburgForecast: hamburgResponse.data,
    });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data?.error?.message || 'Error loading forecast weather data' });
  }
});
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
