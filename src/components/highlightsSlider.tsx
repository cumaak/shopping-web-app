import React from 'react'
import { IProductsOfCategory } from '../types/Types'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

interface IHighlightsSliderProps {
  flashProducts: IProductsOfCategory
}

const HighlightsSlider: React.FC<IHighlightsSliderProps> = ({ flashProducts }) => {

  return (
    <section>
      <Swiper 
      loop={true}
      slidesPerView={1}
      spaceBetween={20}
      className='!pb-8 !pt-3 lg:!pt-7'
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }}
      >
        {flashProducts.products.map((product) => {
          return (
            <SwiperSlide key={product.id} className='!flex items-center bg-orange-600 rounded-md !h-60 sm:!h-80 mx-auto p-3 text-white text-sm sm:text-base lg:text-lg'>
              <div className='flex flex-col items-center justify-around w-1/2 h-full pr-3'>
                <h3 className='font-semibold text-center'>{product.title}</h3>
                <span className='flex flex-col items-center'>
                  <span className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{Math.round(product.discountPercentage)}%</span>
                  <span>discount</span>
                </span>
                <span className='flex flex-col font-bold'>
                  <span className='line-through text-center text-xs sm:text-sm lg:text-base'>${Math.ceil(product.price + product.price * (product.discountPercentage / 100))}</span>
                  <span className='text-base sm:text-lg lg:text-xl text-center'>${product.price}</span>
                </span>
              </div>
              <div className='w-1/2 h-full flex items-center justify-center'>
                <img src={product.thumbnail} alt={product.title} className='object-cover h-full rounded-md' />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default HighlightsSlider