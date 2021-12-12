import React, { useEffect, forwardRef, useState } from 'react'
import { useCursor } from '../CursorProvider/CursorProvider'
import './MainPageButton.css'

export const MainPageButton = forwardRef(
    ({ title, className, isHovered, onClick, isClicked, canvas }, ref) => {

        const [hoverState, setHoverState] = useState(isHovered)
        useEffect(() => {
            if(isHovered)setHoverState(true)
            else setHoverState(false)
        }, [isHovered])


        useEffect(() => {
            if(hoverState)canvas.classList.add('displayNone')
            else canvas.classList.remove('displayNone')
        }, [hoverState])

        return (
            <div>
                <div
                    onClick={() => onClick()}
                    ref={ref}
                    className={`${className} MainPageButton`}
                >
                    {isHovered && (
                        <>
                            <span className="first__dot"></span>
                            <span className="second__dot"></span>
                            <span className="third__dot"></span>
                        </>
                    )}
                    {isClicked ? ' ' : title}
                </div>
            </div>
        )
    }
)
