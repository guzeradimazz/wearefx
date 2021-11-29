import React,{ useState,useEffect } from 'react';

const TypingText = (props) => {
    const [state, setState] = useState({typed:''})

    useEffect(() => {
      typeWord(
        props.inputStrings[0],
        [].concat(props.inputStrings)
      );
    }, [])

    function typeWord(word, words) {
      typeWriter(word, words);
    }

    function typeWriter(string, words) {
      if (string.length === 0) {
        words = words.slice(1);
        words[0] && typeWriter(words[0], words);
      } else {
        setState((state) => ({
          typed: state.typed.concat(string[0])
        }));
  
        setTimeout(() => typeWriter(string.slice(1), words), 300);
      }
    }

    return (
        <div className='typing__text'>
            {state.typed}
        </div>
    );
};

export default TypingText;