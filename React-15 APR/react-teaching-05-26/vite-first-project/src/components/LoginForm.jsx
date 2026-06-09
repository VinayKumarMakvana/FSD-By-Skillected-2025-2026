import React from 'react'
import { useState } from 'react'



function LoginForm() {

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log("Email: ", email);
        console.log("Password: ", password);
        alert(`Email: ${email}, Password: ${password} Login successful!`);
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" value={email} 
        onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" value={phone} 
        onChange={(e)=>setPhone(e.target.value)} />
        <input type="password" value={password} 
        onChange={(e)=>setPassword(e.target.value)} />
        <button>Login</button>
    </form>
    
    </>
  )
}

export default LoginForm