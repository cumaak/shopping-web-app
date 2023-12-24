import React from 'react'
import { IProduct } from '../types/Types'
import { Rating } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { RootState } from '../redux/store'
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { addToFav, deleteFromFav } from '../redux/features/favListSlice'

interface IProductCardProps {
  product: IProduct
}
const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch()
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
    <div className='relative'>
      <a href={`/products/${product.id}`} className='border flex flex-col h-80 sm:h-[600px] lg:h-[400px] text-sm rounded-lg mx-1 shadow'>
        <div className='w-full h-1/2 sm:h-4/5 lg:h-3/5'>
          <img src={product.thumbnail} alt={product.title} className='object-contain h-full w-full border' />
        </div>
        <div className='flex flex-col justify-between w-full h-1/2 sm:h-1/5 lg:h-2/5 p-2'>
          <div className='flex flex-col gap-1'>
            <span><span className='font-bold'>{product.brand}</span> {product.title}</span>
            <Rating name="half-rating-read" defaultValue={product.rating} precision={0.1} size='small' readOnly />
          </div>
          <div className='flex flex-col'>
            <span className='line-through'>${Math.ceil(product.price + product.price * (product.discountPercentage / 100))}.99</span>
            <span className='text-orange-600 font-bold'>${product.price}.99</span>
          </div>
        </div>
      </a>
      <button onClick={() => { addFavorites(product) }} className='absolute top-0 right-1 text-orange-600 rounded-2xl bg-gray-200 p-2 m-1'>{favList.includes(product) == true ? <FaHeart size={17} /> : <FaRegHeart size={17} />}
      </button>
    </div>
  )
}

export default ProductCard