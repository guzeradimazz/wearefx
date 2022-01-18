import React from 'react'
import { Link } from 'react-router-dom'
import './StoryBottom.css'

const StoryFooter = ({mForFooter}) => {
    return (
        <div className={`story-footer ${mForFooter}`}>
            <div className="story-footer-left">
                <Link to='/wearefx'>Home</Link>
                <Link to='/cases'>Cases</Link>
                <Link to='/story'>Our story</Link>
                <Link to='/hire'>Hire us</Link>
            </div>
            <Link to='/wearefx'>
                <div className="story-footer-middle" />
            </Link>
            <div className="story-footer-right">
                <div>
                    <p>Wearefx © 2021 by </p>
                    <p className="violet_on_hover"> Brāh lab ﹤</p>
                </div>
                <p className="violet_on_hover">Privacy Policy ﹤</p>
            </div>
        </div>
    )
}

export default StoryFooter
