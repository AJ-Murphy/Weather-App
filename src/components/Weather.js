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
      return <WiDaySunny />;
    case "01n":
      return <WiNightClear />;
    case "02d":
      return <WiDayCloudy />;
    case "02n":
      return <WiNightAltCloudy />;
    case "03d" || "03n":
      return <WiCloud />;
    case "04d" || "04n":
      return <WiCloudy />;
    case "09d" || "09n":
      return <WiRain />;
    case "10d":
      return <WiDayRain />;
    case "10n":
      return <WiNightRain />;
    case "11d" || "11n":
      return <WiThunderstorm />;
    case "12d" || "12n":
      return <WiSnowflakeCold />;
    case "13d" || "13n":
      return <WiFog />;
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
