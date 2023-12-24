import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { IProduct } from '../types/Types'
import { RootState } from '../redux/store'
import { Rating } from '@mui/material'
import { addToCart } from '../redux/features/cartListSlice'

const Favorites: React.FC = () => {
  const dispatch = useAppDispatch()
  const favList: Array<IProduct> = useAppSelector((state: RootState) => state.favList.products)

  return (
    <main className='px-4 lg:px-40 pb-40 pt-2 flex flex-col gap-4'>
      {favList.map((product) => {
        return (
          <div key={product.id} className='flex border rounded-md shadow-md p-1 w-full text-sm'>
            <a href={`/products/${product.id}`} className='w-1/3 h-24 border my-4'>
              <img className='object-contain w-full h-full' src={product.thumbnail} alt={product.title} />
            </a>
            <div className='flex flex-col justify-between w-2/3 p-1 pl-3'>
              <a href={`/products/${product.id}`} className='flex flex-col w-full'>
                <span className='font-semibold'>{product.brand}</span>
                <span className='text-gray-600 truncate w-5/6'> {product.title}</span>
                <div className='flex items-center text-xs'>
                  <span className='font-bold pt-0.5'>{product.rating}</span>
                  <Rating name="half-rating-read" defaultValue={product?.rating} precision={0.1} size='small' readOnly />
                </div>
              </a>
              <div className='flex justify-between items-end'>
                <span className='text-orange-600 font-semibold'>${product.price}.99</span>
                <button onClick={()=>dispatch(addToCart(product))} className='border border-orange-600 rounded-md px-4 py-0.5 text-orange-600'>Add to Cart</button>
              </div>
            </div>
          </div>
        )
      })}
    </main>
  )
}

export default Favorites