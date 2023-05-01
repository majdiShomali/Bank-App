import { Outlet, Link } from "react-router-dom";
import "./css/navbar.css"
const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='logo'>
        <Link to="/"><img src="./logo512.png" alt="logo" /></Link>
        
        <p>Arabic recipes</p>

        </div>
        <ul className="navlinks" >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/SignUp">SignUp</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;