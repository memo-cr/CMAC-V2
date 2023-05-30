import { useHistory, useParams } from "react-router-dom";

import Sidebar from "../../components/layout/Sidebar";
import CheckIfLoggedIn from "../../components/login/CheckIfLoggedIn";
import EditMachineForm from "../../components/forms/EditMachineForm";

function EditMachine(props) {
  CheckIfLoggedIn();
  let { id } = useParams();
  const history = useHistory();

  function editMachineHandler(machine) {
    fetch("https://testapi.placeholder.at/machine/update/" + id, {
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
        history.replace("/all-machines");
      });
  }

  return (
    <Sidebar>
      <section>
        <EditMachineForm
          onEditMachine={editMachineHandler}
          machineName={props.machineName}
        />
      </section>
    </Sidebar>
  );
}

export default EditMachine;
