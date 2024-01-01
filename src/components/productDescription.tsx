import React from 'react'
import { IProduct } from '../types/Types'
import { Rating } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addToCart } from '../redux/features/cartListSlice';
import { RootState } from '../redux/store';
import { addToFav, deleteFromFav } from '../redux/features/favListSlice';

interface IProductDescriptionProps {
  product: IProduct
}
const ProductDescription: React.FC<IProductDescriptionProps> = ({ product }) => {
  const dispatch = useAppDispatch()
  const cartList = useAppSelector((state: RootState) => state.cartList.products)
  const favList: Array<IProduct> = useAppSelector((state: RootState) => state.favList.products)

  function addFavorites(product: IProduct) {
    if (!favList.includes(product)) {
      dispatch(addToFav(product))
    }
    else {
      dispatch(deleteFromFav(product))
    }
  }

  return (
    <section className='lg:px-10 flex flex-col gap-2 lg:border-none w-full lg:w-3/5'>
      <div className='pt-4 lg:text-xl'>
        <span className='font-bold'>{product.brand}</span>
        <span> {product.title}</span>
      </div>
      <div className='flex items-center pb-4 gap-1 border-b lg:border-none'>
        <span className='font-bold pt-0.5'>{product.rating}</span>
        <Rating name="half-rating-read" defaultValue={product?.rating} precision={0.1} size='small' readOnly />
        <span className='px-2'>|</span>
        <span onClick={() => { addFavorites(product) }} className='text-orange-600'>{favList.includes(product) === true ? <FaHeart size={17} /> : <FaRegHeart size={17} />}</span>
      </div>
      <div className='pt-6 pb-20 lg:pb-0'>{product.description}</div>
      <div className='fixed lg:static z-20 lg:z-0 bottom-0 left-0 lg:mt-auto lg:mb-36 bg-white w-full px-4 lg:px-0 flex justify-between lg:justify-center items-center py-3 lg:py-0 border lg:border-none'>
        <span className='lg:hidden text-orange-600 font-bold'>${product.price}</span>
        <button onClick={() => dispatch(addToCart(product))} className='px-10 lg:px-36 py-2.5 lg:py-4 lg:mx-auto border rounded-md bg-orange-600 hover:bg-orange-700 text-white  font-semibold lg:font-bold'><ShoppingCartOutlinedIcon className='!hidden lg:!inline mr-3 mb-1' />Add to Cart</button>
      </div>
    </section>
  )
}

export default ProductDescription