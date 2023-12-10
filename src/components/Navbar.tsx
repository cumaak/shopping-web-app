import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { GrCart } from "react-icons/gr";

const Navbar:React.FC = () => {
  return (
    <nav className='hidden lg:flex gap-12'>
        <button className='flex gap-1.5 items-center'><FaRegUser size={20}/><span className='text-sm font-medium'>Login</span></button>
        <button className='flex gap-1.5 items-center'><GrFavorite size={20}/><span className='text-sm font-medium'>Favorites</span></button>
        <button className='flex gap-1.5 items-center'><GrCart size={20}/><span className='text-sm font-medium'>My Cart</span></button>
    </nav>
  )
}

export default Navbar