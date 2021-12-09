import React from 'react'
import './CasesSlider.css'

export const CasesSlider = ({ state, setState }) => {
    return (
        <div className="cases-page-slider">
            <p className="current-page">{state}/2</p>
            <div className="slider-buttons">
                <div className="slider-back"></div>
                <div className="slider-next"></div>
            </div>
        </div>
    )
}
