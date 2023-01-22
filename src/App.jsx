import { Route, Switch } from "react-router-dom";

import Login from "./components/login/Login";
import Sidebar from "./components/layout/Sidebar";
import Home from "./pages/Home";
import CheckIfLoggedIn from "./components/login/CheckIfLoggedIn";
import AllMachines from "./pages/machines/AllMachines";
import AddMachine from "./pages/machines/AddMachine";
import AddUser from "./pages/users/AddUser";
import AllUsers from "./pages/users/AllUsers";

function App() {
  return (
    <div>
      <Sidebar>
        <Switch>
          <Route path="/" exact render={CheckIfLoggedIn()}>
            <Home />
          </Route>

          <Route path="/add-user" exact>
            <AddUser />
          </Route>

          <Route path="/all-user" exact>
            <AllUsers />
          </Route>

          <Route path="/add-machine" exact>
            <AddMachine />
          </Route>

          <Route path="/all-machines" exact>
            <AllMachines />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </Sidebar>
    </div>
  );
}

export default App;
