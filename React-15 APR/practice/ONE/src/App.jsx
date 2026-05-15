import React from 'react'
import Student from './components/Student'
import image from './assets/image/image.png'
import Product from './components/Product'
import { useState } from 'react'

export default function App() {
  // eslint-disable-next-line no-unused-vars
  let name = "Skillected"

  const [count, setCount] = useState(0)
  const [text,setText] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(false);

  const increase = () => {
    setCount (count + 1);
    console.log("count", count);
  }




  return (
    <div>
      <Student name="Vinay" age="19" image={image}></Student>
      <Product title="IQOO z10x" price="15,999" description="This phone made by vivo (iqoo).This phone have many features on it in low coast"></Product>
      <div><h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
      <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      {/* e-> event object -> onChange event trigger -> e.text.value -> get input value */}
      {/* Target -> target input element 
          value -> typrd text
          typing -> onVhange revent -> read value -> state update -> ui update */}
      <p>Text: {text}</p>
      </div>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Dark Mode</button>
      <div style={{ backgroundColor: isDarkMode ? 'black' :
      'white', color : isDarkMode ? 'white' : 'black' , padding : '20px', marginTop : '20px'}}> 
      <h2>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h2>
      <p>This is an exmple of {isDarkMode ? 'Dark Mode' : 'Light Mode'} using React state.</p>
      </div>
      </div>
    </div>
  )
}
