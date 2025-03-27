const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5005;
const API_KEY = 'dd1b622140154b2a98d152731251703';

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

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
