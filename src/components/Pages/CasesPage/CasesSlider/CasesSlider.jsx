import React from 'react'
import './CasesSlider.css'

export const CasesSlider = ({ state, setState }) => {
    const incState = () => {
        if (state === 1) setState((state) => state + 1)
        else return state
    }
    const decState = () => {
        if (state === 2) setState((state) => state - 1)
        else return state
    }
    return (
        <div className="cases-page-slider">
            <p className="current-page">
                <p>{state}</p>/2
            </p>
            <div className="slider-buttons">
                <div onClick={decState} className="slider-back"></div>
                <div onClick={incState} className="slider-next"></div>
            </div>
        </div>
    )
}
