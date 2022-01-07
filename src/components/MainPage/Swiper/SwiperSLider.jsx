import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SwiperItem from './SwiperItem';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        return (
            <div>
                <Slider {...settings}>
                    <SwiperItem title={'Puma Ukraine'} paragraph={'Granding, VFX, motion'} current={1}/>
                    <SwiperItem title={'Puma Ukraine'} paragraph={'Granding, VFX, motion'} current={2}/>
                    <SwiperItem title={'Puma Ukraine'} paragraph={'Granding, VFX, motion'} current={3}/>
                    <SwiperItem title={'Puma Ukraine'} paragraph={'Granding, VFX, motion'} current={4}/>
                    <SwiperItem title={'Puma Ukraine'} paragraph={'Granding, VFX, motion'} current={5}/>
                    <SwiperItem title={'Puma Ukraine'} paragraph={'Granding, VFX, motion'} current={6}/>
                </Slider>
            </div>
        )
    }
}
