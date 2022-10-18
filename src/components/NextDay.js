import './NextDay.css'
function NextDay(props){
const path = props.npth;
const date = new Date();
  let day = date.getDate() + 1;
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

return<div>
 <div className="container1">
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
    <div className="container2">
      {path.map((temp) => {
        if (
          `${year}-${month}-${day}` ===
          temp.time.substring(0, temp.time.lastIndexOf("T"))
        ) {
          return <li key={temp.time}>{temp.data.instant.details.air_temperature}</li>;
        } else {
          return null;
        }
      })}
    </div>
    <div className="container3">
      {path.map((wind) => {
        if (
          `${year}-${month}-${day}` ===
          wind.time.substring(0, wind.time.lastIndexOf("T"))
        ) {
          return <li key={wind.time}>{wind.data.instant.details.wind_speed}</li>;
        } else {
          return null;
        }
      })}
    </div>
</div>

}

export default NextDay;