import React, { Component } from "react";

export class Search extends Component {
  render() {
    return (
      <form>
        <input type="search" name="text" placeholder="Search..." />
      </form>
    );
  }
}

export default Search;
