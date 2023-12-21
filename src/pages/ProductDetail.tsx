import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useParams } from 'react-router-dom';
import { IProduct } from '../types/Types';

import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import { Zoom, Navigation, Pagination, FreeMode, Thumbs } from 'swiper/modules';
import SwiperCore from "swiper";

import axios from 'axios';
import { Rating } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [productDetails, setProductDetails] = useState<IProduct>()
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get<IProduct>(`https://dummyjson.com/products/${id}`)
        setProductDetails(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  }, [id])

  return (
    <main className='flex flex-col lg:flex-row mb-20 lg:mb-0 mt-2 relative'>
      <section className='px-4 xl:px-0 lg:ml-40 border-b lg:border-none w-full lg:w-3/5'>
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
          className="mySwiper h-[400px] lg:h-[500px] !w-full border lg:border lg:rounded"
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
          {productDetails?.images.map((image) => {
            return (
              <SwiperSlide key={productDetails.id} className='p-10 !w-full'>
                <div className="swiper-zoom-container h-full border">
                  <img src={image} alt={productDetails.title} className='object-cover w-full h-full' />
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
          className="mySwiper h-16 mt-5 !hidden lg:!flex"
        >
          {productDetails?.images.map((image) => {
            return (
              <SwiperSlide key={productDetails.id} className='h-full !w-16 border p-1'>
                <img src={image} alt={productDetails.title} className='object-contain h-full mx-auto' />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </section>
      <section className='flex flex-col gap-2 lg:mr-40'>
        <div className='px-4 lg:px-10 pt-4 lg:text-xl'>
          <span className='font-bold'>{productDetails?.brand}</span>
          <span> {productDetails?.title}</span>
        </div>
        <div className='flex items-center px-4 lg:px-10 pb-4 gap-1 border-b lg:border-none'>
          <span className='font-bold pt-0.5'>{productDetails?.rating}</span>
          <Rating name="half-rating-read" defaultValue={productDetails?.rating} precision={0.1} size='small' readOnly />
          <span className='px-2'>|</span>
          <FavoriteBorderIcon />
        </div>
        <div className='px-4 lg:px-10 pt-6'>{productDetails?.description}</div>
        <div className='fixed lg:static z-20 lg:z-0 bottom-0 lg:mt-auto lg:mb-36 bg-white w-full px-4 lg:px-0 flex justify-between lg:justify-center items-center py-3 lg:py-0 border lg:border-none'>
          <span className='lg:hidden text-orange-600 font-bold'>${productDetails?.price}.99</span>
          <button className='px-10 lg:px-36 py-2.5 lg:py-4 lg:mx-auto border rounded-md bg-orange-600 hover:bg-orange-700 text-white  font-semibold lg:font-bold'><ShoppingCartOutlinedIcon className='!hidden lg:!inline mr-3 mb-1' />Add to Cart</button>
        </div>
      </section>
    </main>
  )
}

export default ProductDetail