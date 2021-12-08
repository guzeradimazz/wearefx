import React, { useEffect, useState } from 'react'
import StoryHeader from '../StoryPage/StoryComponents/StoryHeader/StoryHeader'
import Cube from '../../Cube/Cube'
import './CasesPage.css'

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
            isShowed: true,
            isHovered: false,
            personalClass: 'hush-MC',
        },
        {
            id: 2,
            title: `Puma`,
            isShowed: true,
            isHovered: false,
            personalClass: 'hush-Puma',
        },
        {
            id: 3,
            title: `Flint`,
            isShowed: true,
            isHovered: false,
            personalClass: 'hush-Flint',
        },
        {
            id: 4,
            title: `Little big`,
            isShowed: true,
            isHovered: false,
            personalClass: 'hush-big',
        },
        {
            id: 5,
            title: `Parimatch`,
            isShowed: true,
            isHovered: false,
            personalClass: 'hush-Pm',
        },
        {
            id: 6,
            title: `Navi`,
            isShowed: true,
            isHovered: false,
            personalClass: 'hush-Navi',
        },
        {
            id: 7,
            title: `Tvorchi`,
            isShowed: true,
            isHovered: false,
            personalClass: 'hush-Tvorchi',
        },
        {
            id: 8,
            title: `Bond Delivery`,
            isShowed: true,
            isHovered: false,
            personalClass: 'hush-Bond',
        },
        {
            id: 9,
            title: `Puma X FC Shaktar`,
            isShowed: true,
            isHovered: false,
            personalClass: 'hush-Shaktar',
        },
        {
            id: 10,
            title: `Kite`,
            isShowed: true,
            isHovered: false,
            personalClass: 'hush-Kite',
        },
        {
            id: 11,
            title: `Chipsters`,
            isShowed: true,
            isHovered: false,
            personalClass: 'hush-Chipsters',
        },
        {
            id: 12,
            title: `Hushme`,
            isShowed: true,
            isHovered: false,
            personalClass: 'hush-item',
        },
    ]

    return (
        <div className="cases-page noise">
            <Cube />
            <StoryHeader titleW={'our'} titleY={'cases'} menu1={'our story'}  menu2={'hire us'}/>
            <div className='cases-Array'>
                {casesArray.map((item) => (
                    <div
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
            <div style={{ width: '18%' }} className="casesTextBlock">
                <div className="casesArrow" />
                <p>
                    We’re always looking the truth about the brand we work with
                    and tell it naturaly and gorgeous, like no one else before.
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
    )
}
