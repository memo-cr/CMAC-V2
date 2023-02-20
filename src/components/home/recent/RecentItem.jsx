import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

import Moment from "moment";
function LogItem(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedUsers, setLoadedUsers] = useState([]);
  const [loadedMachineNames, setLoadedMachineNames] = useState([]);

  function getName(item) {
    for (const key in loadedMachineNames) {
      if (loadedMachineNames[key][2] == item) {
        return loadedMachineNames[key][0];
      }
    }
    return "not found";
  }

  function getUser(item) {
    for (const key in loadedUsers) {
      console.log(loadedUsers[key]._id, item);
      if (loadedUsers[0]._id == item) {
        return loadedUsers[key].name + " " + loadedUsers[key].surname;
      }
    }
    return "not found";
  }

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
    return <div></div>;
  }
  return (
    <tr>
      <th>{getUser(props.usrID)}</th>
      <th>{getName(props.machineID)}</th>
      <th>{Moment(props.startT).format("hh:mm DD/MM/YYYY")}</th>
      <th>{Moment(props.endT).format("hh:mm DD/MM/YYYY")}</th>
      <th>{Moment(props.deltaH + props.deltaM).format("mm:hh")}</th>
    </tr>
  );
}

export default LogItem;
