import React, { useEffect, useState, useCallback } from 'react'
import './Cases.css'
import Cube from '../Cube/Cube'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Line from '../Line/Line'
import useWindowDimensions from '../useWindowDimension/useWindowDimensions'

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
    const [prevUniversalBack, setPrevUniversalBack] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        if (prevUniversalBack === 'mcBackdestroyed') {
            setPumaStateHovered(false)
            setBigStateHovered(false)
            setPMStateHovered(false)
            setNaviStateHovered(false)
            setFlintStateHovered(false)
            if (universalBack === 'mcBack') setMcStateHovered(true)
            else {
                setUniversalBack('')
                setMcStateHovered(false)
            }
        }

        if (prevUniversalBack === 'pBackdestroyed') {
            setMcStateHovered(false)
            setBigStateHovered(false)
            setPMStateHovered(false)
            setNaviStateHovered(false)
            setFlintStateHovered(false)
            if (universalBack === 'pBack') setPumaStateHovered(true)
            else {
                setUniversalBack('')
                setPumaStateHovered(false)
            }
        }

        if (prevUniversalBack === 'fBackdestroyed') {
            setMcStateHovered(false)
            setBigStateHovered(false)
            setPMStateHovered(false)
            setNaviStateHovered(false)
            setPumaStateHovered(false)
            if (universalBack === 'fBack') setFlintStateHovered(true)
            else setFlintStateHovered(false)
        }


        if (prevUniversalBack === 'lBackdestroyed') {
            setFlintStateHovered(false)
            setMcStateHovered(false)
            setPMStateHovered(false)
            setNaviStateHovered(false)
            setPumaStateHovered(false)
            if (universalBack === 'lBack') setBigStateHovered(true)
            else setBigStateHovered(false)
        }
        

        if (prevUniversalBack === 'pmBackdestroyed') {
            setFlintStateHovered(false)
            setMcStateHovered(false)
            setNaviStateHovered(false)
            setPumaStateHovered(false)
            setBigStateHovered(false)
            if (universalBack === 'pmBack') setPMStateHovered(true)
            else setPMStateHovered(false)
        }
        
        if (prevUniversalBack === 'pmBackdestroyed') {
            setPMStateHovered(false)
            setFlintStateHovered(false)
            setMcStateHovered(false)
            setPumaStateHovered(false)
            setBigStateHovered(false)
            if (universalBack === 'nBack') setNaviStateHovered(true)
            else setNaviStateHovered(false)
        }
    }, [universalBack,prevUniversalBack])

    const onCaseEnter = (item) => {
        setUniversalBack(item.background)
        setPrevUniversalBack(item.background + 'destroyed')
        setShowCube('displayNone')
    }
    const onCaseLeave = () => {
        setUniversalBack('destroyBack')
        setShowCube('')
    }

    const ToFullScreen = () => {
        const elem = document.getElementById('casesLayoutElem')
        elem.classList.add('casesFullScreen')
    }

    const parallaxHandler = (e) => {
        const x = (e.clientX - window.innerWidth / 1.6) / 45
        const y = (e.clientY - window.innerHeight / 1.6) / 55
        document.getElementById(
            'parallaxImageBlock'
        ).style.cssText = `transform:
        skew(${x / 2}deg,${y * 2}deg)
        rotateY(${x * 5}deg)
        rotateX(${y * 5}deg)
        `
    }
    return (
        <div
            id="casesLayoutElem"
            className={isClicked ? ' casesLayout' : ' reversedLayout'}
        >
            <div
                id="parallaxImageBlock"
                className={
                    universalBack ? `${universalBack}` : `${prevUniversalBack}`
                }
            ></div>
            <div className="casesArray">
                {casesArray.slice(0, 6).map((item) => (
                    <div
                        onMouseMove={parallaxHandler}
                        id="parallaxCase"
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
        </div>
    )
}
