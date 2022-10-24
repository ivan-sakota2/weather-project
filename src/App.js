import { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";

import NextDay from "./components/NextDay";

function App() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

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
    <div className="app">
      
      <Header></Header>
      <h3>{`Today ${day}. ${date.toLocaleString("default", {
        month: "long",
      })}`}</h3>
      <NextDay npth={path} day={day} month={month} year={year}></NextDay>
      <h3>{` ${day + 1}. ${date.toLocaleString("default", {
        month: "long",
      })}`}</h3>
      <NextDay npth={path} day={day + 1} month={month} year={year}></NextDay>
      <h3>{` ${day + 2}. ${date.toLocaleString("default", {
        month: "long",
      })}`}</h3>
      <NextDay npth={path} day={day + 2} month={month} year={year}></NextDay>
    </div>
  );
}

export default App;
