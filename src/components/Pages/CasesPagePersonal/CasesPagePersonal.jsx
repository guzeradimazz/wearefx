import React, { useEffect, useRef, useState } from 'react'
import CursorProvider from '../../CursorProvider/CursorProvider'
import StoryFooter from '../StoryPage/StoryComponents/StoryBottom/StoryFooter'
import './CasesPagePersonal.css'
import ContactBlock from './ContactBlock'
import { PersonalHeader } from './PersonalHeader'
import { PersonalSlider } from './PersonalSlider'
import TextBlock from './TextBlock'
import { VideoPersonal } from './Video/VideoPersonal'
import '../../../styles/Global.css'
import { VideoPersonal1 } from './Video2/VideoPersonal1'

const CasesPagePersonal = () => {
    useEffect(() => {
        document.getElementById('polyline').classList.add('displayNone')
        document.getElementById('polyline1').classList.add('displayNone')
        document.getElementById('polyline2').classList.add('displayNone')
        document.getElementById('overlay1').classList.add('displayNone')
        document.getElementById('overlay2').classList.add('displayNone')
        document.getElementById('overlay3').classList.add('displayNone')
    }, [])
    useEffect(() => {
        document
            .getElementById('personalPageId')
            .addEventListener('mouseout', () => {
                document.getElementById('cursorId').classList.add('displayNone')
            })
        document
            .getElementById('personalPageId')
            .addEventListener('mousemove', () => {
                document
                    .getElementById('cursorId')
                    .classList.remove('displayNone')
            })
        return () => {
            document
                .getElementById('personalPageId')
                ?.removeEventListener('mouseout', () => {
                    document
                        .getElementById('cursorId')
                        .classList.add('displayNone')
                })
            document
                .getElementById('personalPageId')
                ?.removeEventListener('mousemove', () => {
                    document
                        .getElementById('cursorId')
                        .classList.remove('displayNone')
                })
        }
    }, [])

    const refPlayer = useRef(null)
    const refPlayerScreenfull = useRef(null)

    const refPlayer1 = useRef(null)
    const refPlayerScreenfull1 = useRef(null)

    const [fullscreen, setFullscreen] = useState(false)

    const [fullscreen1, setFullscreen1] = useState(false)
    return (
        <CursorProvider>
            <div id="personalPageId" className=" personal-page">
                <PersonalHeader />
                <VideoPersonal
                    fullscreen={fullscreen}
                    setFullscreen={setFullscreen}
                    refPlayer={refPlayer}
                    refPlayerScreenfull={refPlayerScreenfull}
                />
                <TextBlock
                    text={
                        'we wanted to show the duality of the life that a child with kidney disease faces everyday. We came up with a technique commonly used in photography, but not as often used in films.'
                    }
                />
                <VideoPersonal1
                    fullscreen={fullscreen1}
                    setFullscreen={setFullscreen1}
                    refPlayer={refPlayer1}
                    refPlayerScreenfull={refPlayerScreenfull1}
                />
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
                    <span className="shape pos5" />
                    <div className="pStoryBtn storyBtn gradientBtn">
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
