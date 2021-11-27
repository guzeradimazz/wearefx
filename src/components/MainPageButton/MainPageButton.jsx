import React from 'react';
import './MainPageButton.css'

const MainPageButton = ({text}) => {
    return (
        <div>
            <div className='MainPageButton'>{text}</div>
        </div>
    );
};

export default MainPageButton;