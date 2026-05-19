//w8 2min
    // react -> collection of components
    //component -> reusable piece of code that
    //represents a part of the user interface
    //components -> ui block
 
    //components Benefits
    //reusability
    //maintainability
    //separation of 
    //easy to debugging
 
    //component name must start wit capital letter
 
    //component must return ui
    //allow other files to use this component use export default App
    //rfce -> react function component export
 
    //navbar 
 
    //hero section
    //footer.jsx
 
    //main.jsx -> app.jsx ->components
 
 
    //jsx -> javascript xml
    //html + js 
 
 
    //props
    //design -> components
    //details -> props
    
    //props is data passed from parent components to 
    // child components
 
    //props -> information transfer 
    // from one component to another component
    
    //one components 
    //multiple data
 
//app.jsx (parent component)->
//  props data-> child components
 
//props behave like object
 
 
//make product card component
//title price description
 
//main -> parent (app.jsx) -> child (student AND details )
//parent send image
//child display image
 
//card component -> title price description image
//create Product.jsx component 
//jo bhi dikhana hai as a props bhejna hai
 
//child component use to display data 
//props -> data transfer from parent to child
//in parent component called child component and pass value
 
//userClick -> event trigger -> setState -> 
// component re-render -> ui refresh 
 
//decrease button -> decrease count by 1
 
 
 
 
 
 
 
//static -> only show data
//dynamic -> show data + change data
 
 
//normal variable -> static
//state variable -> dynamic
 
//state -> data that changes and Update ui automatically
 
//Hooks ->Special function that gives extra power to component
 
//useState -> a hook that allows us to add
//  state to functional components
 
//syntax 
//const [stateVariable, setStateVariable] = useState(initialValue
 
//stateVariable -> current value of state
//setStateVariable -> function to update state
//initialValue -> initial value of state
 
//event handling
//onClick -> event handler
//onChange -> event handler
//onSubmit -> event handler
//onMouseEnter -> event handler
 
 
 
 
 
//never modify state directly
//always use setState function to update state
//state triggers re-render of component
//one state -> one responsibility
//state belongs to component where it is defined
 
 
 
//component life cycle
//human-> birth -> growth -> death
//component -> mount -> update -> unmount
 
//mounting  -> component appears on screen first time 
//first render -> Mount
 
//update -> component update due to state change or props change
//click counter values changes button -> update
 
//unmounting -> component removed from screen
//component removed from screen -> unmount
 
 
//side effect  means doing something outside of component
//fetching data from api -> side effect
//manipulating dom -> side effect
//setting up subscription -> side effect
//console log -> side effect
//local storage -> side effect
 
//useEffect 
//useEffect is a react hook used to perform side effects after component
//rendering
 
    //syntax
    //useEffect(() => {
      //side effect code here
    //})
    //flow of useEffect
 
//component render 
//ui appear on screen
//useEffect run -> side effect code run
 
//without useEffect -> component render -> ui appear on screen
//with useEffect -> component render -> 
// ui appear on screen -> useEffect run -> side effect code run
 
//dependency array -> useEffect(() => {
  //side effect code here
//}, [dependencies])
//dependency array tells react when to run useEffect
 
//no dependency -> useEffect run after every render
//on first render -> useEffect run only once
//on every update 
//on every state change 
 
 
//empty dependency array -> useEffect run only once on first render
//api call
//initial load
//authentication check
//page initialization
 
 
//normal useEffect ->  runs every render
//useEffect with empty dependency array -> runs only on first render
//useEffect with dependency -> runs on first render and when
//  dependency changes
 
//list rendering -> display multiple items using data array
 
//map() runs a function for  every item in array and 
// return a new array
 
 
//Q1 what is react?
//react is a javascript library for building user interfaces
//react allows us to create reusable components that can be 
//composed together to build complex user interfaces


//q2 what is jsx?
//jsx is a syntax extension for javascript that allows us to write
//html-like code in our javascript files
//jsx makes it easier to create and visualize the structure of our 
//components


//q3 what is component?
//a component is a reusable piece of code that defines the structure and behavior of a part of the user interface


//q4 what is props?
//props is short for properties and is a way to pass data from a parent component to a child component in react
//props allow us to customize the behavior and appearance of a component based on the data passed to it

//q5 what is state?
//state is a built-in object in react that allows components to manage and update their own data
//state is used to store data that can change over time and trigger a re-render of the component when it changes

//q6 what is useEffect?
//useEffect is a react hook used to perform side effects after component rendering
//useEffect allows us to run code that interacts with the outside world, such as fetching data from an API, manipulating the DOM, or setting up subscriptions, after the component has rendered


//q7 what is list rendering?
//list rendering is a technique in react that allows us to display multiple items in a list format by iterating over an array of data and rendering a component for each item in the array


// conditional rendering -> Showing ui based on condition
// user login -> Dashboard
// user not login -> Login page
// data fetching -> loading spinner
// no data -> no data found


// ? API -> bridge between frontend and backend
// npm install axios