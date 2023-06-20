import React from "react"
import { Link } from "react-router-dom"

export const NavBar = () => {
  return(
    <nav>
      <Link to='/'>Home</Link>
      <Link to='Tools'>Tools</Link>
      <Link to='Tutorial'>Tutorial</Link>
      <Link to='Admin'>Admin</Link>
    </nav>
  ) 
}