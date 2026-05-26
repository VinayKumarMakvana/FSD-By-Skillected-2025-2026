import { NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <>
        <nav>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </nav>
    </>
  )
}

export default Navbar