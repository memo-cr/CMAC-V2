import { Route, Switch } from "react-router-dom";

import Login from "./components/login/Login";
import Sidebar from "./components/layout/Sidebar";
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
      <Sidebar>
        <Switch>
          <Route path="/CMAC-V2" exact>
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
          <Route path="/edit-machine/:id">
            <EditMachine />
          </Route>
          <Route path="/all-machines" exact>
            <AllMachines />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/logs/:id" exact>
            <Logs />
          </Route>
          <Route path="/edit-user/:id">
            <EditUser />
          </Route>
        </Switch>
      </Sidebar>
    </div>
  );
}

export default App;
