import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

import Sidebar from "../../components/layout/Sidebar";
import CheckIfLoggedIn from "../../components/login/CheckIfLoggedIn";
import UserItem from "../../components/items/UserItem";

function AllUsers() {
  CheckIfLoggedIn();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedUsers, setLoadedUsers] = useState([]);
  const [loadedMachineNames, setLoadedMachineNames] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://testapi.robli.at/user/all", {
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const users = [];
        for (const key in data) {
          const user = {
            id: key,
            ...data[key],
          };

          users.push(user);
        }
        const machinenames = [];
        fetch("https://testapi.robli.at/machine/all", {
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
            setLoadedUsers(users);
          });
      });
  }, []);

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
      <section style={{ paddingLeft: "20vw" }}>
        <UserItem items={loadedUsers} machines={loadedMachineNames} />
      </section>
    </Sidebar>
  );
}

export default AllUsers;
