import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);
 const [showCard, setShowCard] = useState(false);
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
    setShowCard(true);
  };

 return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: 40, color: "black" }}>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      {showCard && weatherInfo && <InfoBox info={weatherInfo} />}
    </div>
  );
}
