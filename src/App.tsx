import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routers/router";

function App() {
  window.document.onload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <RouterProvider router={router} fallbackElement={<div>Error</div>} />
    </>
  );
}

export default App;
