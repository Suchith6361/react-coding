import React, { useState, useEffect } from "react";

const ExampleUseEffect = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Bangalore");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherData = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=d5bbd456e96f4208ba865012253103&q=${city}`
        );
        const result = await weatherData.json();
        setWeather(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeather();
  }, );

  return (
    <div className="flex-col text-center mt-10 bg-blue-300 p-10">
      <h1 className="text-green-900 text-2xl">Today Weather Update</h1>

      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="Bangalore">Bangalore</option>
        <option value="Mysore">Mysore</option>
        <option value="Chennai">Chennai</option>
        <option value="Goa">Goa</option>
        <option value="Mumbai">Mumbai</option>
      </select>

      {weather && weather.current ? (
        <div>
          <div>
            <img
              className="content-center flex mx-auto"
              src={`https:${weather.current.condition?.icon}`}
              alt={weather.current.condition?.text || "Weather icon"}
            />
          </div>
          <div className="text-red-500 font-bold"> {city}</div>
          <div>Temp In Celsius: {weather.current.temp_c}</div>
          <div>Temp In Fahrenheit: {weather.current.temp_f}</div>
          <div>Wind Speed: {weather.current.wind_kph}</div>
        </div>
      ) : (
        <div>Weather not found</div>
      )}
    </div>
  );
};

export default ExampleUseEffect;
