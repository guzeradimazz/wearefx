import React from 'react'
import './StoryBottom.css'
import StoryFooter from './StoryFooter'

const StoryBottom = () => {
    return (
        <div className="story-bottom">
            <div className="story-ellipse" />
            <div className="story-main-content">
                <p>
                    We pushing the boundaries of visual effects and work with
                    our clients to innovate in the real world.
                </p>
            </div>
            <div className="story-bottom-marquee">
                <div className="marquee-div">
                    <span>
                        <div className="marquee-img marquee-1" />
                        <div className="marquee-img marquee-2" />
                        <div className="marquee-img marquee-3" />
                        <div className="marquee-img marquee-4" />
                        <div className="marquee-img marquee-5" />
                        <div className="marquee-img marquee-6" />
                        <div className="marquee-img marquee-7" />
                        <div className="marquee-img marquee-8" />
                    </span>
                    <span>
                        <div className="marquee-img marquee-1" />
                        <div className="marquee-img marquee-2" />
                        <div className="marquee-img marquee-3" />
                        <div className="marquee-img marquee-4" />
                        <div className="marquee-img marquee-5" />
                        <div className="marquee-img marquee-6" />
                        <div className="marquee-img marquee-7" />
                        <div className="marquee-img marquee-8" />
                    </span>
                </div>
            </div>
            <div className="story-bottom-marquee-reverse">
                <div className="marquee-div-reverse">
                    <span>
                        <div className="marquee-img-reverse marquee-10" />
                        <div className="marquee-img-reverse marquee-20" />
                        <div className="marquee-img-reverse marquee-30" />
                        <div className="marquee-img-reverse marquee-40" />
                        <div className="marquee-img-reverse marquee-50" />
                        <div className="marquee-img-reverse marquee-60" />
                        <div className="marquee-img-reverse marquee-70" />
                    </span>
                    <span>
                        <div className="marquee-img-reverse marquee-10" />
                        <div className="marquee-img-reverse marquee-20" />
                        <div className="marquee-img-reverse marquee-30" />
                        <div className="marquee-img-reverse marquee-40" />
                        <div className="marquee-img-reverse marquee-50" />
                        <div className="marquee-img-reverse marquee-60" />
                        <div className="marquee-img-reverse marquee-70" />
                    </span>
                </div>
            </div>
            <StoryFooter/>
        </div>
    )
}

export default StoryBottom
