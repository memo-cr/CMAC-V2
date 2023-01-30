import { useHistory, useParams } from "react-router-dom";

import CheckIfLoggedIn from "../../components/login/CheckIfLoggedIn";
import EditMachineForm from "../../components/add/EditMachineForm";

function EditMachine(props) {
  CheckIfLoggedIn();
  const { machineName } = (props.location && props.location.state) || {};
  console.log(machineName);
  let { id } = useParams();

  const history = useHistory();

  function editMachineHandler(machine) {
    fetch("https://testapi.robli.at/machine/update/" + id, {
      method: "PUT",
      body: JSON.stringify(machine),
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(function (response) {
        history.replace("/all-machines");
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        history.replace("/all-machines");
      });
  }

  return (
    <section>
      <EditMachineForm
        onEditMachine={editMachineHandler}
        machineName={machineName}
      />
    </section>
  );
}

export default EditMachine;
