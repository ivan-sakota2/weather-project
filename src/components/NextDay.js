import "./NextDay.css";
function NextDay(props) {
  const path = props.npth;
  const year = props.year;
  const month = props.month;
  const day = props.day;

  return (
    <div className="card">
      <div className="container1">
        <h3>Time</h3>
        {path.map((time) => {
          if (
            `${year}-${month}-${day}` ===
            time.time.substring(0, time.time.lastIndexOf("T"))
          ) {
            return (
              <li key={time.time}>
                {time.time.substring(11, time.time.lastIndexOf(":"))}
              </li>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="container5">
      <h3>Symbol</h3>
          {path.map((temp) => {
            if (
              `${year}-${month}-${day}` ===
              temp.time.substring(0, temp.time.lastIndexOf("T"))
            ) {
              return (
                <li key={temp.time}>
                  {temp.data.next_1_hours ? (
                    <img
                      style={{ height: "15px", width: "15px" }}
                      className={"symbol-icon"}
                      src={`./assets/${temp.data.next_1_hours.summary.symbol_code}.png`}
                    ></img>
                  ) : null}
                </li>
              );
            } else {
              return null;
            }
          })}
        </div>
      <div className="container2">
        <h3>Temp. C°</h3>
        {path.map((temp) => {
          if (
            `${year}-${month}-${day}` ===
            temp.time.substring(0, temp.time.lastIndexOf("T"))
          ) {
            return (
              <li key={temp.time}>
                {Math.round(temp.data.instant.details.air_temperature)} °
              </li>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="container3">
        <h3>Wind m/s</h3>
        {path.map((wind) => {
          if (
            `${year}-${month}-${day}` ===
            wind.time.substring(0, wind.time.lastIndexOf("T"))
          ) {
            return (
              <li key={wind.time}>{wind.data.instant.details.wind_speed}</li>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="container4">
        <h3>Precip. mm</h3>
        {path.map((rain) => {
          if (
            `${year}-${month}-${day}` ===
            rain.time.substring(0, rain.time.lastIndexOf("T"))
          ) {
            return (
              <li key={rain.time}>
                {rain.data.next_1_hours.details.precipitation_amount}
              </li>
            );
          } else {
            return null;
          }
        })}

      
      </div>
    </div>
  );
}

export default NextDay;
