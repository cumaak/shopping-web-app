import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getCategories } from '../redux/features/categoriesSlice';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const CategorySlider:React.FC = () => {
  const dispatch = useAppDispatch()
  const categories: Array<string> = useAppSelector((state) => state.categories.categories)

  useEffect(() => {
    dispatch(getCategories())

  }, [dispatch])

  
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={'auto'}
        spaceBetween={30}
        className="mySwiper !pb-2 !pt-4"
        breakpoints={{
          640: {
            slidesPerView: 'auto',
            spaceBetween: 60,
          },
          1024: {
            slidesPerView: 'auto',
            spaceBetween: 45,
          },
        }}
      >
        {categories.map((category) => {
          return (
            <SwiperSlide key={category} className='!w-auto text-sm font-medium'><a href={`/category/${category}`} className='hover:underline underline-offset-4 hover:text-orange-600'>{category}</a></SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default CategorySlider