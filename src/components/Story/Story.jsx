import React, { useEffect } from 'react'
import './Story.css'
import 'animate.css'
import Cube from '../Cube/Cube'
import { Link } from 'react-router-dom'

export const Story = ({
    isClicked,
    canvases,
    isCanvasesHidded,
    isStoryEntered,
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
    }, [isCanvasesHidded, offCanvases, onCanvases])

    useEffect(() => {
        if (!isStoryEntered && isCanvasesHidded)
            canvases[1].classList.add('displayNone')
        else canvases[1].classList.remove('displayNone')
    }, [isStoryEntered, isCanvasesHidded])

    if (isClicked) {
        return (
                <div className="storyLayout">
                    <Cube />
                    <div className="storyBlock">
                        <h3>
                            We are full-service experiential VFX production
                            studio based in Ukraine inspired by the creative
                            potential of emerging technologies. 😎
                        </h3>
                        <div>
                            <a href="#">our cases ﹤</a>
                            <a href="#">hire us ﹤</a>
                            <div className="casesArrow" />
                            <p>
                                As a wide collective of highly skilled
                                creatives, we vizualize any content on any
                                screen and any space. Create CG and VFX for
                                Advertising, TV, Print, digital, series, short
                                and now long format films, games, VR and AR
                                experiences.
                            </p>
                            <p>
                                A deeply collaborative approach and respect for
                                every aspect and role in the creation process
                                stands at our core.
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
