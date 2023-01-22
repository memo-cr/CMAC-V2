import { useRef } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function NewUserForm(props) {
  const nameInputRef = useRef();
  // const allowInputRef= useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const machineData = {
      name: enteredName,
    };

    props.onAddMachine(machineData);
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
        <Form onSubmit={submitHandler}>
          <Row>
            <h2
              style={{
                marginTop: "10px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              Add a new machine
            </h2>
          </Row>
          <Row
            style={{ marginLeft: "10px", marginRight: "10px" }}
            className="mb-3"
          >
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Machine Name</Form.Label>
              <Form.Control
                type="text"
                ref={nameInputRef}
                placeholder="z.B.: 3D Printer"
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

export default NewUserForm;
