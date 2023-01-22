import { useHistory } from "react-router-dom";

import CheckIfLoggedIn from "../../components/login/CheckIfLoggedIn";
import NewMachineForm from "../../components/add/NewMachineForm";

function AddMachine() {
  CheckIfLoggedIn();
  const history = useHistory();

  function addMachineHandler(machine) {
    fetch(
      "https://react-getting-started-bf81d-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(machine),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <NewMachineForm onAddUser={addMachineHandler} />
    </section>
  );
}

export default AddMachine;
