// Importing necessary modules and components
import React from 'react'
import Dropdown from '../Dropdown/Dropdown' // Assuming the path is correct for the Dropdown component
import './navbar.css' // Importing the CSS file for styling

// Navbar component
export default function Navbar({ setGroup, setOrder }) {
  return (
    <div id="navbar"> {/* Navbar container */}
      {/* Rendering Dropdown component and passing setGroup and setOrder as props */}
      <Dropdown setGroup={setGroup} setOrder={setOrder} />
    </div>
  )
}
