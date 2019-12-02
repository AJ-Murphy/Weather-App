import React from "react";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloud,
  WiCloudy,
  WiRain,
  WiDayRain,
  WiNightRain,
  WiThunderstorm,
  WiSnowflakeCold,
  WiFog
} from "react-icons/wi";

function weatherIcon(icon) {
  switch (icon) {
    case "01d":
      return <WiDaySunny size={200} />;
    case "01n":
      return <WiNightClear size={200} />;
    case "02d":
      return <WiDayCloudy size={200} />;
    case "02n":
      return <WiNightAltCloudy size={200} />;
    case "03d" || "03n":
      return <WiCloud size={200} />;
    case "04d" || "04n":
      return <WiCloudy size={200} />;
    case "09d" || "09n":
      return <WiRain size={200} />;
    case "10d":
      return <WiDayRain size={200} />;
    case "10n":
      return <WiNightRain size={200} />;
    case "11d" || "11n":
      return <WiThunderstorm size={200} />;
    case "12d" || "12n":
      return <WiSnowflakeCold size={200} />;
    case "13d" || "13n":
      return <WiFog size={200} />;
    default:
      return null;
  }
}

const Weather = props => (
  <div className="weather">
    {props.city && props.country && (
      <div className="weather__loc">
        <h2>
          {props.city}, {props.country}
        </h2>
      </div>
    )}
    {props.description && (
      <div className="weather__desc">
        <p>{props.description}</p>
      </div>
    )}
    {props.temperature && (
      <div className="weather__temp">
        <p>
          {props.temperature}
          &deg;
        </p>
      </div>
    )}
    {props.icon && (
      <div className="weather__icon">{weatherIcon(props.icon)}</div>
    )}
    {props.error && <p>{props.error}</p>}
  </div>
);

export default Weather;
