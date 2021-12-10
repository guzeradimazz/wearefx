import React, { useEffect, useState } from 'react'
import Cube from '../../Cube/Cube'
import './CasesPage.css'
import '../StoryPage/StoryComponents/StoryHeader/StoryHeader.css'
import CursorProvider from '../../CursorProvider/CursorProvider'
import { CasesSlider } from './CasesSlider/CasesSlider'
import { Link } from 'react-router-dom'

export const CasesPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [isHoveredBackground, setIsHoveredBackground] = useState('')
    const [showedCases, setShowedCases] = useState([])

    const onMouseEnterCase = (element) => {
        setIsHoveredBackground(element.casesArrayItemBack)
    }
    const onMouseLeaveCase = () => {
        setIsHoveredBackground('')
    }

    useEffect(() => {
        document.getElementById('overlay1').classList.add('displayNone')
        document.getElementById('overlay2').classList.add('displayNone')
        document.getElementById('overlay3').classList.add('displayNone')
    }, [])

    const casesArray = [
        {
            id: 1,
            title: `McDonald's`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-MC',

            page: 1,
        },
        {
            id: 2,
            title: `Puma`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Puma',

            page: 1,
        },
        {
            id: 3,
            title: `Flint`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Flint',

            page: 1,
        },
        {
            id: 4,
            title: `Little big`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-big',

            page: 1,
        },
        {
            id: 5,
            title: `Parimatch`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Pm',

            page: 1,
        },
        {
            id: 6,
            title: `Navi`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Navi',

            page: 1,
        },
        {
            id: 7,
            title: `Tvorchi`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Tvorchi',

            page: 1,
        },
        {
            id: 8,
            title: `Bond Delivery`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Bond',

            page: 1,
        },
        {
            id: 9,
            title: `Puma X FC Shaktar`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Shaktar',

            page: 1,
        },
        {
            id: 10,
            title: `Kite`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Kite',

            page: 1,
        },
        {
            id: 11,
            title: `Chipsters`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Chipsters',

            page: 1,
        },
        {
            id: 12,
            title: `Hushme`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-item',
            page: 1,
        },
        {
            id: 13,
            title: `test test`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-item',
            page: 2,
        },
        {
            id: 14,
            title: `test test`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-item',
            page: 2,
        },
        {
            id: 15,
            title: `test test`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-item',
            page: 2,
        },
        {
            id: 15,
            title: `test test`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-item',
            page: 2,
        },
    ]

    useEffect(() => {
        setShowedCases(casesArray.filter((e) => e.page === currentPage))
    }, [currentPage, setShowedCases, casesArray])

    return (
        <CursorProvider>
            <div className={`cases-page`}>
                <Cube />
                <div className={`${isHoveredBackground}`}>
                    <div className="story-header">
                        <div className="header-left">
                            <div>
                                <h1>our</h1>
                                <h1>cases</h1>
                            </div>
                            <div>
                                <Link to="/story">our story</Link>
                                <Link to="/hire">hire us</Link>
                            </div>
                        </div>
                        <div className="header-right"></div>
                    </div>
                    <div className="cases-Array">
                        {showedCases.map((item) => (
                            <div
                                onMouseEnter={() => onMouseEnterCase(item)}
                                onMouseLeave={() => onMouseLeaveCase()}
                                className={
                                    item.isHovered
                                        ? `${item.personalClass} casesArrayItem`
                                        : 'casesArrayItem'
                                }
                                key={item.id}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>

                    <CasesSlider
                        state={currentPage}
                        setState={setCurrentPage}
                    />

                    <div className="casesTextBlock">
                        <div className="casesArrow" />
                        <p>
                            We’re always looking the truth about the brand we
                            work with and tell it naturaly and gorgeous, like no
                            one else before.
                        </p>
                    </div>
                    <div className="casesBtn gradientBtn">
                        <p>
                            We’re
                            <br />
                            ready
                            <br />
                            Hire us
                        </p>
                    </div>
                </div>
            </div>
        </CursorProvider>
    )
}
