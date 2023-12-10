import { IoSearch } from "react-icons/io5";
import Navbar from './Navbar';
import CategorySlider from './categorySlider';

const Header:React.FC = () => {
    
    return (
        <header className="px-4 lg:px-40 pt-2 lg:pt-8 border-b">
            <div className='flex flex-col lg:flex-row justify-between lg:items-center'>
                <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600'>Shopping</div>
                <div className='border-2 rounded-lg p-1.5 flex m-3 lg:m-0 lg:w-[550px] text-sm'>
                    <button className='flex justify-center items-center text-orange-600'><IoSearch size={25}/></button>
                    <input className='px-2 w-full outline-none' type="text" placeholder='Search...' />
                </div>
                <Navbar />
            </div>
            <CategorySlider/>
        </header>
    )
}

export default Header