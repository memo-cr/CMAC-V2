import "bootstrap/dist/css/bootstrap.min.css";

import Moment from "moment";
function LogItem(props) {
  function getName(item) {
    for (const key in props.allmachines) {
      if (props.allmachines[key][2] == item) {
        return props.allmachines[key][0];
      }
    }
    return "not found";
  }

  function getUser(item) {
    for (const key in props.allnames) {
      console.log(props.allnames[key]._id, item);
      if (props.allnames[0]._id == item) {
        return props.allnames[key].name + " " + props.allnames[key].surname;
      }
    }
    return "not found";
  }
  return (
    <tr>
      <th>{getUser(props.usrID)}</th>
      <th>{getName(props.machineID)}</th>
      <th>{Moment(props.startT).format("hh:mm DD/MM/YYYY")}</th>
      <th>{Moment(props.endT).format("hh:mm DD/MM/YYYY")}</th>
      <th>{Moment(props.deltaH + props.deltaM).format("mm:hh")}</th>
    </tr>
  );
}

export default LogItem;
