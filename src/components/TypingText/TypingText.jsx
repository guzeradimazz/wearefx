import React,{ useEffect,useRef } from 'react';
import Typed from 'typed.js';
import './TypingText.css'

const TypingText = () => {
  const element = useRef(null)

  useEffect(() => {
    const typed = new Typed (element.current,{
      strings: ["Welcome to WeareFX, creative studio with big ideas",
      "Where beauty and function are crafted together",
      "Working across all media channels & platforms"
    ],
      startDelay: 300,
      typeSpeed: 10,
      backSpeed: 10,
      backDelay: 900,
      loop:true
    });
    return()=>typed.destroy()
  }, [])


    return (
        <div className='typing__text'>
          <span className='typing__text' ref={element}></span>
        </div>
    );
};

export default TypingText;