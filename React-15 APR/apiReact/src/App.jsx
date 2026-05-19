import  { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }


  const isLoggedIn = false;
  const showMessage = true;
  // if(isLoggedIn){
  //   return <h1>Welcome to Dashboard</h1>
  // }else{
  //   return <h1>Please login to continue</h1>
  // }

  return (
    <>
    {isLoggedIn ? <h1>Welcome to Dashboard</h1> : <h1>Please login to continue</h1>}
      {showMessage && <h1>Hello, Student</h1>}
      {users.map((user)=>(
        <div key={user.id}>
          <p>{user.name}</p>
          <h3>Username: {user.username}</h3>
          <h4>Email: {user.email}</h4>
        </div>
      ))}
    </>
  )
}

export default App