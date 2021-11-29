import React from 'react';
import MainPageButton from '../MainPageButton/MainPageButton';
import MainPageButton2 from '../MainPageButton/MainPageButton2';
import MainPageButton3 from '../MainPageButton/MainPageButton3';
import TypingText from '../TypingText/TypingText';
import './MainPage.css'

const MainPage = () => {

    return (
         <div >     
            <div className='showreel'>
                {/* video */}
            </div>
            <MainPageButton />
            <MainPageButton2 />
            <MainPageButton3 />
            <div className='main'>
                <div className="main__top">
                    <TypingText /> 
                    <div className='main__logo'/>
                </div>
                <div className="main__bottom">
                    <hr className='main__bottom__video'/>
                </div>
            </div>

        </div>
    );
    
};

export default MainPage;