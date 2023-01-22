import "bootstrap/dist/css/bootstrap.min.css";

import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import NavDropdown from "react-bootstrap/NavDropdown";

function UserCard(props) {
  return (
    <div className="p-2 g-3">
      <li className="card shadow-border text-bg-dark border-dark">
        <div className="card-header">
          <CloseButton variant="white" style={{ float: "right" }} />
          <h5 className="card-title">
            {props.name + " "} {props.surname}
          </h5>
        </div>

        <div className="card-body" style={{}}>
          <p className="card-text">email: {props.email}</p>
        </div>

        <div className="card-footer bg-secondary">
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary">Logs</Button>
            <Button variant="info">Edit</Button>
            <Button variant="dark">
              <NavDropdown
                id="nav-dropdown"
                title="Machines"
                menuVariant="dark"
              >
                {props.allow.map((item) => (
                  <NavDropdown.Item>{item}</NavDropdown.Item>
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
