import React from 'react'
import CursorProvider from '../../CursorProvider/CursorProvider'
import './CasesPagePersonal.css'
import { PersonalHeader } from './PersonalHeader'
import { VideoPersonal } from './Video/VideoPersonal'

const CasesPagePersonal = () => {
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
