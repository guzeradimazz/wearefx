import React, { useEffect, useState, useCallback } from 'react'
import './Cases.css'
import Cube from '../Cube/Cube'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Line from '../Line/Line'
import useWindowDimensions from '../useWindowDimension/useWindowDimensions'
import DelayLink from '../DelayLink'

export const Cases = ({
    polyline,
    casesArray,
    coordsToX,
    coordsToY,
    setisMc,
    isMc,
    isPuma,
    setisPuma,
    isFlint,
    setisFlint,
    isBig,
    setisBig,
    isPm,
    setisPm,
    isNavi,
    setisNavi,
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
        if (mcStateHovered) {
            setisMc('black')
            setUniversalBack('mcBack')
            setShowCube('displayNone')
        } else {
            setisMc('')
            setUniversalBack('')
            setShowCube('')
        }
    }, [mcStateHovered, isMc])
    useEffect(() => {
        if (pumaStateHovered) {
            setisPuma('black')
            setUniversalBack('pumaBack')
            setShowCube('displayNone')
        } else {
            setisPuma('')
            setUniversalBack('')
            setShowCube('')
        }
    }, [pumaStateHovered, isPuma])
    useEffect(() => {
        if (flintStateHovered) {
            setisFlint('black')
            setUniversalBack('flintBack')
            setShowCube('displayNone')
        } else {
            setisFlint('')
            setUniversalBack('')
            setShowCube('')
        }
    }, [flintStateHovered, isFlint])
    useEffect(() => {
        if (bigStateHovered) {
            setisBig('black')
            setUniversalBack('bigBack')
            setShowCube('displayNone')
        } else {
            setisBig('')
            setUniversalBack('')
            setShowCube('')
        }
    }, [bigStateHovered, isBig])
    useEffect(() => {
        if (pmStateHovered) {
            setisPm('black')
            setUniversalBack('pmBack')
            setShowCube('displayNone')
        } else {
            setisPm('')
            setUniversalBack('')
            setShowCube('')
        }
    }, [pmStateHovered, isPm])
    useEffect(() => {
        if (naviStateHovered) {
            setisNavi('black')
            setUniversalBack('naviBack')
            setShowCube('displayNone')
        } else {
            setisNavi('')
            setUniversalBack('')
            setShowCube('')
        }
    }, [naviStateHovered, isNavi])

    const onMcEnter = () => {
        setMcStateHovered(true)
    }
    const onMcLeave = () => {
        setMcStateHovered(false)
    }
    const onPumaEnter = () => {
        setPumaStateHovered(true)
    }
    const onPumaLeave = () => {
        setPumaStateHovered(false)
    }
    const onFlintEnter = () => {
        setFlintStateHovered(true)
    }
    const onFlintLeave = () => {
        setFlintStateHovered(false)
    }
    const onBigEnter = () => {
        setBigStateHovered(true)
    }
    const onBigLeave = () => {
        setBigStateHovered(false)
    }
    const onPMEnter = () => {
        setPMStateHovered(true)
    }
    const onPMLeave = () => {
        setPMStateHovered(false)
    }
    const onNaviEnter = () => {
        setNaviStateHovered(true)
    }
    const onNaviLeave = () => {
        setNaviStateHovered(false)
    }

    // useEffect(() => {
    //     const parallax = document.getElementById('casesLayoutElem')

    //     if (parallax) {
    //         let isShowParallax = false
    //         if (showCube === 'displayNone') isShowParallax = true
    //         const parallaxItem = document.getElementById('parallaxImageBlock')

    //         const SpeedPr = 10
    //         const speed = 0.5
    //         let posX = 0,
    //             posY = 0,
    //             coordX = 0,
    //             coordY = 0

    //         const setMouseParallaxStyle = () => {
    //             const distX = coordX - posX
    //             const distY = coordY - posY

    //             posX = posX + distX * speed
    //             posY = posY + distY * speed

    //             parallaxItem.style.cssText = `transform: translate(${
    //                 posX / SpeedPr
    //             }%,${posY / SpeedPr}%);`
    //             requestAnimationFrame(setMouseParallaxStyle)
    //         }
    //         const onParallaxMouseMove = (e) => {
    //             const parallaxWidth = parallax.offsetWidth
    //             const parallaxHeigth = parallax.offsetHeight

    //             const coordXPara = e.pageX - (parallaxWidth * 1.3) / 2
    //             const coordYPara = e.pageY - parallaxHeigth / 2

    //             coordX = (coordXPara / parallaxWidth) * 100
    //             coordY = (coordYPara / parallaxHeigth) * 100
    //         }
    //         setMouseParallaxStyle()

    //         if (isShowParallax)
    //             parallax.addEventListener('mousemove', onParallaxMouseMove)
    //         else parallax.removeEventListener('mousemove', onParallaxMouseMove)
    //     }
    // }, [showCube])

    const ToFullScreen = () => {
        const elem = document.getElementById('casesLayoutElem')
        elem.classList.add('casesFullScreen')
    }
    return (
        <div
            id="casesLayoutElem"
            className={isClicked ? ' casesLayout' : ' reversedLayout'}
        >
            <div
                id="parallaxImageBlock"
                className={`${universalBack} universalBack`}
            >
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
                <div className="casesTextBlock">
                    <div className="casesArrow" />
                    <p>
                        We’re always looking the truth about the brand we work
                        with and tell it naturaly and gorgeous, like no one else
                        before.
                    </p>
                </div>
                <div className={mcStateHovered ? 'casesMain' : ' displayNone'}>
                    <p>McDonald's</p>
                    <p>Granding, VFX, motion</p>
                </div>
                <div
                    className={pumaStateHovered ? 'casesMain' : ' displayNone'}
                >
                    <p>Puma Ukraine</p>
                    <p>VFX, motion</p>
                </div>
                <div
                    className={flintStateHovered ? 'casesMain' : ' displayNone'}
                >
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
                <div
                    className={naviStateHovered ? 'casesMain' : ' displayNone'}
                >
                    <p>Navi</p>
                    <p>Granding, VFX, motion</p>
                </div>
                <div className="casesArray">
                    <div
                        onMouseEnter={onMcEnter}
                        onMouseLeave={onMcLeave}
                        className={casesArray[0].className}
                        onClick={() => {
                            navigate(`/cases/${casesArray[0].id}`)
                            ToFullScreen()
                        }}
                    >
                        {casesArray[0].title}
                    </div>
                    <div
                        onMouseEnter={onPumaEnter}
                        onMouseLeave={onPumaLeave}
                        className={casesArray[1].className}
                        onClick={() => {
                            navigate(`/cases/${casesArray[1].id}`)
                            ToFullScreen()
                        }}
                    >
                        {casesArray[1].title}
                    </div>
                    <div
                        onMouseEnter={onFlintEnter}
                        onMouseLeave={onFlintLeave}
                        className={casesArray[2].className}
                        onClick={() => {
                            navigate(`/cases/${casesArray[2].id}`)
                            ToFullScreen()
                        }}
                    >
                        {casesArray[2].title}
                    </div>
                    <div
                        onMouseEnter={onBigEnter}
                        onMouseLeave={onBigLeave}
                        className={casesArray[3].className}
                        onClick={() => {
                            navigate(`/cases/${casesArray[3].id}`)
                            ToFullScreen()
                        }}
                    >
                        {casesArray[3].title}
                    </div>
                    <div
                        onMouseEnter={onPMEnter}
                        onMouseLeave={onPMLeave}
                        className={casesArray[4].className}
                        onClick={() => {
                            navigate(`/cases/${casesArray[4].id}`)
                            ToFullScreen()
                        }}
                    >
                        {casesArray[4].title}
                    </div>
                    <div
                        onMouseEnter={onNaviEnter}
                        onMouseLeave={onNaviLeave}
                        className={casesArray[5].className}
                        onClick={() => {
                            navigate(`/cases/${casesArray[5].id}`)
                            ToFullScreen()
                        }}
                    >
                        {casesArray[5].title}
                    </div>
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
        </div>
    )
}
