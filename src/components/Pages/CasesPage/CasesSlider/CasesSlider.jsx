import React from 'react'
import './CasesSlider.css'

export const CasesSlider = ({ state, setState }) => {
    const incState = () => {
        document.getElementById('casesNext').classList.add('casesSliderActive')
        setTimeout(() => {
            document
                .getElementById('casesNext')
                .classList.remove('casesSliderActive')
        }, 1000)
        if (state === 1) setState((state) => state + 1)
        else return state
    }
    const decState = () => {
        document.getElementById('casesBack').classList.add('casesSliderActive')
        setTimeout(() => {
            document
                .getElementById('casesBack')
                .classList.remove('casesSliderActive')
        }, 1000)
        if (state === 2) setState((state) => state - 1)
        else return state
    }
    return (
        <div className="cases-page-slider">
            <div className="current-page">
                <p>{state}</p>/2
            </div>
            <div className="slider-buttons">
                <div
                    id="casesBack"
                    onClick={decState}
                    className="slider-back"
                ></div>
                <div
                    id="casesNext"
                    onClick={incState}
                    className="slider-next"
                ></div>
            </div>
        </div>
    )
}
