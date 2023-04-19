import "./App.css";
import EventList from "./components/EventList";
import CitySearch from "./components/CitySearch";

function App() {
  return (
    <section className="App">
      <CitySearch />
      <EventList />
    </section>
  );
}

export default App;
