import "./Card.css";
function Card(props) {
  const path = props.pth;
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return (
    <div className="container">
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
  );
}

export default Card;
