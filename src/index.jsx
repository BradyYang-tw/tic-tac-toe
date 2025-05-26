import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
// index.js or App.js
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
