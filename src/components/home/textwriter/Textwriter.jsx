import { Typewriter } from "react-simple-typewriter";

function Textwriter() {
  return (
    <h1>
      welcome to
      <a style={{ color: "#008d8c" }}>
        <Typewriter words={[" CMAC"]} loop cursor cursorBlinking />
      </a>
    </h1>
  );
}

export default Textwriter;
