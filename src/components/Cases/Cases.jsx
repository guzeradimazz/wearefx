import React, { useEffect, useState, useRef } from 'react'
import './Cases.css'
import 'animate.css'

export const Cases = ({
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
        if (!isCasesEntered && isCanvasesHidded)
            canvases[0].classList.add('displayNone')
        else canvases[0].classList.remove('displayNone')
    }, [isCasesEntered])

    const [mcStateHovered, setMcStateHovered] = useState(false)
    const [pumaStateHovered, setPumaStateHovered] = useState(false)
    const [flintStateHovered, setFlintStateHovered] = useState(false)
    const [bigStateHovered, setBigStateHovered] = useState(false)
    const [pmStateHovered, setPMStateHovered] = useState(false)
    const [naviStateHovered, setNaviStateHovered] = useState(false)

    const [mcBack, setMcBack] = useState('')
    const [pumaBack, setPumaBack] = useState('')
    const [flintBack, setFlintBack] = useState('')
    const [bigBack, setBigBack] = useState('')
    const [pmBack, setPmBack] = useState('')
    const [naviBack, setNaviBack] = useState('')

    useEffect(() => {
        if (mcStateHovered) {
            setisMc('black')
            setMcBack('mcBack')
        } else {
            setisMc('')
            setMcBack('')
        }
    }, [mcStateHovered, isMc])
    useEffect(() => {
        if (pumaStateHovered) {
            setisPuma('black')
            setPumaBack('pumaBack')
        } else {
            setisPuma('')
            setPumaBack('')
        }
    }, [pumaStateHovered, isPuma])
    useEffect(() => {
        if (flintStateHovered) {
            setisFlint('black')
            setFlintBack('flintBack')
        } else {
            setisFlint('')
            setFlintBack('')
        }
    }, [flintStateHovered, isFlint])
    useEffect(() => {
        if (bigStateHovered) {
            setisBig('black')
            setBigBack('bigBack')
        } else {
            setisBig('')
            setBigBack('')
        }
    }, [bigStateHovered, isBig])
    useEffect(() => {
        if (pmStateHovered) {
            setisPm('black')
            setPmBack('pmBack')
        } else {
            setisPm('')
            setPmBack('')
        }
    }, [pmStateHovered, isPm])
    useEffect(() => {
        if (naviStateHovered) {
            setisNavi('black')
            setNaviBack('naviBack')
        } else {
            setisNavi('')
            setNaviBack('')
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

    const casesArray = [
        {
            title: "McDonald's",
            id: 1,
            className: 'mcDonalds',
        },
        {
            title: 'Puma',
            id: 2,
            className: 'puma',
        },
        {
            title: 'Flint',
            id: 3,
            className: 'flint',
        },
        {
            title: 'Little big',
            id: 4,
            className: 'littleBig',
        },
        {
            title: 'Parimatch',
            id: 5,
            className: 'parimatch',
        },
        {
            title: 'Navi',
            id: 6,
            className: 'navi',
        },
    ]



    if (isClicked) {
        return (
            <div
                className={`${mcBack} ${pumaBack} ${flintBack} ${bigBack} ${pmBack} ${naviBack} noise animate__animated animate__slideInUp casesLayout`}
            >
                <Line color={'#7344F4'}/>
                <div className="casesTextBlock">
                    <div className="casesArrow" />
                    <p>
                        We’re always looking the truth about the brand we work
                        with and tell it naturaly and gorgeous, like no one else
                        before.
                    </p>
                </div>
                <div
                    className={
                        mcStateHovered ? 'casesMain' : 'casesMain displayNone'
                    }
                >
                    <h1>McDonald's</h1>
                    <p>Granding, VFX, motion</p>
                </div>
                <div
                    className={
                        pumaStateHovered ? 'casesMain' : 'casesMain displayNone'
                    }
                >
                    <h1>Puma Ukraine</h1>
                    <p>VFX, motion</p>
                </div>
                <div
                    className={
                        flintStateHovered
                            ? 'casesMain'
                            : 'casesMain displayNone'
                    }
                >
                    <h1>Flint</h1>
                    <p>Granding, VFX, motion</p>
                </div>
                <div
                    className={
                        bigStateHovered ? 'casesMain' : 'casesMain displayNone'
                    }
                >
                    <h1>Little big</h1>
                    <p>Granding, VFX, motion</p>
                </div>
                <div
                    className={
                        pmStateHovered ? 'casesMain' : 'casesMain displayNone'
                    }
                >
                    <h1>Parimatch</h1>
                    <p>Granding, VFX, motion</p>
                </div>
                <div
                    className={
                        naviStateHovered ? 'casesMain' : 'casesMain displayNone'
                    }
                >
                    <h1>Navi</h1>
                    <p>Granding, VFX, motion</p>
                </div>
                <div className="casesArray">
                    <div
                        onMouseEnter={onMcEnter}
                        onMouseLeave={onMcLeave}
                        className={casesArray[0].className}
                    >
                        {casesArray[0].title}
                    </div>
                    <div
                        onMouseEnter={onPumaEnter}
                        onMouseLeave={onPumaLeave}
                        className={casesArray[1].className}
                    >
                        {casesArray[1].title}
                    </div>
                    <div
                        onMouseEnter={onFlintEnter}
                        onMouseLeave={onFlintLeave}
                        className={casesArray[2].className}
                    >
                        {casesArray[2].title}
                    </div>
                    <div
                        onMouseEnter={onBigEnter}
                        onMouseLeave={onBigLeave}
                        className={casesArray[3].className}
                    >
                        {casesArray[3].title}
                    </div>
                    <div
                        onMouseEnter={onPMEnter}
                        onMouseLeave={onPMLeave}
                        className={casesArray[4].className}
                    >
                        {casesArray[4].title}
                    </div>
                    <div
                        onMouseEnter={onNaviEnter}
                        onMouseLeave={onNaviLeave}
                        className={casesArray[5].className}
                    >
                        {casesArray[5].title}
                    </div>
                </div>
                <div className="casesBtn gradientBtn">
                    <p>
                        Explore
                        <br />
                        all
                        <br />
                        cases
                    </p>
                </div>
            </div>
        )
    } else return null
}
