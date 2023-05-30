import { useHistory } from "react-router-dom";

import LoginForm from "./LoginForm";

function Login() {
  const history = useHistory();

  function loginHandler(logData) {
    fetch("http://testapi.placeholder.at/user/admin/login", {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams(logData),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.access_token != null) {
          localStorage.setItem(
            "token",
            data.token_type + " " + data.access_token
          );
          history.replace("/");
        }
      });
  }

  return (
    <section>
      <LoginForm onLogin={loginHandler} />
    </section>
  );
}

export default Login;
