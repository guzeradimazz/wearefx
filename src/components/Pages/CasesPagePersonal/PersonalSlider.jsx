import React, { useRef } from 'react'
import Slider from 'react-slick'

export const PersonalSlider = () => {
    const refSlider = useRef(null)

    const nextSlide = () => {
        refSlider.current.slickNext()
    }
    const prevSlide = () => {
        refSlider.current.slickPrev()
    }
    const settings = {
        infinite: true,
        speed: 500,
        swipeToSlide: true,
        slidesToShow: 5,
        slidesToScroll: 1,
    }
    return (
        <div className="personalSlider">
            <Slider ref={refSlider} className="personal-slider" {...settings}>
                <div className="slide1"></div>
                <div className="slide2"></div>
                <div className="slide3"></div>
                <div className="slide4"></div>
                <div className="slide5"></div>
                <div className="slide1"></div>
                <div className="slide2"></div>
                <div className="slide3"></div>
                <div className="slide4"></div>
                <div className="slide5"></div>
            </Slider>
            <button className="prev-slider" onClick={() => prevSlide()} />
            <button className="next-slider" onClick={() => nextSlide()} />
        </div>
    )
}
