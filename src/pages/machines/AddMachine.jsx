import { useHistory } from "react-router-dom";

import Sidebar from "../../components/layout/Sidebar";
import CheckIfLoggedIn from "../../components/login/CheckIfLoggedIn";
import NewMachineForm from "../../components/forms/NewMachineForm";

function AddMachine() {
  CheckIfLoggedIn();
  const history = useHistory();

  function addMachineHandler(machine) {
    fetch("https://testapi.robli.at/machine/add", {
      method: "POST",
      body: JSON.stringify(machine),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
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
        <NewMachineForm onAddMachine={addMachineHandler} />
      </section>
    </Sidebar>
  );
}

export default AddMachine;
