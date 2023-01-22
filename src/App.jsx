import { Route, Switch } from "react-router-dom";

import Login from "./components/login/Login";
import Sidebar from "./components/layout/Sidebar";
import Home from "./pages/Home";
import AllMachines from "./pages/machines/AllMachines";
import AddMachine from "./pages/machines/AddMachine";
import AddUser from "./pages/users/AddUser";
import AllUsers from "./pages/users/AllUsers";

function App() {
  return (
    <div>
      <Sidebar deactivated>
        <Switch>
          <Route path="/" exact>
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
        </Switch>
      </Sidebar>

      <Route path="/login" exact>
        <Login />
      </Route>
    </div>
  );
}

export default App;
