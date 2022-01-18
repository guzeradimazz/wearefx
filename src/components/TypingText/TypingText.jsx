import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import './TypingText.css'

const TypingText = ({ isClicked }) => {
    const element = useRef(null)

    useEffect(() => {
        if (!isClicked) {
        const typed = new Typed(element.current, {
            strings: [
                "Welcome\nto\nWeareFX,\ncreative\nstudio\rwith\nbig\nideas",
                "Where\nbeauty\nand\nfunction\nare\ncrafted\ntogether",
                "Working\nacross\nall\nmedia\nchannels\nplatforms",
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

        return (
            <div className="typing__text">
                <span className="typing__text" ref={element}></span>
            </div>
        )
}

export default TypingText
