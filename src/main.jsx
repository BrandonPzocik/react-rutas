import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./AppRouter.jsx";
import { SessionProvider } from "./contexts/SessionProvider.jsx";

createRoot(document.getElementById("root")).render(
  <SessionProvider>
    <AppRouter />
  </SessionProvider>
);
