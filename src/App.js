import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const DarkMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#262829';
      document.body.style.color = 'white';
      showAlert("Dark Mode Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled", "success");
    }
  }
  const RedMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#732525';
      document.body.style.color = 'white';
      showAlert("Reddish Mode Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled", "success");
    }
  }
  const GreenMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#3b7523';
      document.body.style.color = 'white';
      showAlert("Greenish Mode Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled", "success");
    }
  }
  const BlueMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1c3c5d';
      document.body.style.color = 'white';
      showAlert("Blueish Mode Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled", "success");
    }
  }

  return (
    <>
    <Router>
      <Navbar mode={mode} DarkMode={DarkMode} RedMode={RedMode} GreenMode={GreenMode} BlueMode={BlueMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <Switch>
              <Route exact path="/about">
                <About/>
              </Route>
              <Route exact path="/">
                <Textform showAlert={showAlert} heading = "Enter Text to Analyze" mode={mode}/>
              </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
