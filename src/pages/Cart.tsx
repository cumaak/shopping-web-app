import React from 'react'
import { IProductState } from '../types/Types'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { RootState } from '../redux/store'
import { FaTrashAlt } from "react-icons/fa";
import { decrementAmount, deleteFromCart, incrementAmount } from '../redux/features/cartListSlice';

const Cart: React.FC = () => {
    const dispatch = useAppDispatch()
    const cartList: Array<IProductState> = useAppSelector((state: RootState) => state.cartList.products)
    let totalPrice:number = 0 

    cartList.forEach((product) => {
        totalPrice += product.product.price * product.amount
    })

  return (
    <main className='px-4 lg:px-40 pb-40 flex flex-col gap-4 relative'>
        <h3 className='font-bold text-lg'>My Cart</h3>
        {cartList.map((product)=>{
            return(
                <div key={product.product.id} className='flex border rounded-md shadow-md p-1 w-full text-sm'>
                    <a href={`/products/${product.product.id}`}  className='w-1/3 lg:w-1/4 h-24 lg:h-56 border my-4 lg:my-0'>
                        <img className='object-contain w-full h-full' src={product.product.thumbnail} alt={product.product.title} />
                    </a>
                    <div className='flex flex-col justify-between w-2/3 lg:w-3/4 p-1 pl-3 lg:pl-8 lg:p-5'>
                        <div className='flex justify-between w-full'>
                            <a href={`/products/${product.product.id}`} className='truncate w-5/6'><span className='font-semibold'>{product.product.brand}</span><span className='text-gray-600'> {product.product.title}</span></a>
                            <button onClick={()=>{dispatch(deleteFromCart(product.product))}} className='text-orange-600'><FaTrashAlt size={20}/></button>
                        </div>
                        <div className='flex justify-between items-end'>
                            <div className='flex items-center gap-3 px-1 border rounded-xl'>
                                <span onClick={()=>dispatch(decrementAmount(product.product))} className='text-orange-600 font-bold text-base'>-</span>
                                <span className='text-xs'>{product.amount}</span>
                                <span onClick={()=>dispatch(incrementAmount(product.product))} className='text-orange-600 font-bold text-base'>+</span>
                            </div>
                            <span className='text-orange-600 font-semibold'>${product.product.price}</span>
                        </div>
                    </div>
                </div>
            )
        })}
        <div className='flex justify-between fixed w-screen left-0 bg-white bottom-[--navbar-height] lg:bottom-0 py-2 lg:py-5 px-4 lg:px-8 border text-sm'>
            <div className='flex flex-col'>
                <span>Total</span>
                <span className='text-orange-600 font-bold'>${totalPrice}</span>
            </div>
            <button className='bg-orange-600 hover:bg-orange-700 border rounded-lg px-12 text-white'>Confirm Cart</button>
        </div>
    </main>
  )
}

export default Cart