import React, { useEffect } from 'react'
import StoryMain from './StoryComponents/StoryMain/StoryMain'
import StoryBottom from './StoryComponents/StoryBottom/StoryBottom'
import CursorProvider from '../../CursorProvider/CursorProvider'

import './StoryPageMedia.css'

export const StoryPage = () => {
    useEffect(() => {
        document.getElementById('polyline').classList.add('displayNone')
        document.getElementById('polyline1').classList.add('displayNone')
        document.getElementById('polyline2').classList.add('displayNone')
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
