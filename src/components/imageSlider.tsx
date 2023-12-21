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

interface IImageSliderProps{
    images: string[]
}
const ImageSlider:React.FC<IImageSliderProps> = ({images}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  return (
    <section>
        <Swiper
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={30}
        modules={[Zoom, Navigation, Pagination, FreeMode, Thumbs]}
        className="mySwiper2 h-[400px] border rounded"
      >
        {images.map((image) => {
          return (
            <SwiperSlide key={image} className='px-10'>
              <div className="swiper-zoom-container h-full">
                <img src={image} className='object-cover w-full h-full' />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-28 mt-5 !hidden lg:!flex"
      >
        {images.map((image) => {
          return (
            <SwiperSlide key={image} className='h-full !w-28 border'>
              <img src={image} className='object-contain h-full' />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default ImageSlider