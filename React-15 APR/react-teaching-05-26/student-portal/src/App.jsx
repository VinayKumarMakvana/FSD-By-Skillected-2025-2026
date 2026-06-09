import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

import { useRef, useState } from "react";
import useCounter from "./hooks/useCounter";
import useFetch from "./hooks/useFetch";


function App(){

  // const [count,setCount] = useState(0);


  const refCount = useRef(0);

  const inputRef = useRef();

  const timeRef = useRef();

  const startTimer = () => {
    timeRef.current = setInterval(() => {
      console.log("Timer Running...");
    },1000);
  }

  const stopTimer = () => {
    clearInterval(timeRef.current);
    console.log("Timer Stopped");
  }

  const handelFocus = () => {
    inputRef.current.focus();
  }

  const { count, increment, decrement } = useCounter();

  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users")

  if(loading){
    return <h1>Loading...</h1>
  }

  if(error){
    return <h1>Error: {error.message}</h1>
  }



  return(

    //useRef 
    //access html elements directly
    //store values without causing re-render component

    //does not re-render component when value changes
    //used to store values
    //used for backgroud process

    //custom hooks 
    //it is a normal javascript function that uses react hooks

    //use -> starting from use keywords

//step1 useCouter 
//hook create
//hook returns count, increment and decrement functions
//component uses return values




<>
<div>
  <h1>Data from API</h1>
  {
    data.map(user => (
      <div key={user.id}>
        <h2>{user.name}</h2>
        <p>{user.username}</p>
      </div>
    ))
  }
</div>
<h1>{count}</h1>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
<div> </div>
<div>
  <button onClick={startTimer}>Start Timer</button>
  <button onClick={stopTimer}>Stop Timer</button>
</div>
<div>
  
</div>
    <div>
      <input type="text" ref={inputRef} placeholder="Enter something..." />
      <button onClick={handelFocus}>Focus Input</button>
    </div>

    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/profile" element={<Profile />} />

    </Routes>
    </>

  )
}

export default App;