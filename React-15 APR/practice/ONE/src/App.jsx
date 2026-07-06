import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Student from './components/Student'
import Product from './components/Product'
import LoginForm from './components/LoginForm'
 
 
 
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // const increase = () => {
  //   setCount(count + 1);
  //   console.log("count", count)
  // };
// console.log("App component rendered")
//   useEffect(() => {
//    // alert("Welcome to React Vite Project")
//     console.log("useEffect called")
//   });
 
//  useEffect(() => {
//    // alert("Welcome to React Vite Project")
//     console.log("useEffect called with empty dependency array")
//   }, []);
//    useEffect(() => {
//    // alert("Welcome to React Vite Project")
//     console.log("useEffect called with count")
//   },[count]);
 
// useEffect(() => {
//   const timer = setInterval(() => {
//     console.log("Interval called")
//   }, 1000);
//   return () => {
//     clearInterval(timer);
//     console.log("Interval cleared")
//   } 
// }, []);
 
const students = ["Skillected", "John", "Jane", "Doe"];
// for(let i=0; i<students.length; i++){
//   console.log(students[i])
// }
students.map((item)=>{
  return console.log(item)
}
)
 
const users = [
  {id:1,name:"Ram",age:22,batch:"B1"},
  {id:2,name:"Amit",age:25,batch:"B2"},
  {id:3,name:"Neha",age:21,batch:"B3"}
];
 
  
  return (
    <div>
      <Navbar></Navbar>  
      <h1 className='tagh1'>Welcome to React Vite Project</h1>
      <p>This is a simple React application created using Vite.</p>
      <p>Vite is a modern build tool that provides fast development and optimized production builds.</p>
      <p>React is a popular JavaScript library for building user interfaces.</p>
      <p>Enjoy building your React applications with Vite!</p>
      {/* <Student name="Sillected" course="React" city="Nagpur"></Student>
      <Student name="John" course="java" city="Pune" image="data:image/jpeg;base64,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"></Student>
      <Student name="Jane" course="Python" city="Mumbai" image={image}></Student>
            */}
      <Product title="Iphone 14 Pro Max" price="$999" description="The latest iPhone with advanced features and stunning design." image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-max-gold-select?wid=940&hei=1112&fmt=png-alpha&.v=1660753619946"></Product>
      <Product title="Samsung Galaxy S23 Ultra" price="$1199" description="The latest Samsung smartphone with advanced features and stunning design." image="https://images.samsung.com/is/image/samsung/p6120/20230228/smartphone-galaxy-s23-ultra-5g-sm-p906w-514874748?$720_576_PNG$"></Product>
      <Navbar></Navbar>
      <Navbar></Navbar>
      <div><h1>Count: {count}</h1>
      <button onClick={() => setCount(count+1)}>Increase</button></div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        {/* //e-> event object -> onChange event trigger -> e.target.value -> get input value 
        // target ->target input element
        // value -> typed text 
        // typing -> onChange event -> read value -> state update -> ui update */}
        <p>Text: {text}</p>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Dark Mode</button>
        <div style={{ backgroundColor: isDarkMode ? 'black' : 
          'white', color: isDarkMode ? 'white' : 'black', padding: '20px', marginTop: '20px' }}>
          <h2>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h2>
          <p>This is an example of {isDarkMode ? 'dark mode' : 'light mode'} using React state.</p>
        </div>
        <h1>student list</h1>
        {students.map((item) => {
          return <h3>{item}</h3>
        })}
        <h1>user list</h1>
        {users.map((user) => {
          return <div key={user.id}>
            <h3>id: {user.id}</h3>
            <h3>Name: {user.name}</h3>
            <p>Age: {user.age}</p>
            <p>Batch: {user.batch}</p>
          </div>
        })}
        <LoginForm></LoginForm>
    </div> 
  )
}
 
export default App