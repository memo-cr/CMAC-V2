import { Route, Switch } from "react-router-dom";

import Login from "./components/login/Login";
import Home from "./pages/Home";
import CheckIfLoggedIn from "./components/login/CheckIfLoggedIn";
import AllMachines from "./pages/machines/AllMachines";
import AddMachine from "./pages/machines/AddMachine";
import AddUser from "./pages/users/AddUser";
import EditUser from "./pages/users/EditUser";
import AllUsers from "./pages/users/AllUsers";
import EditMachine from "./pages/machines/EditMachine";
import Logs from "./pages/users/Logs";

function App() {
  CheckIfLoggedIn();
  return (
    <div>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/`} exact>
          <Home />
        </Route>

        <Route path={`${process.env.PUBLIC_URL}/add-user`} exact>
          <AddUser />
        </Route>

        <Route path={`${process.env.PUBLIC_URL}/all-user`} exact>
          <AllUsers />
        </Route>

        <Route path={`${process.env.PUBLIC_URL}/add-machine`} exact>
          <AddMachine />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/edit-machine/:id`}>
          <EditMachine />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/all-machines`} exact>
          <AllMachines />
        </Route>

        <Route path={`${process.env.PUBLIC_URL}/logs/:id`} exact>
          <Logs />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/edit-user/:id`}>
          <EditUser />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/login`} exact>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
