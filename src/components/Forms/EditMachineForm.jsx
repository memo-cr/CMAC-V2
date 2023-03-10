import { useRef } from "react";
import { useLocation } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function EditMachineForm(props) {
  const location = useLocation();
  const nameInputRef = useRef();

  function editHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const machineData = {
      name: enteredName,
    };

    props.onEditMachine(machineData);
  }

  return (
    <div
      style={{
        paddingTop: "35vh",
        paddingLeft: "10vw",
        width: "100%",
      }}
    >
      <Card className="row-5 align-items-center col-5 mx-auto ">
        <Form onSubmit={editHandler}>
          <Row>
            <h2
              style={{
                marginTop: "10px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              Edit "{location.state.username}"
            </h2>
          </Row>
          <Row
            style={{ marginLeft: "10px", marginRight: "10px" }}
            className="mb-3"
          >
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Machine Name</Form.Label>
              <Form.Control
                required
                type="text"
                ref={nameInputRef}
                placeholder={location.state.username}
              />
            </Form.Group>
          </Row>

          <Row style={{ margin: "10px" }}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Row>
        </Form>
      </Card>
    </div>
  );
}

export default EditMachineForm;
