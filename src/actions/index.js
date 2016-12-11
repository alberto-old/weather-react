import axios from 'axios';

const API_KEY = 'b297077b49d2fd48270838d4df89dd0a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  // fixed country code as US
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get (url);

  console.log ('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
