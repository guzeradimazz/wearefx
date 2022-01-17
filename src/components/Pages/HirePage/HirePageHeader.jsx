import React from 'react'
import { Link } from 'react-router-dom'

const HirePageHeader = () => {
    return (
        <div className="story-header">
            <div className="header-left">
                <div>
                    <h1>Hire</h1>
                    <h1>us</h1>
                </div>
                <div>
                    <Link to="/cases">Cases</Link>
                    <Link to="/story">our story</Link>
                </div>
            </div>
            <Link to="/wearefx">
                        <div className="animated-logo-X">X</div>
                <div className="animated-logo header-right"></div>
            </Link>
        </div>
    )
}

export default HirePageHeader
