import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import {CasesPage} from './components/Pages/CasesPage/CasesPage'
import CasesPagePersonal from './components/Pages/CasesPagePersonal/CasesPagePersonal'
import HirePage from './components/Pages/HirePage/HirePage'
import { StoryPage } from './components/Pages/StoryPage/StoryPage'
import './font/stylesheet.css'

ReactDOM.render(
    <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/wearefx" element={<App />} />
                    <Route exact path="/story" element={<StoryPage />} />
                    <Route exact path="/cases" element={<CasesPage />} />
                    <Route exact path="/hire" element={<HirePage />} />
                    <Route exact path="/pesonal" element={<CasesPagePersonal />} />
                </Routes>
            </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
