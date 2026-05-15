import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function inc() {
    setCount(count + 1);
    console.log(count + 1);
  }
  
  function dec() {
    setCount(count - 1);
    console.log(count - 1);
  }

  return (
    <>
      <h1>Increment</h1>
      <button onClick={inc}>+ 1</button>
      <h1>Value : {count}</h1>
      <button onClick={dec}>- 1</button>
      <h1>Decrement</h1>
    </>
  );
}

export default App;