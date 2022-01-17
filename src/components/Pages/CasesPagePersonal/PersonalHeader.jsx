import React from 'react'
import { Link } from 'react-router-dom'

export const PersonalHeader = () => {
    let arr = '<'
    return (
        <div>
            <div className="personal-header">
                <div className="personal-left">
                    <div >
                        <Link className='personal-left-div' to="/cases">
                            <h1>our</h1>
                            <h1>cases {arr}</h1>
                        </Link>
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
                <Link to="/wearefx">
                        <div className="animated-logo-X">X</div>
                    <div className="animated-logo personal-right"></div>
                </Link>
            </div>
            <h1 className="header-title">NAVI X PUMA. OBSESSED WE.</h1>
            <h6 className="header-desc">Granding, VFX, motion, production</h6>
        </div>
    )
}
