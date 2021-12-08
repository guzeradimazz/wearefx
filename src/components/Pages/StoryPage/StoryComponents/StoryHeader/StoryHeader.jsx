import React from 'react'
import './StoryHeader.css'

const StoryHeader = ({titleW,titleY,storyHeader,menu1,menu2}) => {
    return (
        <div className={`${storyHeader} story-header`}>
            <div className="header-left">
                <div>
                    <h1>{titleW} </h1>
                    <h1>{titleY}</h1>
                </div>
                <div>
                    <a href="#">{menu1}</a>
                    <a href="#">{menu2}</a>
                </div>
            </div>
            <div className="header-right"></div>
        </div>
    )
}

export default StoryHeader
