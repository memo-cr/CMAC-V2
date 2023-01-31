import "bootstrap/dist/css/bootstrap.min.css";
import Moment from "moment";

function LogItem(props) {
  return (
    <tr>
      <th>{props.machineID}</th>
      <th>{Moment(props.startT).format("hh:mm DD/MM/YYYY")}</th>
      <th>{Moment(props.endT).format("hh:mm DD/MM/YYYY")}</th>
      <th>
        {props.deltaH}:{props.deltaM}
      </th>
    </tr>
  );
}

export default LogItem;
