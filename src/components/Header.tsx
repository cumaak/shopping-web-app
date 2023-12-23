import { IoSearch } from "react-icons/io5";
import Navbar from './Navbar';
import CategorySlider from "./categorySlider";
import { useState } from "react";


const Header:React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>("")
    
    return (
        <header className="px-4 lg:px-40 pt-2 lg:pt-8 border-b">
            <div className='flex flex-col lg:flex-row justify-between lg:items-center'>
                <a href="/" className='text-2xl md:text-3xl lg:text-4xl font-extrabold text-orange-600 w-max'>Shopping</a>
                <div className='border-2 rounded-lg p-1.5 flex m-3 lg:m-0 xl:w-[370px] 2xl:w-[550px] text-sm'>
                    <a href={`/products/search/${searchValue}`}><button className='flex justify-center items-center text-orange-600'><IoSearch size={25}/></button></a>
                    <input className='px-2 w-full outline-none' type="text" value={searchValue} onChange={e=>setSearchValue(e.target.value)} placeholder='Search...' />
                </div>
                <Navbar />
            </div>
            <CategorySlider/>
        </header>
    )
}

export default Header