import { useHistory } from "react-router-dom";

import CheckIfLoggedIn from "../../components/login/CheckIfLoggedIn";
import NewMachineForm from "../../components/add/NewMachineForm";

function AddMachine() {
  CheckIfLoggedIn();
  const history = useHistory();

  function addMachineHandler(machine) {
    fetch("https://testapi.robli.at/machine/add", {
      method: "POST",
      body: JSON.stringify(machine),
      credentials: "include",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        alert("added " + machine.name);
        history.replace("/");
      });
  }

  return (
    <section>
      <NewMachineForm onAddMachine={addMachineHandler} />
    </section>
  );
}

export default AddMachine;
