import React from 'react'
import './Preloader.css'
import preloader from './X_A2.mp4'

const Preloader = ({isLoading}) => {
    return (
        <div className={isLoading ?``:'displayNone'}>
            <video className="preloader" autoPlay muted>
                <source src={preloader} type="video/mp4" />
            </video>
        </div>
    )
}

export default Preloader
