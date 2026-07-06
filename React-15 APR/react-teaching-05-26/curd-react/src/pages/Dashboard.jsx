import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Dashboard() {
  const {user1} = useContext(UserContext);



  return (

    <div>

      <h1>
        Dashboard - {user1}
      </h1>

      <h3>
        Welcome to Student Management System
      </h3>

    </div>

  );
}

export default Dashboard;