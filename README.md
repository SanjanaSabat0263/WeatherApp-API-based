         CloudMind Weather

CloudMind Weather is a modern React weather application that delivers real‑time climate information with a clean, distraction‑free interface. 
It is powered by WeatherAPI and styled with Tailwind CSS for a responsive, fast user experience.

Features:

Live current weather: temperature, feels like, humidity, wind speed, UV index, and visibility.​
3‑day forecast with daily conditions, icons, and min/max temperatures.​
Dynamic backgrounds that change based on live weather conditions (sunny, rainy, snowy, cloudy, etc.).​
City / ZIP search plus “My Location” using the browser Geolocation API.​
Minimalist, responsive layout optimized for desktop, tablet, and mobile

Tech Stack

| Layer       | Technology                                        |
| ----------- | ------------------------------------------------- |
| Frontend    | React 18 with functional components and Hooks.    |
| Build Tool  | Vite 7 for fast dev server and bundling.          |
| Styling     | Tailwind CSS + custom CSS utilities.              |
| Icons/Fav   | Custom favicon setup viafavicons.js.              |
| Weather API | WeatherAPIforecast.jsonendpoint (3‑day forecast). |

Getting Started Prerequisites:-

Node.js (LTS recommended)
A free WeatherAPI account and API key.

Installation:

# Clone the repository
git clone https://github.com/<your-username>/cloudmind-weather.git
cd cloudmind-weather
# Install dependencies
npm install

Configure API Key:
Create a .env file in the project root (or update the constant in src/App.jsx) and add your WeatherAPI key:
VITE_WEATHER_API_KEY=your_api_key_here.

Make sure App.jsx reads the key from import.meta.env.VITE_WEATHER_API_KEY if you switch from the hard‑coded value.

Project Structure:

cloudmind-weather/
├─ index.html              # Vite entry HTML
├─ vite.config.js          # Vite + React config
├─ src/
│  ├─ App.jsx              # Root component, API calls, state & layout
│  ├─ main.jsx             # ReactDOM render entry
│  ├─ index.css            # Tailwind base + global styles
│  ├─ components/
│  │  ├─ SearchBar.jsx     # Search + My Location controls
│  │  ├─ Dashboard.jsx     # Layout for cards and suggestions
│  │  ├─ WeatherCard.jsx   # Current weather details
│  │  ├─ Forecast.jsx      # 3‑day forecast list
│  │  └─ MoreDetails.jsx   # Extra metrics view
└─ ...

How It Works:-

SearchBar captures the user’s city/ZIP or geolocation and passes it to App.​
App normalizes the WeatherAPI response and stores it in state, then computes an “AI‑style” suggestion and a background style based on the current condition.​
Dashboard, WeatherCard, Forecast, and MoreDetails render the structured data into responsive cards.
