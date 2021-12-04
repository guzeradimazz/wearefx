import React,{useEffect} from 'react'
import './Cases.css'

export const Cases = ({ isClicked, canvases, isCanvasesHidded, isCasesEntered }) => {
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
        if(!isCasesEntered && isCanvasesHidded) canvases[0].classList.add('displayNone')
        else canvases[0].classList.remove('displayNone')
    }, [isCasesEntered])

    if (isClicked) {
        return <div className="casesLayout">
            <div className="casesBtn gradientBtn">
                <p>Explore<br />all<br />cases</p>
            </div>
        </div>
    } else return null
}