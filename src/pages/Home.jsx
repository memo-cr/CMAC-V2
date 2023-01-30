import Textwriter from "../components/home/textwriter/Textwriter";
import CheckIfLoggedIn from "../components/login/CheckIfLoggedIn";

function Home() {
  CheckIfLoggedIn();
  return (
    <div style={{ marginLeft: "20vw", zIndex: "2" }}>
      <Textwriter></Textwriter>
    </div>
  );
}

export default Home;
