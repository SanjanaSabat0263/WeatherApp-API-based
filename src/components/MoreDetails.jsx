import React from "react";

export default function MoreDetails({ data }) {
  if (!data) return null;

  const { current, location } = data;

  return (
    <div className="p-4 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md w-full max-w-md text-black space-y-3">
      <h3 className="text-lg font-bold mb-1">Advanced Details</h3>

      <div className="text-sm opacity-80">
        Local time: {location.localtime}
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="bg-white/5 p-2 rounded-lg">
          <div className="font-semibold">{current.cloud}%</div>
          <div className="opacity-80 text-xs">Cloud Cover</div>
        </div>
        <div className="bg-white/5 p-2 rounded-lg">
          <div className="font-semibold">{current.gust_kph} km/h</div>
          <div className="opacity-80 text-xs">Wind Gust</div>
        </div>
        <div className="bg-white/5 p-2 rounded-lg">
          <div className="font-semibold">{current.precip_mm} mm</div>
          <div className="opacity-80 text-xs">Precipitation</div>
        </div>
        <div className="bg-white/5 p-2 rounded-lg">
          <div className="font-semibold">{current.vis_km} km</div>
          <div className="opacity-80 text-xs">Visibility</div>
        </div>
      </div>
    </div>
  );
}
