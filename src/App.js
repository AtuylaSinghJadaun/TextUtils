import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import Alerts from './components/Alerts';
import About from './components/About.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [colorTheme, setColorTheme] = useState({
    name: 'black',
    primary: 'black',
    secondary: '#212529',
    color: 'white'
  });

  const colorThemeChange = (data) => {
    setColorTheme(data);
    // console.log(colorTheme);
  }


  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode==='light') {
      setMode('dark');
    }
    else if(mode==='dark') {
      setMode('light');
    }
  }

  if (mode === 'light') {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
  else if(mode === 'dark'){
    document.body.style.backgroundColor = colorTheme.primary;
    document.body.style.color = colorTheme.color;
    setTimeout(() => {
      document.querySelector(`.${colorTheme.name}`).style.transform = 'scale(120%)';
    }, 1);
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1300);
  }

  document.body.onload = () => {
    showAlert('Welcome to our TextUtils App', 'primary');
  }

  return (
    <Router>
      <Navbar title="TextUTILS" mode={mode} toggleMode={toggleMode} colorThemeChange={colorThemeChange} colorTheme={colorTheme} />
      <Alerts alert={alert}/>
      <Routes>
        <Route path="/" element={<div className="container"><TextForm mode={mode} showAlert={showAlert} colorTheme={colorTheme}/></div>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
