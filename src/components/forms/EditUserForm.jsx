import { useRef } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function NewUserForm(props) {
  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const mailInputRef = useRef();
  const nfcInputRef = useRef();
  const allow = useRef(props.allow);

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredSurname = surnameInputRef.current.value;
    const enteredMail = mailInputRef.current.value;
    const enteredNFC = nfcInputRef.current.value;

    const checkedMachines = [];
    for (let i in allow.current) {
      if (allow.current[i].checked) {
        checkedMachines.push(i);
      }
    }
    const userData = {
      name: enteredName != "" ? enteredName : props.name,
      surname: enteredSurname != "" ? enteredSurname : props.surname,
      email: enteredMail != "" ? enteredMail : props.email,
      allow: checkedMachines,
    };
    if (enteredNFC != "") {
      userData.nfcid = enteredNFC;
    }
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
              Edit "{props.name + " " + props.surname}"
            </h2>
          </Row>
          <Row
            style={{ marginLeft: "10px", marginRight: "10px" }}
            className="mb-3"
          >
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                ref={nameInputRef}
                placeholder={props.name}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                ref={surnameInputRef}
                placeholder={props.surname}
              />
            </Form.Group>
          </Row>

          <Form.Group
            style={{ marginLeft: "10px", marginRight: "10px" }}
            className="mb-3"
            controlId="formGridEmail"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              ref={mailInputRef}
              placeholder={props.email}
            />
          </Form.Group>

          <Form.Group
            style={{ marginLeft: "10px", marginRight: "10px" }}
            className="mb-3"
            controlId="formGridAddress2"
          >
            <Form.Label>NFC ID</Form.Label>
            <Form.Control
              type="text"
              ref={nfcInputRef}
              placeholder="z.B.: 1XXX"
            />
          </Form.Group>
          <Accordion
            style={{ marginLeft: "10px", marginRight: "10px" }}
            as={Col}
            defaultActiveKey="1"
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>machines</Accordion.Header>
              <Accordion.Body>
                {props.machines.map((item) => (
                  <Form.Check
                    inline
                    type="checkbox"
                    id={item[2] + 1}
                    ref={(element) => {
                      allow.current[item[2]] = element;
                    }}
                    label={item[0]}
                  />
                ))}
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
