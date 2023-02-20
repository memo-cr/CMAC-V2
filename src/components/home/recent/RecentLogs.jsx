import { useState, useEffect } from "react";

import RecentItem from "./RecentItem";
function RecentLogs() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedLogs, setLoadedLogs] = useState([]);
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
  useEffect(() => {
    setIsLoading(true);
    fetch("https://testapi.robli.at/log/all", {
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const users = [];
        for (const key in data) {
          const user = {
            ...data[key],
          };

          users.push(user);
        }
        let logs = users.reverse();
        logs = logs.slice(0, 10);
        setIsLoading(false);
        setLoadedLogs(logs);
      });
  }, []);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div className="p-2 g-3" style={{ marginLeft: "-20vw" }}>
      <div className="container">
        <div className="row align-items-center vh-100">
          <div className="col-7 mx-auto">
            <div className="card text-bg-dark border-dark shadow border">
              <div className="card-body d-flex flex-column align-items-center">
                <table className="table table-dark table-striped">
                  <thead>
                    <tr>
                      <th scope="col">user</th>
                      <th scope="col">machine</th>
                      <th scope="col">logged in</th>
                      <th scope="col">logged out</th>
                      <th scope="col">time spent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loadedLogs.map((item) => (
                      <RecentItem
                        key={item.id}
                        usrID={item.usrID}
                        startT={item.startT}
                        endT={item.endT}
                        deltaH={item.deltaH}
                        deltaM={item.deltaM}
                        machineID={item.machineID}
                        allnames={loadedUsers}
                        allmachines={loadedMachineNames}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentLogs;
