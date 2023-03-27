import RecentLogs from "../components/home/recent/RecentLogs";
import CheckIfLoggedIn from "../components/login/CheckIfLoggedIn";
import Container from "react-bootstrap/Container";

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
      <RecentLogs></RecentLogs>
    </Container>
  );
}

export default Home;
