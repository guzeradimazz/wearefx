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
        const casesArray = [
            {
                title: "McDonald's",
                id: 1,
                className: 'mcDonalds',
                background: 'mcBack'
            },
            {
                title: 'Puma',
                id: 2,
                className: 'mcDonalds',
                background: 'pBack'
            },
            {
                title: 'Flint',
                id: 3,
                className: 'mcDonalds',
                background: 'fBack'
            },
            {
                title: 'Little big',
                id: 4,
                className: 'mcDonalds',
                background: 'lBack'
            },
            {
                title: 'Parimatch',
                id: 5,
                className: 'mcDonalds',
                background: 'pmBack'
            },
            {
                title: 'Navi',
                id: 6,
                className: 'mcDonalds',
                background: 'nBack'
            },
        ]
        return (
            <div>
                <Slider {...settings}>
                    <SwiperItem linkTo={`/cases/${casesArray[0].id}`} title={'Puma Ukraine'} paragraph={'Granding, VFX, motion'} current={1}/>
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
