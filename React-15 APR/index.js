//! -- Day 1 -- ------ React ------

//& what is website? 
// Colection of web page.

//? Type of website.

// Static website -> Only inforation no intrection.
// Dynamic website -> Interaction with user and databace 

//? Website Work

// user open website -> Browser send request to server -> Server Process -> Database fetch data -> Responce

//? Browser job

// read html, applies css and js
// render the page 
// JS -> Logic writen


//^ Problem before react 

// Too much dom coding
// Difficult to manage state
// Difficult to reuse code
// Slow performance

//^ Why react was created ?
// react -> UI builder
// React helps us build website using reusable pieces

//? angular -> Framework 17, 18, 19
//? react -> Library 17, 18, 19


//* React overview 
// components based architecture
// state
// props
// hooks
// spa -> single page application

// website loads once page changes without refresh
// example -> feacebook, instagram, gmailb  

//? React and React vite

//? Why installation of react and vite
//? Why setup needed

// morden js
// compiler
// bundeler
// react and vite setup

// npm -> node package manager

//& comand for React instaletion
// npx creat-react-app@latest (appname)

// npx -> node package runner
// creat-react-app -> react app generator
// at last project name 

//& comand for vite instaletion
// npm creat vite@latest
// enter project name 
// select framework -> react
// select variant -> JavaScript


// * Project Structure

// node modules -> all dependencies

// Public -> static files -> used diractly by browser

// src -> sorce code -> where we write code

// app.jsx -> main component or main screen
// all ui starts here 

// App.css -> styling for app.jsx

// main.jsx -> entry point of application
//             where we render app.jsx to dom

// index.css -> global styling for entire application and index.html.

// index.html -> main html file where we load our react app.


//! -- Day 3 -- ------ Components ------

// react :- collection of components
// components -> reusable plice of code that represent a part of the user interface
// components -. UI block


//& rfc => shortcut of folder structure


// components Benifits -> reusability, maintainability, separation of code, easy to debugging


// component name must start with capital letter

// component must return UI
// Allow other files to use this components 
// rfc -> resct function component export


//* Home work -1
// creat a
// navbar, hero section, footer.jsx

// main.jsx -> app.jsx -> comopnets

// jsx => JavaScript xml (html+js)


//! -- Day 4 -- ------  ------

// ? Props
// desighn -> components
// details -> props

// props -> it is data passed from perent components to child component.

// Props -> information transfer from one components to another component.

// props -> one components 
//          multiple data
/* <Student name="Vinay" city="kota"></Student>
    in student -> 
    <h1>hyy {prop.name}. How are you</h1>
    <p>City: {prop.city}</p>
*/

// app.jsx -> props data -> child component ->

// props behave like object

//* Home Work
//? Make product card component, title, price, description.




//! -- Day 5 -- ------ Pussing image using props ------

// main -> parent (app.jsx) -> child (Student.jsx and details)
// Parant send image
// child diaplay image
// Jo bhi dik raha hai as a props bhejta hai

// child component use to display data
// Props -> data transfer from parent to child 
// in parant component called child component and pass value



// Static -> Only show data
// dynamic -> show data + change data


//! -- Day 6 -- ------ States in React ------

// Normal variable -> static
// State variable -> dynamic

// State =. data that changes and also update ui automatically

// Hooks => Spacial function that gives extra power to component

// useState => A hook that allows us to add state to function components

// Syntax
// const [stateVariable, setStateVariable] = useState(initialValue)

// stateVariable -> Current value of state
// setStateVariable -> Function to update state
// initialValue -> initial value of state

// & Eorking flow
// userClick -> event trigger -> setState -> Comonent re-rander -> ui refresh

// decrcribe button -> decrease count by 1
// multipale time do this work




//! -- Day 6 -- ------ Evant Handling ------

//* onClick :- Envant handler
//* onChange ->
//* onSubmit -> 
//* onMouseEnter ->

// State -> Never Modify state diractly
//  always use setState function to update
//  state trigger re-rendar of component
//  one state -> one resposibility
//  state belong to component where it is defined.



//! -- Day 7 -- ------ Component Life Cycle ------

//* Human -> birth -> growth -> death

//* component -> mount -> update -> unmount

// mounting -> component appears on screen first time
// first rendar -> mount

// update -> component update due to state change or props change
// click counter values change button -> update 

// unmounting -> component remove from screen 
// component removed from screen -> unmount

//! -- Day 8 -- ------ Use effact ------

