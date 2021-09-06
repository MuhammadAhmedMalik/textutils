import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#262829';
      document.body.style.color = 'white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    {/* <About/> */}
    <Textform heading = "Enter Text to Analyze"/>
    </>
  );
}

export default App;
