import React,{useEffect} from 'react'
import CursorProvider from '../../CursorProvider/CursorProvider'
import './CasesPagePersonal.css'
import { PersonalHeader } from './PersonalHeader'
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
            </div>
        </CursorProvider>
    )
}

export default CasesPagePersonal
