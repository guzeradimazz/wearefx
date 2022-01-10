import React, { useEffect, useCallback } from 'react'
import './Story.css'
import 'animate.css'
import Cube from '../Cube/Cube'
import { Link } from 'react-router-dom'
import Line from '../Line/Line'
import useWindowDimensions from '../useWindowDimension/useWindowDimensions'

export const Story = ({
    polyline,
    coordsToX,
    coordsToY,
    isClicked,
    canvases,
    isCanvasesHidded,
    isStoryEntered,
}) => {
    const { width, height } = useWindowDimensions()

    useEffect(() => {
        document.getElementById('polyline').classList.add('displayNone')
        document.getElementById('polyline2').classList.add('displayNone')
    }, [])

    const offCanvases = useCallback(() => {
        canvases.map((i) => i.classList.add('displayNone'))
        polyline.classList.remove('displayNone')
    }, [canvases, polyline.classList])

    const onCanvases = useCallback(() => {
        canvases.map((i) => i.classList.remove('displayNone'))
        polyline.classList.add('displayNone')
    }, [canvases, polyline.classList])

    useEffect(() => {
        if (isCanvasesHidded) offCanvases()
        else onCanvases()
        if (!isStoryEntered && isCanvasesHidded)
            canvases[1].classList.add('displayNone')
        else canvases[1].classList.remove('displayNone')
    }, [isCanvasesHidded, canvases, isStoryEntered, offCanvases, onCanvases])

    const ToFullScreen = () => {
        const elem = document.getElementById('storyLayoutElem')
        elem.classList.add('storyFullScreen')
    }

    return (
        <div
            id="storyLayoutElem"
            className={isClicked ? 'storyLayout' : 'reversedLayoutStory'}
        >
            <Cube />
            <Line
                polyline={polyline}
                isClicked={isClicked}
                coords={{
                    first: {
                        x: width * 0.18,
                        y: 0,
                    },
                    last: {
                        x: coordsToX,
                        y: coordsToY + 23,
                    },
                }}
                coords1={{
                    first: {
                        x: coordsToX,
                        y: coordsToY + 23,
                    },
                    last: {
                        x: width,
                        y: height,
                    },
                }}
                amount={7}
            />
            <div className="storyBlock">
                <h3>
                    We are full-service experiential VFX production studio based
                    in Ukraine inspired by the creative potential of emerging
                    technologies. 😎
                </h3>
                <div>
                    <Link to="/cases">our cases ﹤</Link>
                    <Link to="/hire">hire us ﹤</Link>
                    <div className="casesArrow" />
                    <p>
                        As a wide collective of highly skilled creatives, we
                        vizualize any content on any screen and any space.
                        Create CG and VFX for Advertising, TV, Print, digital,
                        series, short and now long format films, games, VR and
                        AR experiences.
                    </p>
                    <p>
                        A deeply collaborative approach and respect for every
                        aspect and role in the creation process stands at our
                        core.
                    </p>
                </div>
            </div>
            <Link to="/story" onClick={() => ToFullScreen()}>
                <div className="storyBtn gradientBtn">
                    <p>
                        View our
                        <br />
                        expertise &<br />
                        technologies
                    </p>
                </div>
            </Link>
        </div>
    )
}
