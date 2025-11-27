import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [locationInput, setLocationInput] = useState("");

  // Handle manual search submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (locationInput.trim()) {
      onSearch(locationInput.trim());
      setLocationInput("");
    }
  };

  // Handle live geolocation
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(2);
          const lon = position.coords.longitude.toFixed(2);
          onSearch(`Lat:${lat},Lon:${lon}`);
        },
        (error) => {
          console.error("Geolocation error:", error);
          alert(
            "Location access denied or failed. Please enter city manually."
          );
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 bg-white/10 backdrop-blur-md rounded-xl p-2 shadow-lg"
      >
        <input
          type="text"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
          placeholder="Enter city or zip code"
          className="flex-1 p-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition"
        >
          Search
        </button>
        <button
          type="button"
          onClick={handleGetLocation}
          className="px-3 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white transition flex items-center"
        >
          {/* location icon svg */}
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          My Location
        </button>
      </form>
    </div>
  );
}
