import React, { useEffect, forwardRef } from 'react'
import { useCursor } from '../CursorProvider/CursorProvider'
import './MainPageButton.css'

export const MainPageButton = forwardRef(
    ({ title, className, isHovered, onClick, isClicked, canvas }, ref) => {
        const { onHideCursor, onVisibleCursor } = useCursor()

        useEffect(() => {
            if (isHovered) {
                onHideCursor()
                canvas.classList.add('displayNone')
            } else {
                onVisibleCursor()
            }
        }, [isHovered])

        return (
            <div>
                <div
                    onClick={() => onClick()}
                    ref={ref}
                    className={`${className} MainPageButton`}
                >
                    {!isClicked && isHovered && (
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
