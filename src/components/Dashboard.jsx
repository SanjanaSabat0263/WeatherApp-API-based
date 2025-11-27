import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import Forecast from "./Forecast";
import MoreDetails from "./MoreDetails";

export default function Dashboard({ weatherData, aiSuggestions }) {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  if (!weatherData) return null;

  return (
    <div className="flex flex-col items-center w-full p-4 space-y-6">
      {/* Main Weather Card */}
      <WeatherCard data={weatherData} />

      {/* 3-Day Forecast */}
      {weatherData.forecast && (
        <Forecast
          forecast={weatherData.forecast.map((d) => ({
            date: d.date,
            day: d.day,
            condition: d.condition,
            icon: d.icon,
            max: d.temp_max,
            min: d.temp_min,
          }))}
        />
      )}

      {/* AI Suggestions */}
      <div className="p-4 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md w-full max-w-md">
        <h3 className="text-lg font-bold mb-2">AI Recommendations</h3>
        <p className="text-sm opacity-90 leading-relaxed">
          {aiSuggestions === "Thinking..." ? (
            <span className="animate-pulse">Generating advice...</span>
          ) : (
            aiSuggestions
          )}
        </p>
      </div>

      {/* Toggle More Details */}
      <button
        onClick={() => setShowMoreDetails(!showMoreDetails)}
        className="p-3 w-full max-w-md bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition duration-300 flex justify-center items-center shadow-lg"
      >
        {showMoreDetails ? "Hide Advanced Details" : "More Details (History, Alerts, Marine, etc.)"}
      </button>

      {/* Advanced Details Tabs */}
      {showMoreDetails && <MoreDetails data={weatherData} />}
    </div>
  );
}
