function Wind(props) {
  const path = props.wpth;
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return (
    <div>
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
  );
}

export default Wind;
