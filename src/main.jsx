import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { Store } from "./redux/store.js";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>
);
