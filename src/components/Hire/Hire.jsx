import React, { useEffect, useCallback } from 'react'
import './Hire.css'
import Cube from '../Cube/Cube'
import { Link } from 'react-router-dom'
import Line from '../Line/Line'
import useWindowDimensions from '../useWindowDimension/useWindowDimensions'

export const Hire = ({
    polyline,
    coordsToX,
    coordsToY,
    isClicked,
    canvases,
    isCanvasesHidded,
    isHireEntered,
}) => {
    useEffect(() => {
        document.getElementById('polyline').classList.add('displayNone')
        document.getElementById('polyline1').classList.add('displayNone')
    }, [])

    const { width, height } = useWindowDimensions()

    const offCanvases = useCallback(() => {
        canvases.map((i) => i.classList.add('displayNone'))
        polyline.classList.remove('displayNone')
    }, [canvases, polyline.classList])

    const onCanvases = useCallback(() => {
        canvases.map((i) => i.classList.remove('displayNone'))
        polyline.classList.add('displayNone')
    }, [canvases, polyline.classList])

    useEffect(() => {
        if (isCanvasesHidded) offCanvases()
        else onCanvases()

        if (!isHireEntered && isCanvasesHidded)
            canvases[2].classList.add('displayNone')
        else canvases[2].classList.remove('displayNone')
    }, [isCanvasesHidded, isHireEntered, onCanvases, offCanvases, canvases])

    const ToFullScreen = () => {
        const elem = document.getElementById('hireLayoutElem')
        elem.classList.add('hireFullScreen')
    }
    return (
        <div
            id="hireLayoutElem"
            className={isClicked ? 'hireLayout' : 'hireLayoutReversed'}
        >
            <Cube />
            <Line
                polyline={polyline}
                isClicked={isClicked}
                coords={{
                    first: {
                        x: width * 0.85,
                        y: 0,
                    },
                    last: {
                        x: coordsToX + 20,
                        y: coordsToY,
                    },
                }}
                coords1={{
                    first: {
                        x: coordsToX + 20,
                        y: coordsToY + 20,
                    },
                    last: {
                        x: 0,
                        y: height,
                    },
                }}
                amount={7}
            />
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
                            wearefx STUDIO. No part of this site, including all
                            text and images, may be reproduced in any form
                            without the prior written consent oF wearefx STUDIO
                            ©2021
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
                            <Link
                                className="violet_on_hover"
                                to="/wearefx"
                                onClick={() => ToFullScreen()}
                            >
                                {' '}
                                Brāh lab ﹤
                            </Link>
                        </p>
                        <Link
                            className="violet_on_hover"
                            to="/wearefx"
                            onClick={() => ToFullScreen()}
                        >
                            Privacy Policy ﹤
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
                                <Link to="tel:+380935925000">
                                    +380935925000
                                </Link>
                            </div>
                        </div>
                        <div className="contact">
                            <p>Studio manager</p>
                            <p>Stas Ravsyi</p>
                            <div className="contact__tel">
                                <p>s@wearefx.xyz</p>
                                <a href="tel:+380636312065">+380636312065</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/hire" onClick={() => ToFullScreen()}>
                <span className="shape pos1"/>
                <div className="hireBtn gradientBtn ">
                    <p>
                        chat with us
                        <br /> in telegram
                    </p>
                </div>
            </Link>
        </div>
    )
}
