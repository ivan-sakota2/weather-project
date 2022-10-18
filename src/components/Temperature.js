import "./Temperature.css";
function Temperature(props) {
  const path = props.tpth;
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return (
    <div>
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
  );
}

export default Temperature;
