import { useHistory } from "react-router-dom";

import CheckIfLoggedIn from "../../components/login/CheckIfLoggedIn";
import NewUserForm from "../../components/add/NewUserForm";

function AddUser() {
  CheckIfLoggedIn();
  const history = useHistory();

  function addUserHandler(user) {
    fetch(
      "https://react-getting-started-bf81d-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(user),
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
      <NewUserForm onAddUser={addUserHandler} />
    </section>
  );
}

export default AddUser;
