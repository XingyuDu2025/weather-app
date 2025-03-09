import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './SearchBar';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = '38f536ebe6036d45f3b608773c4ce501'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
    }
  };

  return (
    <div className="app">
      <div className='container'>
      <div className="search-container">
            <SearchBar onSearch={fetchWeather} />
          </div>
          {weatherData && (
            <div className="weather-container">
              <div className='location'>
                <p>{weatherData.name}</p>
              </div>
              <div className='temp'>
                <h1>{weatherData.main.temp.toFixed()}°C</h1>
              </div>
              <div className='description'>
                <p>{weatherData.weather[0].description}</p>
              </div>
            </div>
            
          )}
    
        {weatherData && (
            <div className="bottom">
              <div>
              <p className='bold'>{weatherData.main.humidity}%</p>
              <p>Humidity</p>
              </div>
              <div >
              <p className='bold'>{weatherData.wind.speed}m/s</p>
              <p>Wind Speed</p>
              </div>
              <div>
                <p className='bold'>{weatherData.main.feels_like.toFixed()}°C</p>
                <p>Feels Like</p>
              </div>
            </div>
        )}
      </div>
    </div>
      
  );
};

export default App;
