import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import { Zoom, Navigation, Pagination, FreeMode, Thumbs } from 'swiper/modules';
import SwiperCore from "swiper";
import { IProduct } from '../types/Types';

interface IImageSliderProps {
  product: IProduct
}
const ImageSlider: React.FC<IImageSliderProps> = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  return (
    <section className='border-b lg:border-none w-full lg:w-2/5'>
      <Swiper
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        slidesPerView={1}
        spaceBetween={30}
        modules={[Zoom, Navigation, Pagination, FreeMode, Thumbs]}
        className="mySwiper h-[400px] lg:h-[500px] !w-full lg:border lg:rounded"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
      >
        {product.images.map((image) => {
          return (
            <SwiperSlide key={product.id} className='p-10'>
              <div className="swiper-zoom-container h-full">
                <img src={image} alt={product.title} className='object-cover w-full h-full' />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={8}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-16 mt-3 !hidden lg:!flex"
      >
        {product.images.map((image) => {
          return (
            <SwiperSlide key={product.id} className='h-full !w-16 border rounded-md p-1'>
              <img src={image} alt={product.title} className='object-contain h-full mx-auto' />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default ImageSlider