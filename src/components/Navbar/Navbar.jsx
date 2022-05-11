import React from 'react'
import "./Navbar.css"

function Navbar({flag}) {
  return (
    <div className={`${flag?'upper_navbar':'lower_navbar'}`}></div>
  )
}

export default Navbar