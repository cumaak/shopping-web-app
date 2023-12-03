import {useEffect} from 'react'
import { CiSearch } from "react-icons/ci";
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getCategories } from '../redux/features/categoriesSlice';
import { getProduct } from '../redux/features/singleProductSlice';
import { getSearchResults } from '../redux/features/searchProductsSlice';

const Header = () => {
    const dispatch = useAppDispatch()
    const categories = useAppSelector((state) => state.searchProducts.products)

    useEffect(() => {
        dispatch(getSearchResults("phone"))

    }, [dispatch])
    console.log(categories)
    return (
        <div className='px-4 lg:px-40 py-2 lg:py-8 flex flex-col lg:flex-row justify-between'>
            <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600'>Shopping</div>
            <div className='border-2 rounded-lg p-2.5 flex m-3 lg:m-0 lg:w-[450px]'>
                <button className='flex justify-center items-center text-gray-500'><CiSearch size={25} /></button>
                <input className='px-2 w-full outline-none' type="text" placeholder='Search...' />
            </div>
            <Navbar/>
        </div>
    )
}

export default Header