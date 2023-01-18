import { useRef } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";

function NewUserForm(props) {
  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const mailInputRef = useRef();
  const nfcInputRef = useRef();
  // const allowInputRef= useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredSurname = surnameInputRef.current.value;
    const enteredMail = mailInputRef.current.value;
    const enteredNFC = nfcInputRef.current.value;

    const userData = {
      name: enteredName,
      surname: enteredSurname,
      email: enteredMail,
      nfc: enteredNFC,
      allow: [0, 1, 2],
    };

    props.onAddUser(userData);
  }

  return (
    <div
      className="container"
      style={{ paddingTop: "10vh", paddingLeft: "10vw", width: "100%" }}
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
              Add a new user
            </h2>
          </Row>
          <Row
            style={{ marginLeft: "10px", marginRight: "10px" }}
            className="mb-3"
          >
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Max" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" placeholder="Mustermann" />
            </Form.Group>
          </Row>

          <Form.Group
            style={{ marginLeft: "10px", marginRight: "10px" }}
            className="mb-3"
            controlId="formGridEmail"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="z.B.: m.m@temp.at" />
          </Form.Group>

          <Form.Group
            style={{ marginLeft: "10px", marginRight: "10px" }}
            className="mb-3"
            controlId="formGridAddress2"
          >
            <Form.Label>NFC ID</Form.Label>
            <Form.Control type="text" placeholder="z.B.: 1XXX" />
          </Form.Group>
          <Accordion
            style={{ marginLeft: "10px", marginRight: "10px" }}
            as={Col}
            defaultActiveKey="0"
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>machines</Accordion.Header>
              <Accordion.Body>
                <Form.Check
                  type="switch"
                  id="custom-switch0"
                  label="3D Drucker"
                />
                <Form.Check type="switch" id="custom-switch1" label="Hello" />
                <Form.Check type="switch" id="custom-switch2" label="CNC" />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
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