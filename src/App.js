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


  return (
    <div className='App'>
      {
        isLoading ? <Preloader/>
        : 
        <MainPage
        />
      }
    </div>
  );
}

export default App;
