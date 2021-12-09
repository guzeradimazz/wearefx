import React, { useContext, useEffect, useState } from 'react'
import './CursorProvider.css'
import cx from 'classnames'
export const CursorContext = React.createContext('cursorContext')

const SUPPORTED_CURSORS = [false, 'pointer', 'right', 'left']

const CursorProvider = ({ children,hoveredCursor,hoveredCursor1,hoveredCursor2 }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [cursor, setCursor] = useState(true)

    const onHideCursor = () => {
        setTimeout(() => {
            setCursor(false)
        }, 400)
    }
    const onVisibleCursor = () => setCursor(true)

    const onMouseMove = (event) => {
        const { pageX: x, pageY: y } = event
        setMousePosition({ x, y })
    }

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove)

        return () => {
            document.removeEventListener('mousemove', onMouseMove)
        }
    })

    const { x, y } = mousePosition

    const onCursor = (cursorType) => {
        cursorType =
            (SUPPORTED_CURSORS.includes(cursorType) && cursorType) || false
        setCursor(cursorType)
    }

    return (
        <CursorContext.Provider
            value={{ onCursor, onHideCursor, onVisibleCursor }}
            className={hoveredCursor ? 'hoveredCursor' : ''}
        >
            <ins
                className={hoveredCursor || hoveredCursor1 || hoveredCursor2 ? cx(cursor && 'hoveredCursor movable', {
                    active: !!cursor,
                    [`cursor-${cursor}`]: !!cursor,
                }) : cx(cursor && 'movable', {
                    active: !!cursor,
                    [`cursor-${cursor}`]: !!cursor,
                })}
                style={{
                    left: `${x}px`,
                    top: `${y}px`,
                }}
            />
            {children}
        </CursorContext.Provider>
    )
}

export default CursorProvider

export const useCursor = () => {
    const value = useContext(CursorContext)

    if (!value) {
        throw new Error('cursor context cannot be used outside Provider')
    }

    return value
}
