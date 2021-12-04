import React, { useEffect }  from 'react';
import './Story.css'

export const Story = ({ isClicked, canvases, isCanvasesHidded, isStoryEntered }) => {
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
        if(!isStoryEntered && isCanvasesHidded) canvases[1].classList.add('displayNone')
        else canvases[1].classList.remove('displayNone')
    }, [isStoryEntered])

    if (isClicked) {
        return <div className="storyLayout">
            <div className="storyBtn gradientBtn">
                <p>View our<br />expertise &<br />technologies</p>
            </div>
        </div>
    } else return null
};

