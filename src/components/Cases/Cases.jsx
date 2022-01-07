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

    const [mcBack, setMcBack] = useState('')
    const [pumaBack, setPumaBack] = useState('')
    const [flintBack, setFlintBack] = useState('')
    const [bigBack, setBigBack] = useState('')
    const [pmBack, setPmBack] = useState('')
    const [naviBack, setNaviBack] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        if (mcStateHovered) {
            setisMc('black')
            setMcBack('mcBack')
            setShowCube('displayNone')
        } else {
            setisMc('')
            setMcBack('')
            setShowCube('')
        }
    }, [mcStateHovered, isMc])
    useEffect(() => {
        if (pumaStateHovered) {
            setisPuma('black')
            setPumaBack('pumaBack')
            setShowCube('displayNone')
        } else {
            setisPuma('')
            setPumaBack('')
            setShowCube('')
        }
    }, [pumaStateHovered, isPuma])
    useEffect(() => {
        if (flintStateHovered) {
            setisFlint('black')
            setFlintBack('flintBack')
            setShowCube('displayNone')
        } else {
            setisFlint('')
            setFlintBack('')
            setShowCube('')
        }
    }, [flintStateHovered, isFlint])
    useEffect(() => {
        if (bigStateHovered) {
            setisBig('black')
            setBigBack('bigBack')
            setShowCube('displayNone')
        } else {
            setisBig('')
            setBigBack('')
            setShowCube('')
        }
    }, [bigStateHovered, isBig])
    useEffect(() => {
        if (pmStateHovered) {
            setisPm('black')
            setPmBack('pmBack')
            setShowCube('displayNone')
        } else {
            setisPm('')
            setPmBack('')
            setShowCube('')
        }
    }, [pmStateHovered, isPm])
    useEffect(() => {
        if (naviStateHovered) {
            setisNavi('black')
            setNaviBack('naviBack')
            setShowCube('displayNone')
        } else {
            setisNavi('')
            setNaviBack('')
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

    const toAllCases = () => {
        const casesLayoutElement = document.getElementById('casesLayoutElem')
        casesLayoutElement.style.clipPath =
            'polygon(0% 0%, 100% 0%, 100% 100%, 0 100%, 0 30%)'
    }

    useEffect(() => {
        const parallax = document.getElementById('casesLayoutElem')

        if (parallax && mcStateHovered) {
            const parallaxItem = document.getElementById('parallaxImageBlock')

            const SpeedPr = 10
            const speed = 0.5
            let posX = 0,
                posY = 0,
                coordX = 0,
                coordY = 0

            const setMouseParallaxStyle = () => {
                const distX = coordX - posX
                const distY = coordY - posY

                posX = posX + distX * speed
                posY = posY + distY * speed

                parallaxItem.style.cssText = `transform: translate(${
                    posX / SpeedPr
                }%,${posY / SpeedPr}%);`
                requestAnimationFrame(setMouseParallaxStyle)
            }
            setMouseParallaxStyle()
            parallax.addEventListener('mousemove', (e) => {
                const parallaxWidth = parallax.offsetWidth
                const parallaxHeigth = parallax.offsetHeight

                const coordXPara = e.pageX - (parallaxWidth * 1.3) / 2
                const coordYPara = e.pageY - parallaxHeigth / 2

                coordX = (coordXPara / parallaxWidth) * 100
                coordY = (coordYPara / parallaxHeigth) * 100
            })
        }
    }, [mcStateHovered])
    return (
        <div
            id="casesLayoutElem"
            className={isClicked ? 'casesLayout' : ' reversedLayout'}
        >
            <div
                // id="parallaxImageBlock"
                className={`${mcBack} ${pumaBack} ${flintBack} ${bigBack} ${pmBack} ${naviBack} universalBack`}
            >
                <Line
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
                            x: width,
                            y: height * 0.24,
                        },
                        last: {
                            x: coordsToX,
                            y: coordsToY,
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
                        onClick={() => navigate(`/cases/${casesArray[0].id}`)}
                    >
                        {casesArray[0].title}
                    </div>
                    <div
                        onMouseEnter={onPumaEnter}
                        onMouseLeave={onPumaLeave}
                        className={casesArray[1].className}
                        onClick={() => navigate(`/cases/${casesArray[1].id}`)}
                    >
                        {casesArray[1].title}
                    </div>
                    <div
                        onMouseEnter={onFlintEnter}
                        onMouseLeave={onFlintLeave}
                        className={casesArray[2].className}
                        onClick={() => navigate(`/cases/${casesArray[2].id}`)}
                    >
                        {casesArray[2].title}
                    </div>
                    <div
                        onMouseEnter={onBigEnter}
                        onMouseLeave={onBigLeave}
                        className={casesArray[3].className}
                        onClick={() => navigate(`/cases/${casesArray[3].id}`)}
                    >
                        {casesArray[3].title}
                    </div>
                    <div
                        onMouseEnter={onPMEnter}
                        onMouseLeave={onPMLeave}
                        className={casesArray[4].className}
                        onClick={() => navigate(`/cases/${casesArray[4].id}`)}
                    >
                        {casesArray[4].title}
                    </div>
                    <div
                        onMouseEnter={onNaviEnter}
                        onMouseLeave={onNaviLeave}
                        className={casesArray[5].className}
                        onClick={() => navigate(`/cases/${casesArray[5].id}`)}
                    >
                        {casesArray[5].title}
                    </div>
                </div>
                <Link to="/cases" onClick={() => toAllCases()}>
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

    return null
}
