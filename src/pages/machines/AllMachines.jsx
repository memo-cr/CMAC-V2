import { useState, useEffect } from "react";

import MachineItem from "../../components/machine/MachineItem";

function AllMachines() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMachines, setLoadedMachines] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-bf81d-default-rtdb.firebaseio.com/meetups.json"
    )
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
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Machines</h1>
      <MachineItem items={loadedMachines} />
    </section>
  );
}

export default AllMachines;
