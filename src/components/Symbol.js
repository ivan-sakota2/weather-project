import Icon from "../assets/clearsky_day.svg";
function Symbol(props) {
  const path = props.spth;
  return (
    <div>
      {path.map((symbol) => {
        console.log(symbol.data.next_1_hours.summary.symbol_code);
        if (symbol.data.next_1_hours.summary.symbol_code === "clearsky_day") {
          return (
            <li>
              <img src={Icon} alt="slika"></img>{" "}
            </li>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Symbol;
