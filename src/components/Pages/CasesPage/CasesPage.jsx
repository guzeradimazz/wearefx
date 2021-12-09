import React, { useEffect, useState } from 'react'
import StoryHeader from '../StoryPage/StoryComponents/StoryHeader/StoryHeader'
import Cube from '../../Cube/Cube'
import './CasesPage.css'
import CursorProvider from '../../CursorProvider/CursorProvider'
import { CasesSlider } from './CasesSlider/CasesSlider'

export const CasesPage = () => {
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
        },
        {
            id: 2,
            title: `Puma`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Puma',
        },
        {
            id: 3,
            title: `Flint`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Flint',
        },
        {
            id: 4,
            title: `Little big`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-big',
        },
        {
            id: 5,
            title: `Parimatch`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Pm',
        },
        {
            id: 6,
            title: `Navi`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Navi',
        },
        {
            id: 7,
            title: `Tvorchi`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Tvorchi',
        },
        {
            id: 8,
            title: `Bond Delivery`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Bond',
        },
        {
            id: 9,
            title: `Puma X FC Shaktar`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Shaktar',
        },
        {
            id: 10,
            title: `Kite`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Kite',
        },
        {
            id: 11,
            title: `Chipsters`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Chipsters',
        },
        {
            id: 12,
            title: `Hushme`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-item',
        },
    ]

    const [currentPage, setCurrentPage] = useState(1)
    const [isHoveredBackground, setIsHoveredBackground] = useState('')

    const onMouseEnterCase = (element) => {
        setIsHoveredBackground(element.casesArrayItemBack)
    }
    const onMouseLeaveCase = () => {
        setIsHoveredBackground('')
    }

    return (
        <CursorProvider>
            <div className={`cases-page noise`}>
                <Cube />
                <div className={isHoveredBackground}>
                    <StoryHeader
                        titleW={'our'}
                        titleY={'cases'}
                        menu1={'our story'}
                        menu2={'hire us'}
                    />
                    <div className="cases-Array">
                        {casesArray.map((item) => (
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
                    
                    <div style={{ width: '18%' }} className="casesTextBlock">
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
