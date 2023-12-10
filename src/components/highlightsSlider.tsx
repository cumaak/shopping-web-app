import React from 'react'
import { IProductsOfCategory } from '../types/Types'
import Slider from 'react-slick';

interface IHighlightsSliderProps {
  flashProducts: IProductsOfCategory
}

const HighlightsSlider:React.FC<IHighlightsSliderProps> = ({flashProducts}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplayspeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplay: true,
          autoplayspeed: 3000,
          cssEase: "linear"
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplay: true,
          autoplayspeed: 3000,
          cssEase: "linear"
        }
      }
    ]
  };

  return (
    <section>
      <Slider {...settings} className='my-10'>
        {flashProducts.products.map((product)=>{
          return(
            <div key={product.id} className='!flex items-center bg-orange-600 rounded-md !w-11/12 h-60 sm:h-80 mx-auto p-3 text-white text-sm sm:text-base lg:text-lg'>
              <div className='flex flex-col items-center justify-around w-1/2 h-full pr-3'>
                <h3 className='font-semibold text-center'>{product.title}</h3>
                <span className='flex flex-col items-center'>
                  <span className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{Math.round(product.discountPercentage)}%</span>
                  <span>discount</span>
                </span>
                <span className='flex flex-col font-bold'>
                  <span className='line-through text-center text-xs sm:text-sm lg:text-base'>${Math.ceil(product.price + product.price*(product.discountPercentage/100))}.99</span>
                  <span className='text-base sm:text-lg lg:text-xl text-center'>${product.price}.99</span>
                </span>
              </div>
              <div className='w-1/2 h-full flex items-center justify-center'>
                <img src={product.thumbnail} alt={product.title} className='object-cover h-full rounded-md' />
              </div>
            </div>
          )
        })}
      </Slider>
    </section>
  )
}

export default HighlightsSlider