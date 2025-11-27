import React from "react";

export default function Forecast({ forecast }) {
  if (!forecast || !forecast.length) return null;

  return (
    <div className="p-4 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md w-full max-w-md text-black">
      <h3 className="font-bold mb-3">3-Day Forecast</h3>
      <div className="grid grid-cols-3 gap-3">
        {forecast.map((d, i) => (
          <div
            key={i}
            className="p-3 text-center bg-white/5 rounded-lg backdrop-blur-sm"
          >
            {/* Day */}
            <div className="font-semibold text-sm">
              {new Date(d.date).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </div>

            {/* Icon */}
            {d.icon && (
              <img
                src={d.icon}
                alt={d.condition}
                className="w-10 h-10 mx-auto my-1 drop-shadow-md"
              />
            )}

            {/* Condition */}
            <div className="text-xs opacity-80">{d.condition}</div>

            {/* Temperatures */}
            <div className="mt-2 font-medium text-sm">
              {d.max}° / {d.min}°
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
