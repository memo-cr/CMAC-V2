import { useHistory, useParams, useLocation } from "react-router-dom";

import CheckIfLoggedIn from "../../components/login/CheckIfLoggedIn";
import EditUserForm from "../../components/forms/EditUserForm";

function EditUser() {
  CheckIfLoggedIn();
  const location = useLocation();
  const history = useHistory();
  const { id } = useParams();
  console.log(location.state.allow);
  function addUserHandler(user) {
    fetch("https://testapi.robli.at/user/update/" + id, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
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
      <EditUserForm
        onAddUser={addUserHandler}
        name={location.state.name}
        surname={location.state.surname}
        email={location.state.email}
        allow={location.state.allow}
        machines={location.state.machines}
      />
    </section>
  );
}

export default EditUser;
