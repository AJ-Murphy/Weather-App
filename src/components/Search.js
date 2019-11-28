import React from "react";

const Search = props => (
  <form className="search" onSubmit={props.getWeather}>
    <input
      id="search__city"
      className="search__input"
      type="text"
      name="city"
      placeholder="City"
    />
    <input
      id="search__country"
      className="search__input"
      type="text"
      name="country"
      placeholder="Country"
    />
    <button className="btn" id="search__btn">
      Get Weather
    </button>
  </form>
);

export default Search;
