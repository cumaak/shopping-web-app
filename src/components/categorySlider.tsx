import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getCategories } from '../redux/features/categoriesSlice';
import Slider from "react-slick";

const CategorySlider = () => {
  const dispatch = useAppDispatch()
  const categories: Array<string> = useAppSelector((state) => state.categories.categories)

  useEffect(() => {
    dispatch(getCategories())

  }, [dispatch])

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 10,
    swipeToSlide: true,
    initialSlide: 0,
    infinite: true,
    variableWidth: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 7,
          swipeToSlide: true,
          initialSlide: 0,
          infinite: true,
          variableWidth: true,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.5,
          swipeToSlide: true,
          initialSlide: 0,
          infinite: true,
          variableWidth: true,
          adaptiveHeight: true
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      {categories.map((category) => {
        return (
          <div key={category} className='px-4 pb-2 pt-0 md:pt-4 text-center font-medium text-sm sm:text-base'>{category}</div>
        )
      })}
    </Slider>
  )
}

export default CategorySlider