import React from 'react'
import './StoryPage.css'
import StoryMain from './StoryComponents/StoryMain/StoryMain'
import CursorProvider from '../../CursorProvider/CursorProvider'
import StoryBottom from './StoryComponents/StoryBottom/StoryBottom'

export const StoryPage = () => {
    return (
        <CursorProvider>
            <StoryMain />
            <StoryBottom />
        </CursorProvider>
    )
}
