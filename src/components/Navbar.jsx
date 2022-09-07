import React from 'react'

export const Navbar = ({setTitel}) => {
  return (
    <div className="nav">
        <div >
            <input className="search" type="search" placeholder="Search Title" onChange={(e)=>setTitel(e.target.value)} />
            <button className="btn">Search</button>
        </div>
    </div>
  )
}
