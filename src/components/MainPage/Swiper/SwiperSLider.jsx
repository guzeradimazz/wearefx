import React from 'react'
import Swiper from 'react-id-swiper'

const SwiperSLider = () => {
    const params = {
        spaceBetween: 0,
        grabCursor: true,
        slidesPerView: 1,
        centeredSlides: true,
    }

    return (
        <Swiper {...params} className="swiper__mobile">
            <div className='swiper__slide'>Slide 1</div>
            <div className='swiper__slide'>Slide 2</div>
            <div className='swiper__slide'>Slide 3</div>
            <div className='swiper__slide'>Slide 4</div>
            <div className='swiper__slide'>Slide 5</div>
        </Swiper>
    )
}

export default SwiperSLider
