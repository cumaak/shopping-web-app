import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className='hidden lg:flex gap-12'>
        <button className='flex gap-1 items-center'><FaRegUser size={20}/><span className='text-sm font-medium'>Login</span></button>
        <button className='flex gap-1 items-center'><GrFavorite size={20}/><span className='text-sm font-medium'>Favorites</span></button>
        <button className='flex gap-1 items-center'><IoCartOutline size={20}/><span className='text-sm font-medium'>My Cart</span></button>
    </nav>
  )
}

export default Navbar