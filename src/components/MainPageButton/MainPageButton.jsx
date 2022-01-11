import React, { useEffect, forwardRef, useState } from 'react'
import './MainPageButton.css'

export const MainPageButton = forwardRef(
    ({ title, className, isHovered, onClick, isClicked, canvas}, ref) => {

        const [hoverState, setHoverState] = useState(isHovered)

        useEffect(() => {
            if(isHovered)setHoverState(true)
            else setHoverState(false)
        }, [isHovered])


        useEffect(() => {
            if(hoverState)canvas.classList.add('displayNone')
            else canvas.classList.remove('displayNone')
        }, [hoverState,canvas.classList])

        return (
            <div>
                <div
                    onClick={() => onClick()}
                    ref={ref}
                    className={`${className} MainPageButton`}
                >
                    {isClicked ? ' ' : title}
                </div>
            </div>
        )
    }
)
