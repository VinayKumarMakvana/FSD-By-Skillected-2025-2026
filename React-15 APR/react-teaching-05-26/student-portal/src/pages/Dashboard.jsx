import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

function Dashboard(){

  const location = useLocation();

  const user = location.state.user;
  const role = location.state.role;

  return(

    <div>

      <Navbar />

      <h1>Welcome {user}</h1>

      <h2>Role : {role}</h2>

      {
        role === "admin"

        ?

        <div>
          <h2>Admin Dashboard</h2>

          <ul>
            <li>Manage Students</li>
            <li>Add Courses</li>
            <li>View Reports</li>
          </ul>
        </div>

        :

        <div>
          <h2>Student Dashboard</h2>

          <ul>
            <li>View Courses</li>
            <li>Check Assignments</li>
            <li>Update Profile</li>
          </ul>
        </div>

      }

    </div>

  )
}

export default Dashboard;