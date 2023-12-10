import React from 'react'
import { IProduct } from '../types/Types'
import { Rating } from '@mui/material'

interface IProductCartProps{
    product: IProduct
}
const ProductCard:React.FC<IProductCartProps> = ({product}) => {
  return (
    <div className='border flex flex-col w-40 sm:w-80 lg:w-64 h-72 sm:h-[600px] lg:h-[400px] text-sm rounded-lg mx-1 shadow'>
      <div className='w-full h-1/2 sm:h-4/5 lg:h-3/5'>
        <img src={product.thumbnail} alt={product.title} className='object-contain h-full w-full border'/>
      </div>
      <div className='flex flex-col justify-between w-full h-1/2 sm:h-1/5 lg:h-2/5 p-2'>
        <div className='flex flex-col gap-1'>
          <span><span className='font-semibold'>{product.brand}</span> {product.title}</span>
          <Rating name="half-rating-read" defaultValue={product.rating} precision={0.1} size='small' readOnly />
        </div>
        <div className='flex flex-col'>
          <span className='line-through'>${Math.ceil(product.price + product.price*(product.discountPercentage/100))}.99</span>
          <span className='text-orange-600 font-medium'>${product.price}.99</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard