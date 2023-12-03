import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { GrCart } from "react-icons/gr";

const MobileNavbar = () => {
  return (
    <nav className='flex justify-between w-screen px-5 sm:px-7 py-2 fixed bottom-0 lg:hidden border'>
        <button className='flex flex-col justify-center items-center'><FaHome size={25}/><span className='text-xs'>Home</span></button>
        <button className='flex flex-col justify-center items-center'><GrFavorite size={25}/><span className='text-xs'>Favorites</span></button>
        <button className='flex flex-col justify-center items-center'><GrCart size={25}/><span className='text-xs'>My Cart</span></button>
        <button className='flex flex-col justify-center items-center'><FaRegUser size={25}/><span className='text-xs'>Account</span></button>
    </nav>
  )
}

export default MobileNavbar