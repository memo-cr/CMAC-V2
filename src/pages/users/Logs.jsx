import { useParams, useLocation } from "react-router-dom";

import Sidebar from "../../components/layout/Sidebar";
import LogForm from "../../components/forms/LogForm";
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
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ userID: id }),
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
        <LogForm items={loadedLogs} />
      </section>
    </Sidebar>
  );
}

export default Logs;
