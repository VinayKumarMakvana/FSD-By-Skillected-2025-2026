//w8 2min
    // recat -> collcttion of components
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
    
    //one componets 
    //multiple data
 
//app.jsx (parent component)->
//  props data-> child componets
 
//props behave like object
 
 
//make product card component
//title price description
 
//main -> parent (app.jsx) -> child (student AND details )
//parent send image
//child display image
 
//card component -> title price description image
//create Pordoct.jsx componet 
//jo bhi dikhana hai as a props bhejna hai
 
//child component use to display data 
//props -> data transfer from parent to child
//in parent compomnt called child component and pass value
 
//userClick -> event trigger -> setState -> 
// component re-render -> ui refresh 
 
//decrease button -> decrease count by 1
 
 
 
 
 
 
 
//static -> only show data
//dynamic -> show data + change data
 
 
//normal variable -> static
//state variable -> dynamic
 
//state -> data that chnages and Update ui automatically
 
//Hooks ->Special function that gives extra power to component
 
//useState -> a hook that allows us to add
//  state to functional components
 
//syntax 
//const [stateVariable, setStateVariable] = useState(initialValue
 
//stateVariable -> current value of state
//setStateVariable -> function to update state
//initialValue -> initial value of state
 
//event handelling
//onClick -> event handler
//onChange -> event handler
//onSubmit -> event handler
//onMouseEnter -> event handler
 
 
 
 
 
//never modify state directly
//always use setState function to update state
//state triggers re-render of component
//one state -> one resposibility
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
//useeffect is a react hook used to perform side efffects after component
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
 
 
//normal useeffect ->  runs every render
//useEffect with empty dependency array -> runs only on first render
//useEffect with dependency -> runs on first render and when
//  dependency changes
 
//list rendering -> display multiple items using data array
 
//map() runs a function for  every item in array and 
// return a new array
 
 
//Q1 what is react?

//q2 what is jsx?

//q3 what is component?

//q4 what is props?

//q5 what is state?

//q6 what is useEffect?

//q7 what is list rendering?
