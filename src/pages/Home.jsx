import CheckIfLoggedIn from "../components/login/CheckIfLoggedIn";

function Home() {
  CheckIfLoggedIn();
  return <div style={{ marginLeft: "20vw", zIndex: "2" }}>Home</div>;
}

export default Home;
