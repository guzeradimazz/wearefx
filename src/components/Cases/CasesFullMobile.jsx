import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import StoryFooter from '../Pages/StoryPage/StoryComponents/StoryBottom/StoryFooter'

const CasesFullMobile = () => {
    const [isClicked, setIsClicked] = useState(false)

    return (
        <div className="story-mobile">
            <div className="mobile-header">
                <Link to="/storyMobile" className="link">
                    Our story
                </Link>
                <Link to="/wearefx" className="to-home"></Link>
                <Link to="/hireMobile" className="link">
                    hire us
                </Link>
            </div>
            <div className="cases-full-array">
                <div>
                    <p>Bond Delivery</p>
                </div>
                <div>
                    <p>Tvorchi</p>
                </div>
                <div>
                    <p>McDonald's</p>
                </div>
                <div>
                    <p>Chipsters</p>
                </div>
                <div>
                    <p>Puma Ukraine</p>
                </div>
                <div
                    className={isClicked ? 'displayNone' : 'mb100'}
                    onClick={() => setIsClicked(!isClicked)}
                >
                    <p>LOAD MORE</p>
                </div>
                <div className={isClicked ? '' : 'displayNone'}>
                    <p>McDonald's</p>
                </div>
                <div className={isClicked ? '' : 'displayNone'}>
                    <p>Chipsters</p>
                </div>
                <div className={isClicked ? 'mb100' : 'displayNone'}>
                    <p>Puma Ukraine</p>
                </div>
            </div>
            <Link to="/storyMobileFull">
                <div className="full-mobile casesBtn gradientBtn">
                    <p>
                        Explore<br />
                        case<br />
                        details
                    </p>
                </div>
            </Link>
            <div>
                <StoryFooter />
            </div>
        </div>
    )
}

export default CasesFullMobile
