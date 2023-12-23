import { IoHome } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

const MobileNavbar: React.FC = () => {
  const {pathname} = useLocation()
  
  return (
    <div className='relative'>
      <nav className='flex justify-between w-full px-5 sm:px-7 py-2 fixed bottom-0 lg:hidden border bg-white z-10'>
        <a href="/">
          <button className={`${pathname == '/' ? "text-orange-600": "text-black"} flex flex-col justify-center items-center`}>{pathname == '/' ? <IoHome size={25}/> : <IoHomeOutline size={25}/>}<span className='text-xs'>Home</span>
          </button>
        </a>
        <a href="/my-favorites">
          <button className={`${pathname == '/my-favorites' ? "text-orange-600": "text-black"} flex flex-col justify-center items-center`}>{pathname == '/my-favorites' ? <FaHeart size={25}/> : <FaRegHeart size={25}/>}<span className='text-xs'>Favorites</span>
          </button>
        </a>
        <a href="/my-cart">
          <button className={`${pathname == '/my-cart' ? "text-orange-600": "text-black"} flex flex-col justify-center items-center`}>{pathname == '/my-cart' ? <RiShoppingCart2Fill size={25}/> : <RiShoppingCart2Line size={25}/>}<span className='text-xs'>My Cart</span>
          </button>
        </a>
        <a href="/sign">
          <button className={`${pathname == '/sign' ? "text-orange-600": "text-black"} flex flex-col justify-center items-center`}>{pathname == '/sign' ? <FaUser size={25}/> : <FaRegUser size={25}/>}<span className='text-xs'>Account</span>
          </button>
          </a>
      </nav>
    </div>
  )
}

export default MobileNavbar