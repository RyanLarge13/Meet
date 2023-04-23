import React, { Component } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CitySearch />
        <NumberOfEvents />
        <EventList />
      </div>
    );
  }
}

export default App;
