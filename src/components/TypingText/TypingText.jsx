import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import './TypingText.css'

const TypingText = ({ isClicked }) => {
    const element = useRef(null)

    useEffect(() => {
        if (!isClicked) {
            const typed = new Typed(element.current, {
                strings: [
                    'Welcome to WeareFX, creative studio with big ideas',
                    'Where beauty and function are crafted together',
                    'Working across all media channels & platforms',
                ],
                startDelay: 1000,
                typeSpeed: 24,
                backSpeed: 24,
                backDelay: 1000,
                loop: true,
                showBlink: true,
            })
            return () => typed.destroy()
        } else return null
    }, [isClicked])

    // if(!isClicked) {
    return (
        <div className="typing__text">
            <span className="typing__text" ref={element}></span>
        </div>
    )
    // }else return null
}

export default TypingText
