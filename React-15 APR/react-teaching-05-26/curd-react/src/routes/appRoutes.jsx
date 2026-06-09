import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Students from "../pages/Students";
import About from "../pages/About";

function AppRoutes() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Dashboard />}
      />

      <Route
        path="/students"
        element={<Students />}
      />

      <Route
        path="/about"
        element={<About />}
      />

    </Routes>

  );
}

export default AppRoutes;