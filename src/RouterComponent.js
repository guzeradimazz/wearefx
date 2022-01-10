import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import App from './App'
import CasesFullMobile from './components/Cases/CasesFullMobile'
import CasesMobile from './components/Cases/CasesMobile'
import HireMobile from './components/Hire/HireMobile'
import { CasesPage } from './components/Pages/CasesPage/CasesPage'
import CasesPagePersonal from './components/Pages/CasesPagePersonal/CasesPagePersonal'
import HirePage from './components/Pages/HirePage/HirePage'
import { StoryPage } from './components/Pages/StoryPage/StoryPage'
import StoryMobile from './components/Story/StoryMobile'
import StoryMobileFull from './components/Story/StoryMobileFull'
import { useTransition, animated } from 'react-spring'
import { CSSTransition } from 'react-transition-group'

const Routerelement = () => {
    const location = useLocation()
    const transitions = useTransition(location, {
        from: {
            position: 'absolute',
            width: '100vw',
            heigth: '100vh',
            opacity: 0,
            transform: 'translatesY(0%)',
        },
        enter: {
            position: 'absolute',
            width: '100vw',
            heigth: '100vh',
            opacity: 1,
            transform: 'translatesY(0%)',
        },
        leave: {
            position: 'absolute',
            width: '100vw',
            heigth: '100vh',
            opacity: 0,
            transform: 'translatesY(100%)',
        },
    })
    return transitions((props, item) => (
        <animated.div style={props}>
            <Routes location={item}>
                <Route exact path="/wearefx" element={<App />} />
                <Route exact path="/story" element={<StoryPage />} />
                <Route exact path="/cases" element={<CasesPage />} />
                <Route exact path="/hire" element={<HirePage />} />
                <Route exact path="/storyMobile" element={<StoryMobile />} />
                <Route
                    exact
                    path="/storyMobileFull"
                    element={<StoryMobileFull />}
                />
                <Route exact path="/hireMobile" element={<HireMobile />} />
                <Route exact path="/casesMobile" element={<CasesMobile />} />
                <Route
                    exact
                    path="/cases/:id"
                    element={<CasesPagePersonal />}
                />
                <Route
                    exact
                    path="/casesfullmobile"
                    element={<CasesFullMobile />}
                />
            </Routes>
        </animated.div>
    ))
}

export default Routerelement
