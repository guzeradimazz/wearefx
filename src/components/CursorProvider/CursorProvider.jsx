import React, { useContext, useEffect, useState, useRef } from 'react'
import './CursorProvider.css'
import cx from 'classnames'
export const CursorContext = React.createContext('cursorContext')

const SUPPORTED_CURSORS = [false, 'pointer', 'right', 'left']

const CursorProvider = ({
    children,
    hoveredCursor,
    hoveredCursor1,
    hoveredCursor2,
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [cursor, setCursor] = useState(true)
    const [classBulean, setClassBulean] = useState(false)

    const onHideCursor = () => {
        setTimeout(() => {
            setCursor(true)
        }, 300)
    }
    const onVisibleCursor = () => setCursor(true)

    const mouseRef = useRef(null)
    const onMouseMove = (event) => {
        const { pageX: x, pageY: y } = event
        setMousePosition({ x, y })
        mouseRef.current.classList.remove('displayNone')
    }

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove)

        return () => {
            document.removeEventListener('mousemove', onMouseMove)
        }
    })
    useEffect(() => {
        if (cursor) {
            try {
                document.addEventListener('mouseout', () => {
                    mouseRef.current?.classList.add('displayNone')
                })
            } catch (error) {
                console.error(error)
            }
        }
        return () => {
            document.removeEventListener('mouseout', () => {
                mouseRef.current.classList.add('displayNone')
            })
        }
    }, [cursor])
    const { x, y } = mousePosition

    const onCursor = (cursorType) => {
        cursorType =
            (SUPPORTED_CURSORS.includes(cursorType) && cursorType) || false
        setCursor(cursorType)
    }

    useEffect(() => {
        if (hoveredCursor) setClassBulean(true)
        else if (hoveredCursor1) setClassBulean(true)
        else if (hoveredCursor2) setClassBulean(true)
        else setClassBulean(false)
    }, [hoveredCursor, hoveredCursor1, hoveredCursor2])

    return (
        <CursorContext.Provider
            value={{ onCursor, onHideCursor, onVisibleCursor }}
        >
            <ins
                ref={mouseRef}
                id="cursorId"
                className={
                    classBulean
                        ? cx(cursor && ` hoveredCursorClass movable`, {
                              active: !!cursor,
                              [`cursor-${cursor}`]: !!cursor,
                          })
                        : cx(cursor && ` movable `, {
                              active: !!cursor,
                              [`cursor-${cursor}`]: !!cursor,
                          })
                }
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
