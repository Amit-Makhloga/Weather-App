import { useState } from 'react'
import bg from "./assets/bg.jpg"
// import './App.css'

import WeatherApp from './WeatherApp'
import { boxClasses } from '@mui/material';

function App() {
  const divStyle = {
    backgroundImage: `url(${bg})`,
    margin:"0px",
    padding:"0px",
    backgroundSize: 'cover', // Ensures the image covers the entire element
    backgroundPosition: 'center', // Centers the image
    height: '100vh', // Adjust as needed
    width: '100%', // Adjust as needed
  };
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={divStyle}>

      <WeatherApp  />
    </div>
    </>
  )
}

export default App
