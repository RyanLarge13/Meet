import React, { Component } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CitySearch />
        <EventList />
      </div>
    );
  }
}

export default App;
