import Textwriter from "../components/home/textwriter/Textwriter";
import CheckIfLoggedIn from "../components/login/CheckIfLoggedIn";
import MachineContext from "../store/MachineContext";
import { useContext } from "react";

function Home() {
  CheckIfLoggedIn();
  const machineCtx = useContext(MachineContext);
  console.log(machineCtx.machinenames);
  return (
    <div style={{ marginLeft: "20vw", zIndex: "2" }}>
      <Textwriter></Textwriter>
    </div>
  );
}

export default Home;
