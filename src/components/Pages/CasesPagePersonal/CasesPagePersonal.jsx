import React,{useEffect} from 'react'
import CursorProvider from '../../CursorProvider/CursorProvider'
import './CasesPagePersonal.css'
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
                <TextBlock text={'we wanted to show the duality of the life that a child with kidney disease faces everyday. We came up with a technique commonly used in photography, but not as often used in films.'}/>
                <div className='personal-image' />
                <TextBlock text={'The key to pulling of the multiplicity effect was a piece of camera equipment know as a Technodolly. This computer controlled camera crane, can be pre-programmed to make the same camera movement over and over again. As it follows the same predefined path we shoot the kids in different positions. This allows to overlay and stitch the shots so we end up with the same child twice in one shot'}/>
                <PersonalSlider/>
            </div>
        </CursorProvider>
    )
}

export default CasesPagePersonal
