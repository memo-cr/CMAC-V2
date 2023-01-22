import { useHistory } from "react";

function MachineDelete(id) {
  const history = useHistory();
  fetch("https://testapi.robli.at/machine/delete/" + id, {
    method: "DELETE",
    headers: { Authorization: localStorage.getItem("token") },
  }).then(() => history.replace("/all-machines"));
}

export default MachineDelete;
