import React,{ useState,useEffect } from 'react';

const TypingText = () => {
    const typingText=[
        'WeareFX,сreative studio with big ideas'
    ]
    const [text, setText] = useState(typingText)
    
    return (
        <div className='typing__text'>
            {
                text[0].split('').map(i=>i)
            }
        </div>
    );
};

export default TypingText;