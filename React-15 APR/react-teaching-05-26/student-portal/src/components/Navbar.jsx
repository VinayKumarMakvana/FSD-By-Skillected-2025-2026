import { Link,useLocation } from "react-router-dom";

function Navbar(){

  const location = useLocation();

  return(

    <div>

      <Link
        to="/dashboard"
        state={location.state}
      >
        Dashboard
      </Link>

      <br /><br />

      <Link
        to="/profile"
        state={location.state}
      >
        Profile
      </Link>

      <br /><br />

      <Link to="/">
        Logout
      </Link>

    </div>

  )
}

export default Navbar;