import React, { useEffect } from 'react'
import './StoryPage.css'
import StoryMain from './StoryComponents/StoryMain/StoryMain'
import StoryBottom from './StoryComponents/StoryBottom/StoryBottom'
import CursorProvider from '../../CursorProvider/CursorProvider'

export const StoryPage = () => {
    useEffect(() => {
        document.getElementById('overlay1').classList.add('displayNone')
        document.getElementById('overlay2').classList.add('displayNone')
        document.getElementById('overlay3').classList.add('displayNone')
    }, [])
    return (
        <CursorProvider>
            <div>
                <StoryMain />
                <StoryBottom />
            </div>
        </CursorProvider>
    )
}
