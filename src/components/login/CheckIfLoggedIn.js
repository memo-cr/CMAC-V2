import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function CheckIfLoggedIn() {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      history.push("/login");
    } else {
      fetch("url", {
        headers: { Authorization: localStorage.getItem("token") },
      }).then(function (response) {
        if (response.status === 401) {
          history.push("/login");
        }
      });
    }
  }, []);
}

export default CheckIfLoggedIn;
