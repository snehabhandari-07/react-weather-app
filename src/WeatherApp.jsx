import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    feelsLike: 35.58,
    humidity: 54,
    temp: 32.1,
    tempMax: 32.1,
    tempMin: 32.1,
    weather: "overcast clouds",
    city: "Pune",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Weather App by Sneha</h3>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
