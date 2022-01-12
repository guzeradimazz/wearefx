import React, { useRef } from 'react'
import Slider from 'react-slick'

export const PersonalSlider = () => {
    const refSlider = useRef(null)

    const nextSlide = () => {
        document.getElementById('nextBtnSlider').classList.add('activeBtn')
        refSlider.current.slickNext()
        setTimeout(() => {
            document
                .getElementById('nextBtnSlider')
                .classList.remove('activeBtn')
        }, 500)
    }
    const prevSlide = () => {
        document.getElementById('prevBtnSlider').classList.add('activeBtn')
        refSlider.current.slickPrev()
        setTimeout(() => {
            document
                .getElementById('prevBtnSlider')
                .classList.remove('activeBtn')
        }, 500)
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
            <button
                id="prevBtnSlider"
                className="prev-slider"
                onClick={() => prevSlide()}
            />
            <button
                id="nextBtnSlider"
                className="next-slider"
                onClick={() => nextSlide()}
            />
        </div>
    )
}
