let url = "";

import { useState } from "react";

const [isVariable, setVariable] = useState("StartVariable");

useEffect(() => {
  //z.B.: Daten aus der API laden
}, []);

console.log(isVariable, setVariable);
