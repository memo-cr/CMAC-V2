import { useRef } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function LoginForm(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  function loginHandler(event) {
    event.preventDefault();

    const enteredUsername = usernameRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const logData = {
      username: enteredUsername,
      password: enteredPassword,
    };

    props.onLogin(logData);
  }

  return (
    <div
      style={{
        paddingTop: "35vh",
        paddingLeft: "10vw",
        width: "100%",
      }}
    >
      <Card className=" row-5 align-items-center col-5 mx-auto ">
        <Form onSubmit={loginHandler}>
          <Row>
            <h2
              style={{
                marginTop: "10px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              Login
            </h2>
          </Row>
          <Row
            style={{ marginLeft: "10px", marginRight: "10px" }}
            className="mb-3"
          >
            <Form.Group as={Col} controlId="formGridName ">
              <Form.Label>username:</Form.Label>
              <Form.Control ref={usernameRef} type="text" />
            </Form.Group>
          </Row>

          <Row
            style={{ marginLeft: "10px", marginRight: "10px" }}
            className="mb-3"
          >
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>password:</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="********"
              />
            </Form.Group>
          </Row>

          <Row style={{ margin: "10px" }}>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Row>
        </Form>
      </Card>
    </div>
  );
}

export default LoginForm;
