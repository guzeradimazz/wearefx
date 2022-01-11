import React from 'react'
import ReactDOM from 'react-dom'
import './font/stylesheet.css'
import RouterComponent from './RouterComponent'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <RouterComponent />
        </BrowserRouter>
    </React.StrictMode>,

    document.getElementById('root')
)
