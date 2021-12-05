import React, { useEffect } from 'react'
import './Hire.css'
import 'animate.css'

export const Hire = ({
    isClicked,
    canvases,
    isCanvasesHidded,
    isHireEntered,
}) => {
    const offCanvases = () => {
        canvases.map((i) => i.classList.add('displayNone'))
    }
    const onCanvases = () => {
        canvases.map((i) => i.classList.remove('displayNone'))
    }
    useEffect(() => {
        if (isCanvasesHidded) offCanvases()
        else onCanvases()
    }, [isCanvasesHidded])

    useEffect(() => {
        if (!isHireEntered && isCanvasesHidded)
            canvases[2].classList.add('displayNone')
        else canvases[2].classList.remove('displayNone')
    }, [isHireEntered])

    if (isClicked) {
        return (
            <div className="hireLayout">
                <div className="hireBtn gradientBtn">
                    <p>
                        chat with us
                        <br /> in telegram
                    </p>
                </div>
            </div>
        )
    } else return null
}
