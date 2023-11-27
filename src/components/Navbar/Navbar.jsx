import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
import './navbar.css'

export default function Navbar({setGroup, setOrder, isBoxVisible, setIsBoxVisible}) {
  return (
    <div id="navbar">
        <Dropdown setGroup={setGroup} setOrder={setOrder} />
    </div>
  )
}
