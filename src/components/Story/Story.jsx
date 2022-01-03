import React, { useEffect, useCallback } from 'react'
import './Story.css'
import 'animate.css'
import Cube from '../Cube/Cube'
import { Link } from 'react-router-dom'
import Line from '../Line/Line'
// import './StoryMedia. css'

const applyLayout = (canvas) => {
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
}

export const Story = ({
    coordsToX,
    coordsToY,
    polyline,
    isClicked,
    canvases,
    isCanvasesHidded,
    isStoryEntered,
}) => {
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

    applyLayout(polyline)

    if (isClicked) {
        return (
            <div className="storyLayout">
                <Cube />
                <Line
                    polyline={polyline}
                    coords={{
                        first: {
                            x: polyline.width * 0.18,
                            y: 0,
                        },
                        last: {
                            x: coordsToX,
                            y: coordsToY,
                        },
                    }}
                    coords1={{
                        first: {
                            x: polyline.width,
                            y: polyline.height,
                        },
                        last: {
                            x: coordsToX,
                            y: coordsToY + 24,
                        },
                    }}
                    amount={7}
                />
                <div className="storyBlock">
                    <h3>
                        We are full-service experiential VFX production studio
                        based in Ukraine inspired by the creative potential of
                        emerging technologies. 😎
                    </h3>
                    <div>
                        <Link to="/cases">our cases ﹤</Link>
                        <Link to="/hire">hire us ﹤</Link>
                        <div className="casesArrow" />
                        <p>
                            As a wide collective of highly skilled creatives, we
                            vizualize any content on any screen and any space.
                            Create CG and VFX for Advertising, TV, Print,
                            digital, series, short and now long format films,
                            games, VR and AR experiences.
                        </p>
                        <p>
                            A deeply collaborative approach and respect for
                            every aspect and role in the creation process stands
                            at our core.
                        </p>
                    </div>
                </div>
                <Link to="/story">
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
    } else return null
}
