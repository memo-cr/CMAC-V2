import Textwriter from "../components/home/textwriter/Textwriter";
import RecentLogs from "../components/home/recent/RecentLogs";
import CheckIfLoggedIn from "../components/login/CheckIfLoggedIn";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  CheckIfLoggedIn();
  return (
    <Container
      style={{
        marginTop: "10px",
        marginLeft: "30vw",
        zIndex: "2",
        position: "fixed",
      }}
    >
      <Textwriter></Textwriter>
      <RecentLogs></RecentLogs>
    </Container>
  );
}

export default Home;
