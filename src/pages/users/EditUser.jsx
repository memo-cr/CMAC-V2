import { useHistory, useParams, useLocation } from "react-router-dom";

import CheckIfLoggedIn from "../../components/login/CheckIfLoggedIn";
import NewUserForm from "../../components/forms/NewUserForm";

function EditUser() {
  CheckIfLoggedIn();
  const location = useLocation();
  const history = useHistory();
  const { id } = useParams();
  function addUserHandler(user) {
    fetch("https://testapi.robli.at/user/update/" + id, {
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
      <NewUserForm
        onAddUser={addUserHandler}
        name={location.state.name}
        surname={location.state.surname}
        email={location.state.email}
        allow={location.state.allow}
      />
    </section>
  );
}

export default EditUser;
