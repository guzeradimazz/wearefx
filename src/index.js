import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import CursorProvider from './components/CursorProvider/CursorProvider'
import { StoryPage } from './components/Pages/StoryPage/StoryPage'

ReactDOM.render(
    <React.StrictMode>
        <CursorProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/wearefx" element={<App />} />
                    <Route path="/story" element={<StoryPage />} />
                </Routes>
            </BrowserRouter>
        </CursorProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
