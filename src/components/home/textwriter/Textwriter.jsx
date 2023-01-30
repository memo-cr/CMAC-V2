import Typewriter from "typewriter-effect/dist/core";

function Typewriter() {
  new Typewriter("#typewriter", {
    strings: ["Hello", "World"],
    autoStart: true,
  });
}
