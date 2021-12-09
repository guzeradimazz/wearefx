import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import {CasesPage} from './components/Pages/CasesPage/CasesPage'
import HirePage from './components/Pages/HirePage/HirePage'
import { StoryPage } from './components/Pages/StoryPage/StoryPage'
import './font/stylesheet.css'

ReactDOM.render(
    <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/wearefx" element={<App />} />
                    <Route path="/story" element={<StoryPage />} />
                    <Route path="/cases" element={<CasesPage />} />
                    <Route path="/hire" element={<HirePage />} />
                </Routes>
            </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
