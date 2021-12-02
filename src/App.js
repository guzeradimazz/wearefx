import React, { useEffect, useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import MainPage from "./components/MainPage/MainPage";
import './styles/Global.css'

function App() {
  const[isLoading,setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, [])

  // if(isLoading){
  //   let canvas = document.getElementById('overlay');
  //   canvas.classList.add('displayNone')
  //   canvas = document.getElementById('overlay2');
  //   canvas.classList.add('displayNone')
  //   canvas = document.getElementById('overlay3');
  //   canvas.classList.add('displayNone')
  //   return (<Preloader/>)
  // } 

  //   let canvas = document.getElementById('overlay');
  //   canvas.classList.remove('displayNone')
  //   canvas = document.getElementById('overlay2');
  //   canvas.classList.remove('displayNone')
  //   canvas = document.getElementById('overlay3');
  //   canvas.classList.remove('displayNone')
    return (
      <div className='App'>
        {
          <MainPage/>
        }
      </div>
    );

}

export default App;
