# Fullstack Weather Application

## 🌤️ Overview

This is a fullstack weather application that displays current weather and forecast data for selected cities (Gliwice and Hamburg). It consists of:

- A **Node.js + Express** backend that fetches weather data from the [WeatherAPI](https://www.weatherapi.com/)
- A **React + Vite** frontend that presents the data in a clean and user-friendly interface

## 🛠️ Technologies Used

### Backend:

- Node.js
- Express.js
- Axios (for external API calls)
- CORS

### Frontend:

- React
- Vite
- React Icons

### Data Source:

- [WeatherAPI](https://www.weatherapi.com/)

## How to Run the Application

### Backend

1. Navigate to the backend folder:
   cd backend
2. Install dependencies:
   npm install
3. Go to https://www.weatherapi.com and get your api key
4. Create 'apiKey' file in backend folder and paste your api key there
5. Start the backend server:
   node index.js

### Frontend

1. Navigate to the frontend folder:
   cd frontend
2. Install dependencies:
   npm install
3. Start the frontend development server:
   npm run dev

## Frontend-Backend Communication

- The frontend sends requests to the backend.
- The backend uses Axios to fetch real-time weather data from WeatherAPI.
- The backend then responds with parsed weather data, which the frontend displays.

## Features Implemented

- Current weather display (temperature, condition, city selection)
- Hourly forecast slider with scrollable weather cards
- 7-day forecast with icons and temperature ranges
- Air conditions display (Feels like, Wind, Visibility, UV Index)
- Personalized daily tip based on weather
- Sunrise and sunset times
- City switcher (Gliwice / Hamburg)
- Responsive design for different screen sizes
- Smooth hover effects and icon visuals using React Icons
- Scrollbar customization (minimal and aesthetic)

## Icon Attribution

This project uses icons from [Font Awesome](https://fontawesome.com). The icons utilized in this project are part of the Font Awesome Free icon set, which is licensed under the [Font Awesome Free License](https://fontawesome.com/license/free). All trademarks and copyrights
belong to Font Awesome.
