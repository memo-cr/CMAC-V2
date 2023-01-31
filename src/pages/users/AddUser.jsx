import { useHistory } from "react-router-dom";

import CheckIfLoggedIn from "../../components/login/CheckIfLoggedIn";
import NewUserForm from "../../components/forms/NewUserForm";

function AddUser() {
  CheckIfLoggedIn();
  const history = useHistory();

  function addUserHandler(user) {
    fetch("https://testapi.robli.at/user/add", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(function (response) {
        history.replace("/all-user");
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        history.replace("/all-user");
      });
  }

  return (
    <section>
      <NewUserForm onAddUser={addUserHandler} />
    </section>
  );
}

export default AddUser;
