import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <ToastContainer
          theme="dark"
          autoClose={2000}
          closeOnClick
          pauseOnHover={false}
        />
        <App />
      </Provider>
    </HelmetProvider>
  </StrictMode>
);
