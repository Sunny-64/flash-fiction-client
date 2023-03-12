import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {


  return (
    <nav className="grid grid-cols-2  items-center bg-gray-800 px-24 py-6">
      <div className="col-start-1">
        <Link to="/" className="brand text-5xl font-bold">flash-fic</Link>
      </div>
      <div className="col-start-2 flex justify-end pr-14">
        <Link to="#" className="text-lg px-4 py-2 font-medium">Browse</Link>
        <Link to="/login" className="text-lg px-4 py-2 font-medium">Login</Link>
        <Link to="/register" className="text-lg px-4 py-2 font-medium">Register</Link>
        {/* <a href="#" className="text-xl px-4 py-2 font-medium">Profile</a> */}
      </div>
    </nav>
  );
}

export default Navbar
