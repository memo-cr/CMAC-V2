import "bootstrap/dist/css/bootstrap.min.css";

import { useLocation } from "react-router-dom";
import Moment from "moment";
function LogItem(props) {
  const location = useLocation();
  function getName(item) {
    for (const key in location.state.machines) {
      if (location.state.machines[key][2] == item) {
        return location.state.machines[key][0];
      }
    }
    return "not found";
  }
  return (
    <tr>
      <th>{getName(props.machineID)}</th>
      <th>{Moment(props.startT).format("hh:mm DD/MM/YYYY")}</th>
      <th>{Moment(props.endT).format("hh:mm DD/MM/YYYY")}</th>
      <th>{Moment(props.deltaH + props.deltaM).format("mm:hh")}</th>
    </tr>
  );
}

export default LogItem;
