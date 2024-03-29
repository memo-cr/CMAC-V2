import { useState, useEffect } from "react";

import Sidebar from "../../components/layout/Sidebar";
import CheckIfLoggedIn from "../../components/login/CheckIfLoggedIn";
import Spinner from "react-bootstrap/Spinner";
import MachineItem from "../../components/items/MachineItem";

function AllMachines() {
  CheckIfLoggedIn();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMachines, setLoadedMachines] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://testapi.placeholder.at/machine/all", {
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
            del: data[key]._id,
            ...data[key],
          };

          users.push(user);
        }
        setIsLoading(false);
        setLoadedMachines(users);
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
      <section style={{ paddingLeft: "18vw" }}>
        <MachineItem items={loadedMachines} />
      </section>
    </Sidebar>
  );
}

export default AllMachines;
