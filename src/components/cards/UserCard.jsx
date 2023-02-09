import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router";

import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import NavDropdown from "react-bootstrap/NavDropdown";

function UserCard(props) {
  const history = useHistory();

  function getName(item) {
    for (const key in props.machines) {
      if (props.machines[key][2] == item) {
        return props.machines[key][0];
      }
    }
    return "not found";
  }

  const UserDelete = (id) => {
    fetch("https://testapi.robli.at/user/delete/" + id, {
      method: "DELETE",
      headers: { Authorization: localStorage.getItem("token") },
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="p-2 g-3">
      <li className="card shadow-border text-bg-dark border-dark">
        <div className="card-header">
          <CloseButton
            variant="white"
            onClick={() => {
              UserDelete(props.del);
            }}
            style={{ float: "right" }}
          />
          <h5 className="card-title">
            {props.name + " "} {props.surname}
          </h5>
        </div>

        <div className="card-body" style={{}}>
          <p className="card-text">email: {props.email}</p>
        </div>

        <div className="card-footer bg-secondary">
          <ButtonGroup aria-label="Basic example">
            <Button
              variant="primary"
              onClick={() => {
                history.push({
                  pathname: "/edit-user/" + props.del,
                  state: {
                    name: props.name,
                    surname: props.surname,
                    allow: props.allow,
                    email: props.email,
                    machines: props.machines,
                  },
                });
              }}
            >
              Edit
            </Button>
            <Button
              variant="info"
              onClick={() => {
                history.push({
                  pathname: "/logs/" + props.del,
                  state: {
                    username: props.name + " " + props.surname,
                    machines: props.machines,
                  },
                });
              }}
            >
              Logs
            </Button>
            <Button variant="dark">
              <NavDropdown
                id="nav-dropdown"
                title="Machines"
                menuVariant="dark"
              >
                {props.allow.map((item) => (
                  <NavDropdown.Item>{getName(item)}</NavDropdown.Item>
                ))}
              </NavDropdown>
            </Button>
          </ButtonGroup>
        </div>
      </li>
    </div>
  );
}

export default UserCard;
