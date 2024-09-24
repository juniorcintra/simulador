import React from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App";
import { FormProvider } from "./context/FormContext";
import "@/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>
);
