import React, { useEffect } from 'react'
import './Hire.css'
import 'animate.css'
import Cube from '../Cube/Cube'

export const Hire = ({
    isClicked,
    canvases,
    isCanvasesHidded,
    isHireEntered,
}) => {
    const offCanvases = () => {
        canvases.map((i) => i.classList.add('displayNone'))
    }
    const onCanvases = () => {
        canvases.map((i) => i.classList.remove('displayNone'))
    }
    useEffect(() => {
        if (isCanvasesHidded) offCanvases()
        else onCanvases()
    }, [isCanvasesHidded])

    useEffect(() => {
        if (!isHireEntered && isCanvasesHidded)
            canvases[2].classList.add('displayNone')
        else canvases[2].classList.remove('displayNone')
    }, [isHireEntered])

    if (isClicked) {
        return (
            <div className="hireLayout noise">
                <Cube/>
                <div className="hireBLock">
                    <div className="hireBLock__left">
                        <div className="hireBLock__left__top">
                            <a href="#">Instagram</a>
                            <a href="#">Facebook</a>
                            <a href="#">behance</a>
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
                                Wearefx © 2021 by<a className='violet_on_hover' href="#"> Brāh lab ﹤</a>
                            </p>
                            <a className='violet_on_hover' href="#">Privacy Policy ﹤</a>
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
                <div className="hireBtn gradientBtn">
                    <p>
                        chat with us
                        <br /> in telegram
                    </p>
                </div>
            </div>
        )
    } else return null
}
