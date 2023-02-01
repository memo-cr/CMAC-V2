import "bootstrap/dist/css/bootstrap.min.css";
import Moment from "moment";
import { names } from "../getMachineNames";
function LogItem(props) {
  return (
    <tr>
      <th>{names[props.machineID][0]}</th>
      <th>{Moment(props.startT).format("hh:mm DD/MM/YYYY")}</th>
      <th>{Moment(props.endT).format("hh:mm DD/MM/YYYY")}</th>
      <th>{Moment(props.deltaH + props.deltaM).format("mm:hh")}</th>
    </tr>
  );
}

export default LogItem;
