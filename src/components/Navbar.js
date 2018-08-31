import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper teal lighten-3">
        <Link to="/" className="brand-logo center">Plant Logs</Link>
        <ul id="nav-mobile" className="right hide-on-small-and-down">
          <li>
            <NavLink to="/conservatory">Conservatory</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
