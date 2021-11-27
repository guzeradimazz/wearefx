import React from 'react';
import MainPageButton from '../MainPageButton/MainPageButton';
import './MainPage.css'

const MainPage = () => {
    return (
        <div>
            <div className='showreel'>
                {/* video */}
            </div>

            <div className='main'>
                <div className="main__top">
                    <p className='typing__text'>WeareFX,<br />
                        сreative <br />
                        studio<br />
                        with<br />
                        big <br />
                        ideas
                    </p>
                    <MainPageButton text={'cases'}/>
                    <div className='main__logo'/>
                </div>
                <div className="main__bottom">
                    <MainPageButton text={'story'}/>
                    <hr className='main__bottom__video'/>
                    <MainPageButton text={'hire us'}/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;