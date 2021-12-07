import React from 'react'
import './StoryHeader.css'

const StoryHeader = () => {
    return (
        <div className="story-header">
            <div className="header-left">
                <div>
                    <h1>Our </h1>
                    <h1>story</h1>
                </div>
                <div>
                    <a href="#">Cases</a>
                    <a href="#">Hire us</a>
                </div>
            </div>
            <div className="header-right"></div>
        </div>
    )
}

export default StoryHeader
