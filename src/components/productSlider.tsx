import React from 'react'
import { IProductsOfCategory } from '../types/Types';
import ProductCard from './productCard';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IProductSliderProps{
    products: IProductsOfCategory
}
const ProductSlider:React.FC<IProductSliderProps> = ({products}) => {
    
  return (
    <section>
      <Swiper
        loop={true}
        slidesPerView={2.3}
        spaceBetween={2}
        className='my-swiper mb-52'
        breakpoints={{
          640:{
            slidesPerView: 2.2,
            spaceBetween: 10
          },
          1024:{
            slidesPerView: 4.2,
            spaceBetween: 1
          }
        }}
      >
        {products.products.map((product) => {
          return (
            <SwiperSlide key={product.id}><ProductCard product={product}/></SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default ProductSlider