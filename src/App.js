import { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import Card from "./components/Card";
import Temperature from "./components/Temperature";
import Wind from "./components/Wind";
//import Symbol from "./components/Symbol";
import NextDay from "./components/NextDay";
import DayAfterTomorrow from "./components/DayAfterTomorrow";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=43.38&lon=17.59"
    )
      .then((response) => response.json())
      .then((res) => {
        setLoadedData(res);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Is Loading...</p>
      </section>
    );
  }
  const path = loadedData.properties.timeseries;
  return (
    <div className="App">
      <Header></Header>
      <h2>Today</h2>
     
      <div className="container1">
        <h2>Time</h2>
        <Card pth={path}></Card>
      </div>
      <div className="container2">
        <h2>Temperature</h2>
        <Temperature tpth={path}></Temperature>
      </div>
      <div className="container3">
        <h2>Wind</h2>
        <Wind wpth={path}></Wind>
      </div>
      <h2>-----------------</h2>
      <NextDay npth={path}></NextDay>
      <h2>-----------------</h2>
      <DayAfterTomorrow dpth={path}></DayAfterTomorrow>
    </div>
  );
}

export default App;
