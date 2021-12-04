import React, { useEffect, forwardRef } from 'react'
import { useCursor } from '../CursorProvider/CursorProvider'
import './MainPageButton.css'

export const MainPageButton = forwardRef(
    ({ title, className, isHovered, onClick }, ref) => {
        const { onHideCursor, onVisibleCursor } = useCursor()

        useEffect(() => {
            if (isHovered) {
                onHideCursor()
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
                    {isHovered && (
                        <>
                            <span className="first__dot"></span>
                            <span className="second__dot"></span>
                            <span className="third__dot"></span>
                        </>
                    )}

                    {title}
                </div>
            </div>
        )
    }
)
