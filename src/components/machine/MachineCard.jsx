import "bootstrap/dist/css/bootstrap.min.css";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

function MachineCard(props) {
  const history = useHistory();

  const MachineDelete = (id) => {
    fetch("https://testapi.robli.at/machine/delete/" + id, {
      method: "DELETE",
      headers: { Authorization: localStorage.getItem("token") },
    }).then(() => {
      history.push("/");
      this.forceUpdate();
      history.replace("/all-machines");
    });
  };

  return (
    <div className="p-2 g-3">
      <li className="card shadow-border text-bg-dark border-dark">
        <div className="card-header">
          <CloseButton
            variant="white"
            onClick={() => MachineDelete(props.del)}
            style={{ float: "right" }}
          />
          <h5 className="card-title">{props.name}</h5>
        </div>

        <div className="card-body">
          <p className="card-text">ID: {props.idusr}</p>
        </div>

        <div className="card-footer bg-secondary">
          <Button
            variant="primary"
            onClick={() => {
              history.push("/edit-machine/" + props.del);
            }}
            style={{ width: "150px" }}
          >
            Edit
          </Button>
        </div>
      </li>
    </div>
  );
}

export default MachineCard;
