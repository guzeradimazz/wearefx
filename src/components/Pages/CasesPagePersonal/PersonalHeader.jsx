import React from 'react'
import { Link } from 'react-router-dom'

export const PersonalHeader = () => {
    return (
        <div>
            <div className="personal-header">
                <div className="personal-left">
                    <div>
                        <h1>our</h1>
                        <h1>cases</h1>
                    </div>
                    <div>
                        <Link className="link" to="/story">
                            our story
                        </Link>
                        <Link className="link" to="/hire">
                            hire us
                        </Link>
                    </div>
                </div>
                <div className="personal-right"></div>
            </div>
            <h1 className="header-title">NAVI X PUMA. OBSESSED WE.</h1>
            <h6 className='header-desc'>Granding, VFX, motion, production</h6>
        </div>
    )
}
