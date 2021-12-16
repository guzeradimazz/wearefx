import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CursorProvider from '../../CursorProvider/CursorProvider'
import StoryFooter from '../StoryPage/StoryComponents/StoryBottom/StoryFooter'
import './CasesPagePersonal.css'
import ContactBlock from './ContactBlock'
import { PersonalHeader } from './PersonalHeader'
import { PersonalSlider } from './PersonalSlider'
import TextBlock from './TextBlock'
import { VideoPersonal } from './Video/VideoPersonal'

const CasesPagePersonal = () => {
    useEffect(() => {
        document.getElementById('overlay1').classList.add('displayNone')
        document.getElementById('overlay2').classList.add('displayNone')
        document.getElementById('overlay3').classList.add('displayNone')
    }, [])
    return (
        <CursorProvider>
            <div className="personal-page">
                <PersonalHeader />
                <VideoPersonal />
                <TextBlock
                    text={
                        'we wanted to show the duality of the life that a child with kidney disease faces everyday. We came up with a technique commonly used in photography, but not as often used in films.'
                    }
                />
                <div className="personal-image" />
                <TextBlock
                    text={
                        'The key to pulling of the multiplicity effect was a piece of camera equipment know as a Technodolly. This computer controlled camera crane, can be pre-programmed to make the same camera movement over and over again. As it follows the same predefined path we shoot the kids in different positions. This allows to overlay and stitch the shots so we end up with the same child twice in one shot'
                    }
                />
                <PersonalSlider />
                <TextBlock
                    firstTxt={'Kees Albers - creative director'}
                    secondTxt={'Bureauloos'}
                    text={
                        '“It was a real pleasure working together with this team. WeareFX, they really took the concept of the film to the next level! The result is really great and even better than we imagined."'
                    }
                />
                <ContactBlock />
                <div className="next-project">
                    <div className="storyBtn gradientBtn">
                        <p>
                            Explore
                            <br />
                            this project
                        </p>
                    </div>
                    <div className="info-block">
                        <h1>McDonald's</h1>
                        <p>Granding, VFX, motion</p>
                        <p className="next-proj">Next project</p>
                    </div>
                </div>
                <StoryFooter />
            </div>
        </CursorProvider>
    )
}

export default CasesPagePersonal
