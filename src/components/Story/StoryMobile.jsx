import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Story.css'
import './StoryMedia.css'
import StoryFooter from '../Pages/StoryPage/StoryComponents/StoryBottom/StoryFooter'

const StoryMobile = () => {
    useEffect(() => {
        document.getElementById('overlay1').classList.add('displayNone')
        document.getElementById('overlay2').classList.add('displayNone')
        document.getElementById('overlay3').classList.add('displayNone')
    }, [])
    return (
        <div className="story-mobile">
            <div className="mobile-header">
                <Link to="/casesMobile" className="link">
                    Cases
                </Link>
                <Link to="/wearefx" className="to-home"></Link>
                <Link to="/hireMobile" className="link">
                    Hire us
                </Link>
            </div>
            <div className="story-mobile-text">
                <p className="story-mobile-text1">
                    We are full-service experiential VFX production studio based
                    in Ukraine inspired by the creative potential of emerging
                    technologies. 😎
                </p>
                <div>
                    <p className="story-mobile-text2">
                        As a wide collective of highly skilled creatives, we
                        vizualize any content on any screen and any space.
                        Create CG and VFX for Advertising, TV, Print, digital,
                        series, short and now long format films, games, VR and
                        AR experiences.
                    </p>
                    <div className="arrow-to-left" />
                </div>
                <p className="story-mobile-text3">
                    A deeply collaborative approach and respect for every aspect
                    and role in the creation process stands at our core.
                </p>
            </div>
            <Link to="/storyMobileFull">
                <div className="casesBtn gradientBtn">
                    <p>
                        View our
                        <br />
                        expertise &<br />
                        tech.
                    </p>
                </div>
            </Link>
            <Link to="/hire">
                <div className="violetBtn">
                    <p>
                        we’re ready
                        <br />
                        hire us!
                    </p>
                </div>
            </Link>

            <div>
                <StoryFooter />
            </div>
        </div>
    )
}

export default StoryMobile
