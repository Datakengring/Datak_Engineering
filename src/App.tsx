import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import { router } from "./routers/router";

function App() {
  useEffect(() => {
    router.subscribe(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <>
      <RouterProvider router={router} fallbackElement={<div>Error</div>} />
    </>
  );
}

export default App;