import RecentLogs from "../components/home/recent/RecentLogs";
import CheckIfLoggedIn from "../components/login/CheckIfLoggedIn";
import Container from "react-bootstrap/Container";

import Sidebar from "../components/layout/Sidebar";

function Home() {
  CheckIfLoggedIn();
  return (
    <Sidebar>
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
    </Sidebar>
  );
}

export default Home;
