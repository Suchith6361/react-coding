import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const ExampleUseEffect2 = () => {
  const [city, setCity] = useState("Bangalore");

  const { data: weather, loading, error } = useFetch(
    `https://api.weatherapi.com/v1/current.json?key=d5bbd456e96f4208ba865012253103&q=${city}`
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-500 p-6">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 w-full max-w-md">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          🌦 Today Weather Update
        </h1>

        {/* Dropdown */}
        <div className="flex justify-center mb-6">
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="px-4 py-2 rounded-lg border border-blue-400 bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
          >
            <option value="Bangalore">Bangalore</option>
            <option value="Mysore">Mysore</option>
            <option value="Chennai">Chennai</option>
            <option value="Goa">Goa</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </div>

        {/* Loading & Error */}
        {loading && (
          <p className="text-center text-blue-700 font-medium">Loading Weather...</p>
        )}
        {error && (
          <p className="text-center text-red-500 font-medium">
            Error fetching weather
          </p>
        )}

        {/* Weather Data */}
        {weather && weather.current && (
          <div className="text-center space-y-4">
            <img
              src={`https:${weather.current.condition?.icon}`}
              alt={weather.current.condition?.text}
              className="mx-auto w-24 drop-shadow-md"
            />

            <h2 className="text-2xl font-bold text-blue-700">{city}</h2>
            <p className="text-gray-700 text-lg">{weather.current.condition.text}</p>

            {/* Temperature Section */}
            <div className="flex justify-around mt-4">
              <div className="bg-blue-100 p-4 rounded-xl shadow-sm w-28">
                <p className="text-sm text-gray-600">Temp (°C)</p>
                <p className="text-2xl font-bold text-blue-700">
                  {weather.current.temp_c}°
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-xl shadow-sm w-28">
                <p className="text-sm text-gray-600">Temp (°F)</p>
                <p className="text-2xl font-bold text-blue-700">
                  {weather.current.temp_f}°
                </p>
              </div>
            </div>

            {/* Extra Info */}
            <div className="bg-blue-100 p-4 mt-4 rounded-xl shadow-sm">
              <p className="text-sm text-gray-600">Wind Speed</p>
              <p className="text-xl font-bold text-blue-700">
                {weather.current.wind_kph} km/h
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExampleUseEffect2;
