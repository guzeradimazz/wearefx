import React from 'react'
import './StoryBottom.css'

const StoryFooter = () => {
    return (
        <div className="story-footer">
            <div className="story-footer-left">
                <a href="#">Home</a>
                <a href="#">Cases</a>
                <a href="#">Our story</a>
                <a href="#">Hire us</a>
            </div>
            <div className="story-footer-middle" />
            <div className="story-footer-right">
                <div>
                    <p>Wearefx © 2021 by </p>
                    <p className='violet_on_hover'> Brāh lab ﹤</p>
                </div>
                <p className='violet_on_hover'>Privacy Policy ﹤</p>
            </div>
        </div>
    )
}

export default StoryFooter
