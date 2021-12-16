import React, { useEffect, useState, useRef } from 'react'
import { Cases } from '../Cases/Cases'
import { Hire } from '../Hire/Hire'
import { MainPageButton } from '../MainPageButton/MainPageButton'
import { Story } from '../Story/Story'
import TypingText from '../TypingText/TypingText'
import { Link } from 'react-router-dom'
import './MainPage.css'
import './MainPageMedia.css'

import videoPower from './video/videoPower.mp4'
import LineComp from '../Line/LineComp'
import CursorProvider from '../CursorProvider/CursorProvider'

const applyLayout = (canvas) => {
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
}

const MainPage = ({
    is1BtnHovered,
    is2BtnHovered,
    is3BtnHovered,
    setIs3BtnHovered,
    setIs2BtnHovered,
    setIs1BtnHovered,
}) => {
    const [isMc, setisMc] = useState('')
    const [isPuma, setisPuma] = useState('')
    const [isFlint, setisFlint] = useState('')
    const [isBig, setisBig] = useState('')
    const [isPm, setisPm] = useState('')
    const [isNavi, setisNavi] = useState('')

    const [buttonsCoords, setButtonsCoords] = useState([])

    const btn1Ref = useRef(null)
    const btn2Ref = useRef(null)
    const btn3Ref = useRef(null)

    const canvas1 = document.getElementById('overlay1')
    const canvas2 = document.getElementById('overlay2')
    const canvas3 = document.getElementById('overlay3')

    const [isCasesClicked, setIsCasesClicked] = useState(false)
    const [isCasesEntered, setIsCasesEntered] = useState(false)

    const [isStoryClicked, setIsStoryClicked] = useState(false)
    const [isStoryEntered, setIsStoryEntered] = useState(false)

    const [isHireClicked, setIsHireClicked] = useState(false)
    const [isHireEntered, setIsHireEntered] = useState(false)

    const [isCanvasesHidded, setIsCanvasesHidded] = useState(false)

    const on1BtnEnter = () => {
        setIs1BtnHovered(true)
        setIsCasesEntered(true)
        canvas1.classList.add('displayNone')
    }
    const on1BtnLeave = () => {
        setIsCasesEntered(false)
        canvas1.classList.remove('displayNone')
        setIs1BtnHovered(false)
    }
    const on2BtnEnter = () => {
        setIsStoryEntered(true)
        canvas2.classList.add('displayNone')
        setIs2BtnHovered(true)
    }
    const on2BtnLeave = () => {
        setIsStoryEntered(false)
        canvas2.classList.remove('displayNone')
        setIs2BtnHovered(false)
    }
    const on3BtnEnter = () => {
        setIsHireEntered(true)
        canvas3.classList.add('displayNone')
        setIs3BtnHovered(true)
    }
    const on3BtnLeave = () => {
        setIsHireEntered(false)
        canvas3.classList.remove('displayNone')
        setIs3BtnHovered(false)
    }
    const joinPoints = (ctx, from, to) => {
        const stroke = ctx.createLinearGradient(from.x, from.y, to.x, to.y)
        if (isCasesEntered || isStoryEntered || isHireEntered) {
            stroke.addColorStop(0, 'rgba(255, 255, 255, 0)')
            stroke.addColorStop(0.4, 'rgba(255, 255, 255, 0.2)')
            stroke.addColorStop(0.5, 'rgba(255, 255, 255, 0.9)')
            stroke.addColorStop(1, 'rgba(255, 255, 255, 0)')
        } else {
            stroke.addColorStop(0, 'rgba(255, 255, 255, 0)')
            stroke.addColorStop(0.4, 'rgba(255, 255, 255, 0.2)')
            stroke.addColorStop(0.5, 'white')
            stroke.addColorStop(1, 'rgba(255, 255, 255)')
        }
        ctx.strokeStyle = stroke
        ctx.lineWidth = 1

        ctx.beginPath()
        ctx.moveTo(from.x, from.y)

        if (isCasesEntered) ctx.lineTo(to.x + 4, to.y - 17)
        if (isStoryEntered) ctx.lineTo(to.x - 30, to.y + 12)
        if (isHireEntered) ctx.lineTo(to.x + 40, to.y + 12)
        else ctx.lineTo(to.x, to.y)
        ctx.stroke()
    }
    function drawAnimLine(canvas, mouseCoords, elementCoords) {
        const ctx = canvas.getContext('2d')
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            const x1 = elementCoords.x - window.scrollX
            const y1 = elementCoords.y - window.scrollY
            joinPoints(ctx, { x: x1, y: y1 }, mouseCoords)
        }
        requestAnimationFrame(draw)
    }
    const onMove = (e) => {
        if (!buttonsCoords.length) return
        drawAnimLine(
            canvas1,
            { x: e.clientX, y: e.clientY - 10 },
            buttonsCoords[0]
        )
        drawAnimLine(
            canvas2,
            { x: e.clientX - 9, y: e.clientY + 4 },
            buttonsCoords[1]
        )
        drawAnimLine(
            canvas3,
            { x: e.clientX + 8, y: e.clientY + 4 },
            buttonsCoords[2]
        )
    }
    useEffect(() => {
        applyLayout(canvas1)
        applyLayout(canvas2)
        applyLayout(canvas3)

        btn1Ref.current.addEventListener('mouseover', on1BtnEnter)
        btn1Ref.current.addEventListener('mouseleave', on1BtnLeave)

        btn2Ref.current.addEventListener('mouseover', on2BtnEnter)
        btn2Ref.current.addEventListener('mouseleave', on2BtnLeave)

        btn3Ref.current.addEventListener('mouseover', on3BtnEnter)
        btn3Ref.current.addEventListener('mouseleave', on3BtnLeave)

        if (!buttonsCoords.length) {
            setButtonsCoords([
                btn1Ref.current?.getBoundingClientRect(),
                btn2Ref.current?.getBoundingClientRect(),
                btn3Ref.current?.getBoundingClientRect(),
            ])
        }
        window.addEventListener('mousemove', onMove)

        return () => {
            window.removeEventListener('mousemove', onMove)

            try {
                btn1Ref.current.removeEventListener('mouseover', on1BtnEnter)
                btn1Ref.current.removeEventListener('mouseleave', on1BtnLeave)

                btn2Ref.current.removeEventListener('mouseover', on2BtnEnter)
                btn2Ref.current.removeEventListener('mouseleave', on2BtnLeave)

                btn3Ref.current.removeEventListener('mouseover', on3BtnEnter)
                btn3Ref.current.removeEventListener('mouseleave', on3BtnLeave)
            } catch (error) {
                console.error(error)
            }
        }
    }, [
        buttonsCoords.length,
        is1BtnHovered,
        is2BtnHovered,
        is3BtnHovered,
        on1BtnEnter,
        on1BtnLeave,
        on2BtnEnter,
        on2BtnLeave,
        on3BtnEnter,
        on3BtnLeave,
    ])

    const casesClicked = () => {
        setIsCanvasesHidded(!isCanvasesHidded)
        setIsCasesClicked(!isCasesClicked)
    }
    const storyClicked = () => {
        setIsCanvasesHidded(!isCanvasesHidded)
        setIsStoryClicked(!isStoryClicked)
    }
    const hireClicked = () => {
        setIsCanvasesHidded(!isCanvasesHidded)
        setIsHireClicked(!isHireClicked)
    }

    return (
        <div>
            <video className="showreel" autoPlay loop muted>
                <source src={videoPower} type="video/mp4" />
            </video>
            <div className="showreel__mobile"></div>
            <div className="toner" />
            <div>
                <Link to="/story"> STORY PAGE </Link>
                <Link to="/cases"> CASES PAGE </Link>
                <Link to="/hire"> HIRE PAGE </Link>
                <Link to='/pesonal'>VIDEO</Link>
                <MainPageButton
                    canvas={canvas1}
                    onClick={casesClicked}
                    isHovered={isCasesEntered}
                    title="cases"
                    isClicked={isCasesClicked}
                    className={
                        isCasesClicked
                            ? 'clickedCases firstCircle '
                            : 'firstCircle'
                    }
                    ref={btn1Ref}
                />
                <MainPageButton
                    canvas={canvas2}
                    onClick={storyClicked}
                    isHovered={is2BtnHovered}
                    title="story"
                    ref={btn2Ref}
                    isClicked={isStoryClicked}
                    className={
                        isStoryClicked
                            ? 'clickedStory secondCircle'
                            : 'secondCircle'
                    }
                />
                <MainPageButton
                    canvas={canvas3}
                    onClick={hireClicked}
                    isHovered={is3BtnHovered}
                    title="hire us"
                    ref={btn3Ref}
                    isClicked={isHireClicked}
                    className={
                        isHireClicked
                            ? 'clickedHire thirdCircle'
                            : 'thirdCircle'
                    }
                    x
                />
                <Cases
                    isMc={isMc}
                    setisMc={setisMc}
                    isPuma={isPuma}
                    setisPuma={setisPuma}
                    isFlint={isFlint}
                    setisFlint={setisFlint}
                    isBig={isBig}
                    setisBig={setisBig}
                    isPm={isPm}
                    setisPm={setisPm}
                    isNavi={isNavi}
                    setisNavi={setisNavi}
                    isCasesEntered={isCasesEntered}
                    isCanvasesHidded={isCanvasesHidded}
                    canvases={[canvas1, canvas2, canvas3]}
                    isClicked={isCasesClicked}
                />
                <Story
                    isStoryEntered={isStoryEntered}
                    isCanvasesHidded={isCanvasesHidded}
                    canvases={[canvas1, canvas2, canvas3]}
                    isClicked={isStoryClicked}
                />
                <Hire
                    isHireEntered={isHireEntered}
                    isCanvasesHidded={isCanvasesHidded}
                    canvases={[canvas1, canvas2, canvas3]}
                    isClicked={isHireClicked}
                    setIsClicked={setIsHireClicked}
                />
                <div
                    className={` ${isMc} ${isPuma} ${isFlint} ${isBig} ${isPm} ${isNavi} main`}
                >
                    {/* <LineComp/> */}
                    <div className="main__top">
                        <TypingText isClicked={isCasesClicked} />
                        <div className="main__logo" />
                    </div>
                    <div className="main__bottom">
                        <div className="main__bottom__video">
                            <div className="progress-done"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage
