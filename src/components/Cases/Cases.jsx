import React, { useEffect, useState, useCallback } from 'react'
import './Cases.css'
import Cube from '../Cube/Cube'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Line from '../Line/Line'
import useWindowDimensions from '../useWindowDimension/useWindowDimensions'
import Tilt from 'react-tilt'

// import Tilt from 'react-parallax-tilt'

export const Cases = ({
    polyline,
    casesArray,
    coordsToX,
    coordsToY,
    isClicked,
    canvases,
    isCanvasesHidded,
    isCasesEntered,
}) => {
    const { width, height } = useWindowDimensions()

    useEffect(() => {
        document.getElementById('polyline1').classList.add('displayNone')
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
        if (!isCasesEntered && isCanvasesHidded)
            canvases[0].classList.add('displayNone')
        else canvases[0].classList.remove('displayNone')
    }, [isCanvasesHidded, offCanvases, onCanvases, isCasesEntered, canvases])

    const [mcStateHovered, setMcStateHovered] = useState(false)
    const [pumaStateHovered, setPumaStateHovered] = useState(false)
    const [flintStateHovered, setFlintStateHovered] = useState(false)
    const [bigStateHovered, setBigStateHovered] = useState(false)
    const [pmStateHovered, setPMStateHovered] = useState(false)
    const [naviStateHovered, setNaviStateHovered] = useState(false)

    const [showCube, setShowCube] = useState('')

    const [universalBack, setUniversalBack] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        if(universalBack === 'mcBack') setMcStateHovered(true)
        else setMcStateHovered(false)
        if(universalBack === 'pBack') setPumaStateHovered(true)
        else setPumaStateHovered(false)
        if(universalBack === 'fBack') setFlintStateHovered(true)
        else setFlintStateHovered(false)
        if(universalBack === 'lBack') setBigStateHovered(true)
        else setBigStateHovered(false)
        if(universalBack === 'pmBack') setPMStateHovered(true)
        else setPMStateHovered(false)
        if(universalBack === 'nBack') setNaviStateHovered(true)
        else setNaviStateHovered(false)
    }, [universalBack])

    const onCaseEnter = (item) => {
        setUniversalBack(item.background)
        setShowCube('displayNone')
    }
    const onCaseLeave = () => {
        setUniversalBack('')
        setShowCube('')
    }
    const ToFullScreen = () => {
        const elem = document.getElementById('casesLayoutElem')
        elem.classList.add('casesFullScreen')
    }
    return (
        <div
            id="casesLayoutElem"
            className={isClicked ? ' casesLayout' : ' reversedLayout'}
        >
            <div className="casesTextBlock">
                <div className="casesArrow" />
                <p>
                    We’re always looking the truth about the brand we work with
                    and tell it naturaly and gorgeous, like no one else before.
                </p>
            </div>
            <Link to="/cases" onClick={() => ToFullScreen()}>
                <div className="casesBtn gradientBtn">
                    <p>
                        Explore
                        <br />
                        all
                        <br />
                        cases
                    </p>
                </div>
            </Link>
            <div className={mcStateHovered ? 'casesMain' : ' displayNone'}>
                <p>McDonald's</p>
                <p>Granding, VFX, motion</p>
            </div>
            <div className={pumaStateHovered ? 'casesMain' : ' displayNone'}>
                <p>Puma Ukraine</p>
                <p>VFX, motion</p>
            </div>
            <div className={flintStateHovered ? 'casesMain' : ' displayNone'}>
                <p>Flint</p>
                <p>Granding, VFX, motion</p>
            </div>
            <div className={bigStateHovered ? 'casesMain' : ' displayNone'}>
                <p>Little big</p>
                <p>Granding, VFX, motion</p>
            </div>
            <div className={pmStateHovered ? 'casesMain' : ' displayNone'}>
                <p>Parimatch</p>
                <p>Granding, VFX, motion</p>
            </div>
            <div className={naviStateHovered ? 'casesMain' : ' displayNone'}>
                <p>Navi</p>
                <p>Granding, VFX, motion</p>
            </div>

            <Tilt
                options={{
                    max: 40,
                    reverse: false,
                    scale: 1,
                    perspective: 1000,
                    speed: 400,
                    transition: true,
                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                    reset: true,
                    axis: null,
                }}
                className="Tilt"
            >
                <div
                    id="parallaxImageBlock"
                    className={`${universalBack} universalBack`}
                >
                    <div className="casesArray">
                        {casesArray.slice(0, 6).map((item) => (
                            <div
                                key={item.id}
                                onMouseEnter={() => onCaseEnter(item)}
                                onMouseLeave={() => onCaseLeave()}
                                className={item.className}
                                onClick={() => {
                                    navigate(`/cases/${item.id}`)
                                    ToFullScreen()
                                }}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                </div>
                <Line
                    polyline={polyline}
                    isClicked={isClicked}
                    coords={{
                        first: {
                            x: 0,
                            y: height * 0.38,
                        },
                        last: {
                            x: coordsToX,
                            y: coordsToY,
                        },
                    }}
                    coords1={{
                        first: {
                            x: coordsToX,
                            y: coordsToY,
                        },
                        last: {
                            x: width,
                            y: height * 0.24,
                        },
                    }}
                    amount={7}
                />
                <Cube showCube={`${showCube}`} />
            </Tilt>
        </div>
    )
}
