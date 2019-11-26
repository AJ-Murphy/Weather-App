import React, { Component } from "react";
import Header from "./components/layout/Header";
import Search from "./components/Search";
import Weather from "./components/Weather";
import "./App.css";
import Axios from "axios";

const API_KEY = "3394afafcb6f9adb47cc2f530f3d3d65";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    icon: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    // Prevent page reload
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    )
      .then(res => {
        if (city && country) {
          console.log(res);
          this.setState({
            temperature: res.data.main.temp,
            city: res.data.name,
            country: res.data.sys.country,
            icon: res.data.weather[0].icon,
            description: res.data.weather[0].description,
            error: ""
          });
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: "Error"
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Search getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          icon={this.state.icon}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
