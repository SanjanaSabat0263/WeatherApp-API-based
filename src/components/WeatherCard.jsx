import React from "react";

export default function WeatherCard({ data }) {
  if (!data) return null;

  const {
    location,
    current: {
      temp_c,
      feelslike_c,
      condition,
      humidity,
      wind_kph,
      uv,
      pressure_mb,
      vis_km,
    },
  } = data;

  return (
    <div className="p-5 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md w-full max-w-md text-black">
      {/* Location */}
      <h2 className="text-xl font-bold">{location.name}</h2>
      <p className="text-sm opacity-80">
        {location.region}, {location.country}
      </p>

      {/* Main Temperature */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <div className="text-5xl font-semibold">{temp_c}°</div>
          <div className="text-sm opacity-80">Feels like {feelslike_c}°</div>
        </div>

        {/* Weather Icon */}
        <div>
          <img
            src={condition.icon}
            alt={condition.text}
            className="w-20 h-20 drop-shadow-xl"
          />
        </div>
      </div>

      {/* Condition */}
      <div className="mt-2 text-lg font-medium">{condition.text}</div>

      {/* Divider */}
      <div className="my-4 h-px bg-white/20 w-full" />

      {/* Weather Stats */}
      <div className="grid grid-cols-3 gap-3 text-sm text-center">
        <div className="bg-white/5 p-2 rounded-lg">
          <div className="font-semibold">{humidity}%</div>
          <div className="opacity-80 text-xs">Humidity</div>
        </div>
        <div className="bg-white/5 p-2 rounded-lg">
          <div className="font-semibold">{wind_kph} km/h</div>
          <div className="opacity-80 text-xs">Wind</div>
        </div>
        <div className="bg-white/5 p-2 rounded-lg">
          <div className="font-semibold">{uv}</div>
          <div className="opacity-80 text-xs">UV Index</div>
        </div>
        <div className="bg-white/5 p-2 rounded-lg">
          <div className="font-semibold">{pressure_mb} mb</div>
          <div className="opacity-80 text-xs">Pressure</div>
        </div>
        <div className="bg-white/5 p-2 rounded-lg col-span-2">
          <div className="font-semibold">{vis_km} km</div>
          <div className="opacity-80 text-xs">Visibility</div>
        </div>
      </div>
    </div>
  );
}
