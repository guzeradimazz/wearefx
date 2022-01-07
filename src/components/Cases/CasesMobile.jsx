import React from 'react'
import './Cases.css'
import SwiperSLider from '../MainPage/Swiper/SwiperSLider'
import { Link } from 'react-router-dom'

const CasesMobile = () => {
    return (
        <div>
            <Link to="/casesfullmobile">
                <div className="caseBtnSlider">
                    <p>
                        View
                        <br />
                        cases
                        <br />
                        list
                    </p>
                </div>
            </Link>
            <SwiperSLider />
            <Link to="/casesfullmobile">
                <div className="casesBtn gradientBtn">
                    <p>
                        Explore
                        <br />
                        all
                        <br />
                        cases
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default CasesMobile
