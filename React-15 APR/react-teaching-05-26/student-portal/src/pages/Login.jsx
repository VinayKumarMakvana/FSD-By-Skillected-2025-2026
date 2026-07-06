import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e){

    e.preventDefault();

    // ADMIN LOGIN
    if(
      email === "admin@gmail.com"
      &&
      password === "1234"
    ){

      navigate("/dashboard",{
        state:{
          user:email,
          role:"admin"
        }
      });

    }

    // STUDENT LOGIN
    else if(
      email === "student@gmail.com"
      &&
      password === "1111"
    ){

      navigate("/dashboard",{
        state:{
          user:email,
          role:"student"
        }
      });

    }

    else{
      alert("Invalid Credentials");
    }

  }

  return(

    <div>

      <h1>Login Page</h1>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>

    </div>

  )
}

export default Login;