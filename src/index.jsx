import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ThemeContextWrapper from "./contexts/ThemeWrapper";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeContextWrapper>
      <App />
    </ThemeContextWrapper>
  </BrowserRouter>
);
