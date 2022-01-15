import React from 'react'
import { Link } from 'react-router-dom'
import StoryFooter from '../Pages/StoryPage/StoryComponents/StoryBottom/StoryFooter'
import './HireMobile.css'

const HireMobile = () => {
    return (
        <div className="story-mobile">
            <div className="mobile-header">
                <Link to="/casesMobile" className="link">
                    Cases
                </Link>
                <Link to="/wearefx" className="to-home"></Link>
                <Link to="/storyMobile" className="link">
                    Our story
                </Link>
            </div>
            <div className="story-full-text">
                We’re curious how we can help, get in touch 👋
            </div>
            <div className="story-p-text">
                For general inquiries & new projects
            </div>
            <div className="story-full-text norm">contact@wearefx.xyz</div>
            <div className="story-contact">
                <p>Studio manager</p>
                <p>Alex Dysenko</p>
                <div className="story-full-text norm">a@wearefx.xyz</div>
                <div className="story-full-text norm">+380935925000</div>
            </div>
            <div className="story-contact">
                <p>Studio manager</p>
                <p>Alex Dysenko</p>
                <div className="story-full-text norm">a@wearefx.xyz</div>
                <div className="story-full-text norm">+380935925000</div>
            </div>
            <div className="hire-social">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="story-mobile-text">
                <div>
                    <p className="story-mobile-text2">
                        All contents of this website are the property oF wearefx
                        STUDIO. No part of this site, including all text and
                        images, may be reproduced in any form without the prior
                        written consent oF wearefx STUDIO ©2021
                    </p>
                    <div className="arrow-to-left" />
                </div>
            </div>
            <div className="hire-footer-right">
                <div>
                    <p>Wearefx © 2021 by </p>
                    <p className="violet_on_hover fw_norm"> Brāh lab ﹤</p>
                </div>
                <p className="violet_on_hove fw_norm">Privacy Policy ﹤</p>
            </div>
            <Link to="/storyMobileFull">
                <div className="casesBtn gradientBtn violetMobileMarg">
                    <p>
                        View our
                        <br />
                        expertise &<br />
                        tech.
                    </p>
                </div>
            </Link>
            <Link to="/hire">
                <div className="violetBtn mt150px">
                    <p>
                        we’re ready
                        <br />
                        hire us!
                    </p>
                </div>
            </Link>

            <div>
                <StoryFooter />
            </div>
        </div>
    )
}

export default HireMobile
