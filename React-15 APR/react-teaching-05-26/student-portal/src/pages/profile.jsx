import { useLocation } from "react-router-dom";

function Profile(){

  const location = useLocation();

  const user = location.state.user;
  const role = location.state.role;

  return(

    <div>

      <h1>Profile Page</h1>

      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        width="150"
      />

      <h2>Email : {user}</h2>

      <h2>Role : {role}</h2>

      {
        role === "admin"

        ?

        <p>You can manage system data.</p>

        :

        <p>You can access student courses.</p>
      }

    </div>

  )
}

export default Profile;