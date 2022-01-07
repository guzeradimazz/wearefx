import React from 'react'

const SwiperItem = ({ title, paragraph, current }) => {
    return (
        <div className="swiper-item">
            <div>
                <h3>{title}</h3>
                <p>{paragraph}</p>
            </div>
            <div>
                <span>{current}</span>/06
            </div>
        </div>
    )
}

export default SwiperItem
