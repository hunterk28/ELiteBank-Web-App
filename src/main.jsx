import { StrictMode, BrowserRouter } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppContextProvider } from "./components/context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <StrictMode>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </StrictMode>
  </>
);
