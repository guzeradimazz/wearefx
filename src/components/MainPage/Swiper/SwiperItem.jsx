import React from 'react'
import { Link } from 'react-router-dom'
import './SwiperItem.css'

const SwiperItem = ({linkTo, title, paragraph, current }) => {
    return (
        <div className="swiper-item">
            <div>
                <h3>{title}</h3>
                <p >{paragraph}</p>
            </div>
            <div>
                <span>{current}</span>/06
            </div>
            <div className="caseLinkIMP">
                <Link to="/casesfullmobile">
                    <div className="casesBtn gradientBtn btm0">
                        <span className='swiper-item-p'>
                            Explore
                            <br />
                            case
                            <br />
                            details
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SwiperItem
