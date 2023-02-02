import { useHistory, useParams } from "react-router-dom";

import CheckIfLoggedIn from "../../components/login/CheckIfLoggedIn";
import NewUserForm from "../../components/forms/NewUserForm";

function EditUser() {
  CheckIfLoggedIn();
  const history = useHistory();
  const { id } = useParams();
  function addUserHandler(user) {
    fetch("https://testapi.robli.at/update/" + id, {
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

export default EditUser;
