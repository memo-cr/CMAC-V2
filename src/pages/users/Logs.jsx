import { useParams } from "react-router-dom";

import LogForm from "../../components/logs/LogForm";
import CheckIfLoggedIn from "../../components/login/CheckIfLoggedIn";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";

function Logs() {
  CheckIfLoggedIn();
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedLogs, setLoadedLogs] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://testapi.robli.at/log/user", {
      method: "POST",
      headers: { Authorization: localStorage.getItem("token") },
      body: { userID: id },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const logs = [];
        for (const key in data) {
          const log = {
            id: key,
            ...data[key],
          };

          logs.push(log);
        }
        setIsLoading(false);
        setLoadedLogs(logs);
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
      <LogForm items={loadedLogs} />
    </section>
  );
}

export default Logs;
