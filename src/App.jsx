import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Dashboard from "./components/Dashboard";

const API_KEY = "6c6232f12e33432c817151410252611"; // from weatherapi.com

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [aiSuggestions, setAiSuggestions] = useState("Thinking...");
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    try {
      setError("");
      setAiSuggestions("Thinking...");

      // WeatherAPI accepts city name, zip, or "lat,lon" in q
      let locationParam = query;
      if (query.startsWith("Lat:")) {
        const [latPart, lonPart] = query.split(",");
        const lat = latPart.split(":")[1];
        const lon = lonPart.split(":")[1];
        locationParam = `${lat},${lon}`;
      }

      const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${encodeURIComponent(
        locationParam
      )}&days=3&aqi=no&alerts=no`;

      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok || data.error) {
        setError(data.error?.message || "Failed to fetch weather.");
        setWeatherData(null);
        return;
      }

      // Map WeatherAPI shape to your components
      const normalized = {
        location: data.location,
        current: {
          temp_c: data.current.temp_c,
          feelslike_c: data.current.feelslike_c,
          condition: data.current.condition,
          humidity: data.current.humidity,
          wind_kph: data.current.wind_kph,
          uv: data.current.uv,
          pressure_mb: data.current.pressure_mb,
          vis_km: data.current.vis_km,
          cloud: data.current.cloud,
          gust_kph: data.current.gust_kph,
          precip_mm: data.current.precip_mm,
        },
        forecast: data.forecast.forecastday.map((d) => ({
          date: d.date,
          day: d.date, // or d.day if you want the object
          condition: d.day.condition.text,
          icon: d.day.condition.icon,
          temp_max: d.day.maxtemp_c,
          temp_min: d.day.mintemp_c,
        })),
      };

      setWeatherData(normalized);

      // Simple AI-style suggestion
      const temp = normalized.current.temp_c;
      const condText = normalized.current.condition.text.toLowerCase();
      let suggestion = "Nice weather. Light outdoor activities are fine.";
      if (temp < 10) suggestion = "It is quite cold. Wear warm layers and a jacket.";
      else if (temp > 30) suggestion = "It is hot. Stay hydrated and avoid midday sun.";
      if (condText.includes("rain")) suggestion += " Carry an umbrella due to rain.";
      if (condText.includes("snow")) suggestion += " Roads might be slippery; drive carefully.";
      setAiSuggestions(suggestion);
    } catch (err) {
      setError("Network error. Please try again.");
      setWeatherData(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 p-4 text-white">
      <h1 className="text-center text-4xl font-bold mb-6">CloudMind Weather</h1>

      <SearchBar onSearch={handleSearch} />

      {error && (
        <div className="mt-4 p-3 bg-red-500/70 rounded-xl max-w-md mx-auto text-sm">
          {error}
        </div>
      )}

      <Dashboard weatherData={weatherData} aiSuggestions={aiSuggestions} />
    </div>
  );
}
