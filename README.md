# CloudMind Weather

CloudMind Weather is a modern React weather application that delivers real‑time climate information with a clean, distraction‑free interface. It is powered by WeatherAPI and styled with Tailwind CSS for a responsive, fast user experience.

## Features

- Live current weather: temperature, feels like, humidity, wind speed, UV index, and visibility.
- 3‑day forecast with daily conditions, icons, and min/max temperatures.
- Dynamic backgrounds that change based on live weather conditions (sunny, rainy, snowy, cloudy, etc.).
- City / ZIP search plus “My Location” using the browser Geolocation API.
- Minimalist, responsive layout optimized for desktop, tablet, and mobile.

## Tech Stack

| Layer       | Technology                                        |
| ----------- | ------------------------------------------------- |
| Frontend    | React 18 with functional components and Hooks     |
| Build Tool  | Vite for fast dev server and bundling             |
| Styling     | Tailwind CSS + custom utilities                   |
| Icons/Fav   | Custom favicon setup (via favicons.js)            |
| Weather API | WeatherAPI (3‑day forecast endpoint)              |

## Prerequisites

- Node.js (LTS recommended)
- npm (comes with Node.js) or pnpm/yarn
- A free WeatherAPI account and API key

## Installation

1. Clone the repository
```bash
git clone https://github.com/SanjanaSabat0263/WeatherApp-API-based.git
cd WeatherApp-API-based
```

2. Install dependencies
```bash
npm install
# or
# pnpm install
# yarn
```

3. Configure API Key

Create a `.env` file in the project root and add your WeatherAPI key:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

Make sure the app reads the key via `import.meta.env.VITE_WEATHER_API_KEY` (App.jsx uses Vite env variables).

4. Start the dev server
```bash
npm run dev
```

## Project structure (arranged and explained)

cloudmind-weather/ (root)
├─ index.html                  # Vite entry HTML  
├─ package.json                # scripts & dependencies  
├─ vite.config.js              # Vite + React config  
├─ postcss.config.cjs          # Tailwind/PostCSS config (if used)  
├─ tailwind.config.cjs         # Tailwind config  
├─ .env                        # (local) VITE_WEATHER_API_KEY (not checked in)  
├─ src/                        # application source
│  ├─ main.jsx                 # React entry (hydrate / createRoot)
│  ├─ App.jsx                  # Root component: API calls, state & layout
│  ├─ index.css                # Tailwind base + global styles
│  ├─ assets/                  # icons, images, backgrounds
│  ├─ utils/                   # helper utilities (api, formatters, mappings)
│  │  ├─ weatherApi.js         # WeatherAPI request helpers
│  │  └─ backgroundMap.js      # map condition -> background style
│  ├─ components/
│  │  ├─ SearchBar.jsx         # Search input + "My Location" button
│  │  ├─ Dashboard.jsx         # Page layout for cards and suggestions
│  │  ├─ WeatherCard.jsx       # Current weather details component
│  │  ├─ Forecast.jsx          # 3‑day forecast list component
│  │  └─ MoreDetails.jsx       # Extra metrics / expanded view
│  └─ constants/               # any app-wide constants
└─ public/                     # static assets copied to build (favicons, robots)

Notes:
- Keep `.env` out of version control. Add it to `.gitignore`.
- Move any hard-coded API key in `src/App.jsx` into `.env` and use `import.meta.env`.
- `utils/weatherApi.js` should centralize API URLs and response normalization.

## How it works (high level)

- SearchBar captures user input (city or ZIP) or requests geolocation and passes it to App.
- App calls the WeatherAPI via `src/utils/weatherApi.js`, normalizes the response shape, and stores it in state.
- App computes a background style and a short suggestion string based on current conditions.
- Dashboard composes WeatherCard, Forecast, and MoreDetails using the normalized data and makes the layout responsive.

## Development tips

- Use the browser devtools and Vite HMR for rapid iteration.
- Add unit tests for `utils` helpers to keep API normalization stable.
- Keep UI stateless where possible; pass data and event handlers down to presentational components.

## Contributing

Feel free to open issues or PRs for bugs, improvements, or new features. If you'd like help breaking down tasks, open an issue describing what you'd like to change and I can help draft a checklist.

## License

Add your preferred license (MIT, Apache-2.0, etc.) in a LICENSE file.
