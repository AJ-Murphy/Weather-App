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

function UIweather(icon) {
  const cls = ["day", "night", "clouds", "rain", "thunder", "snow"];

  switch (icon) {
    case "01d":
      document.body.classList.remove(...cls);
      document.body.classList.add(cls[0]);
      return <WiDaySunny size={200} />;
    case "01n":
      document.body.classList.remove(...cls);
      document.body.classList.add(cls[1]);
      return <WiNightClear size={200} />;
    case "02d":
      document.body.classList.remove(...cls);
      document.body.classList.add(cls[2]);
      return <WiDayCloudy size={200} />;
    case "02n":
      document.body.classList.remove(...cls);
      document.body.classList.add(cls[2]);
      return <WiNightAltCloudy size={200} />;
    case "03d":
    case "03n":
      document.body.classList.remove(...cls);
      document.body.classList.add(cls[2]);
      return <WiCloud size={200} />;
    case "04d":
    case "04n":
      document.body.classList.remove(...cls);
      document.body.classList.add(cls[2]);
      return <WiCloudy size={200} />;
    case "09d":
    case "09n":
      document.body.classList.remove(...cls);
      document.body.classList.add(cls[3]);
      return <WiRain size={200} />;
    case "10d":
      document.body.classList.remove(...cls);
      document.body.classList.add(cls[3]);
      return <WiDayRain size={200} />;
    case "10n":
      document.body.classList.remove(...cls);
      document.body.classList.add(cls[3]);
      return <WiNightRain size={200} />;
    case "11d":
    case "11n":
      document.body.classList.remove(...cls);
      document.body.classList.add(cls[4]);
      return <WiThunderstorm size={200} />;
    case "12d":
    case "12n":
      document.body.classList.remove(...cls);
      document.body.classList.add(cls[5]);
      return <WiSnowflakeCold size={200} />;
    case "13d":
    case "13n":
      document.body.classList.remove(...cls);
      document.body.classList.add(cls[2]);
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
    {props.icon && <div className="weather__icon">{UIweather(props.icon)}</div>}
    {props.error && <p>{props.error}</p>}
  </div>
);

export default Weather;
