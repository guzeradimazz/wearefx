import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Cube from '../../Cube/Cube'
import CursorProvider from '../../CursorProvider/CursorProvider'
import './HirePage.css'
import '../StoryPage/StoryComponents/StoryHeader/StoryHeader.css'
import HirePageHeader from './HirePageHeader'

const HirePage = () => {
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
                <Cube />
                <HirePageHeader />
                <div className="hireBLock">
                    <div className="hireBLock__left">
                        <div className="hireBLock__left__top">
                            <Link to="/wearefx">Instagram</Link>
                            <Link to="/wearefx">Facebook</Link>
                            <Link to="/wearefx">behance</Link>
                        </div>
                        <div className="hireBLock__left__middle">
                            <p>
                                All contents of this website are the property oF
                                wearefx STUDIO. No part of this site, including
                                all text and images, may be reproduced in any
                                form without the prior written consent oF
                                wearefx STUDIO ©2021
                            </p>
                            <div className="arrowToTop" />
                        </div>
                        <h3 className="hireBLock__left__bottom">
                            We’re curious how we can
                            <br />
                            help, get in touch 👋
                        </h3>
                    </div>
                    <div className="hireBLock__right">
                        <div className="hireBLock__right__top">
                            <p>
                                Wearefx © 2021 by
                                <Link className="violet_on_hover" to="/wearefx">
                                    {' '}
                                    Brāh lab
                                </Link>
                            </p>
                            <Link className="violet_on_hover" to="/wearefx">
                                Privacy Policy
                            </Link>
                        </div>
                        <div className="hireBLock__right__middle">
                            <p>For general inquiries & new projects </p>
                            <h3>contact@wearefx.xyz</h3>
                        </div>
                        <div className="hireBLock__right__bottom">
                            <div className="contact">
                                <p>Studio manager</p>
                                <p>Alex Dysenko</p>
                                <div className="contact__tel">
                                    <p>a@wearefx.xyz</p>
                                    <a href="tel:+380935925000">
                                        +380935925000
                                    </a>
                                </div>
                            </div>
                            <div className="contact">
                                <p>Studio manager</p>
                                <p>Stas Ravsyi</p>
                                <div className="contact__tel">
                                    <p>s@wearefx.xyz</p>
                                    <a href="tel:+380636312065">
                                        +380636312065
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="hireBtnPoA">
                {' '}
                <div className="hireBtnPage casesBtn gradientBtn">
                    <p>
                        chat with us
                        <br />
                        in telegram
                    </p>
                </div>
            </div>
        </CursorProvider>
    )
}

export default HirePage
