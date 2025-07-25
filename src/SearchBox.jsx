import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let GEO_API_URL = "http://api.openweathermap.org/geo/1.0/direct";
  const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "2eabcd724a8b13fcf8b7f577e2b80d61";

  const getWeatherInfo = async () => {
    try {
        // Get coordinates from city name
        const geoResponse = await fetch(
            `${GEO_API_URL}?q=${city}&limit=1&appid=${API_KEY}`
        );
        const geoData = await geoResponse.json();

        if (geoData.length === 0) {
            setError(true);
            return null;
        }

        const { lat, lon } = geoData[0];

        // Get weather data from coordinates
        const weatherResponse = await fetch(
            `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        const weatherData = await weatherResponse.json();
        let result = {
            temp: weatherData.main.temp,
            tempMin: weatherData.main.temp_min,
            tempMax: weatherData.main.temp_max,
            humidity: weatherData.main.humidity,
            feelsLike: weatherData.main.feels_like,
            weather: weatherData.weather[0].description,
            city: city
        }

        console.log(result);
        return result;

    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
      return null;
    }
  };


  let handleChange = (event) => {
    setCity(event.target.value);
    setError(false);
  };

  let handleSubmit = async (event) => {
    try{
      event.preventDefault();
      setError(false);
      console.log(city);
      const newInfo = await getWeatherInfo();
      if (newInfo) {
      updateInfo(newInfo);
      setCity(""); 
    } else {
      updateInfo(null);
    }
    }catch(err){
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button><br />
         {error && <b style={{ color: "red" }}>No such place exists in API</b>}
      </form>
    </div>
  );
}
