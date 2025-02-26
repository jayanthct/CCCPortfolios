import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
   <>
   <nav className="navbar flex justify-between px-[10%] py-[2%] items-center bg-[#49462326]">
    <img src={logo} alt="" className="image md:w-[200px] w-[100px]" />
    <button className='bg-[#494623] text-white font-bold flex justify-center items-center w-[120px] h-[52px] rounded-full'>Login</button>
   </nav>
   </>
  )
}

export default Navbar