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

  // if(isLoading) return (<Preloader/>)
  // else{
    return (
      <div className='App'>
        {
          <MainPage/>
        }
      </div>
    );
  // }
}

export default App;
