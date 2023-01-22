import "bootstrap/dist/css/bootstrap.min.css";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";

function MachineCard(props) {
  return (
    <div className="p-2 g-3">
      <li className="card shadow-border text-bg-dark border-dark">
        <div className="card-header">
          <CloseButton variant="white" style={{ float: "right" }} />
          <h5 className="card-title">{props.name}</h5>
        </div>

        <div className="card-body" style={{}}>
          <p className="card-text">ID: {props.idusr}</p>
        </div>

        <div className="card-footer bg-secondary">
          <Button variant="primary">Edit</Button>
        </div>
      </li>
    </div>
  );
}

export default MachineCard;
