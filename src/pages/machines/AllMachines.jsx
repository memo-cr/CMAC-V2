import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import MachineItem from "../../components/machine/MachineItem";

function AllMachines() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMachines, setLoadedMachines] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://testapi.robli.at/machine/all", {
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
        setIsLoading(false);
        setLoadedMachines(users);
      });
  }, []);

  if (isLoading) {
    return (
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
    );
  }
  return (
    <section style={{ paddingLeft: "20vw" }}>
      <h1>All Machines</h1>
      <MachineItem items={loadedMachines} />
    </section>
  );
}

export default AllMachines;
