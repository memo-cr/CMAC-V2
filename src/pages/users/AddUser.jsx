import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

import Sidebar from "../../components/layout/Sidebar";
import CheckIfLoggedIn from "../../components/login/CheckIfLoggedIn";
import NewUserForm from "../../components/forms/NewUserForm";

function AddUser() {
  CheckIfLoggedIn();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMachineNames, setLoadedMachineNames] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const machinenames = [];
    fetch("https://testapi.placeholder.at/machine/all", {
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then((response) => {
        return response.json();
      })
      .then((data1) => {
        for (const key in data1) {
          machinenames.push([
            data1[key].name,
            data1[key]._id,
            data1[key].idusr,
          ]);
        }

        setIsLoading(false);
        setLoadedMachineNames(machinenames);
      });
  }, []);
  function addUserHandler(user) {
    fetch("https://testapi.placeholder.at/user/add", {
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
        history.replace("/all-user");
      });
  }

  if (isLoading) {
    return (
      <Sidebar>
        <section>
          <Spinner
            animation="border"
            style={{
              flex: 1,
              marginTop: "350px",
              marginLeft: "50%",
            }}
          />
        </section>
      </Sidebar>
    );
  }
  return (
    <Sidebar>
      <section>
        <NewUserForm
          onAddUser={addUserHandler}
          name="Max"
          surname="Mustermann"
          email="example@example.com"
          machines={loadedMachineNames}
        />
      </section>
    </Sidebar>
  );
}

export default AddUser;
