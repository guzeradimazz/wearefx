import React, { useEffect, useState } from 'react'
import Cube from '../../Cube/Cube'
import './CasesPage.css'
import '../StoryPage/StoryComponents/StoryHeader/StoryHeader.css'
import CursorProvider from '../../CursorProvider/CursorProvider'
import { CasesSlider } from './CasesSlider/CasesSlider'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const CasesPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [isHoveredBackground, setIsHoveredBackground] = useState('')
    const [showedCases, setShowedCases] = useState([])

    const navigate = useNavigate()

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
            id: 12345,
            title: `McDonald's`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-MC',
            page: 1,
        },
        {
            id: 4562,
            title: `Puma`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Puma',

            page: 1,
        },
        {
            id: 435673,
            title: `Flint`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Flint',

            page: 1,
        },
        {
            id: 498765432,
            title: `Little big`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-big',

            page: 1,
        },
        {
            id: 55678,
            title: `Parimatch`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Pm',

            page: 1,
        },
        {
            id: 66743567,
            title: `Navi`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Navi',

            page: 1,
        },
        {
            id: 756789,
            title: `Tvorchi`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Tvorchi',

            page: 1,
        },
        {
            id: 8765438,
            title: `Bond Delivery`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Bond',

            page: 1,
        },
        {
            id: 567899,
            title: `Puma X FC Shaktar`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Shaktar',

            page: 1,
        },
        {
            id: 1890876540,
            title: `Kite`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Kite',

            page: 1,
        },
        {
            id: 1678908767541,
            title: `Chipsters`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Chipsters',

            page: 1,
        },
        {
            id: 1567892,
            title: `Hushme`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-item',
            page: 1,
        },
        {
            id: 135555,
            title: `test test`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-item',
            page: 2,
        },
        {
            id: 16786544,
            title: `test test`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-item',
            page: 2,
        },
        {
            id: 567815,
            title: `test test`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-item',
            page: 2,
        },
        {
            id: 1765435,
            title: `test test`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-item',
            page: 2,
        },
    ]

    useEffect(() => {
        setShowedCases([...casesArray].filter((e) => e.page === currentPage))
    }, [currentPage])

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
                        <Link to="/wearefx">
                            <div className="header-right"></div>
                        </Link>
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
                                onClick={()=>navigate(`/cases/${item.id}`)}
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
