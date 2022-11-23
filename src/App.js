import React, { useState } from 'react';
import './Appa.css';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextArea from './components/TextForm';
import About from './components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route
  } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")//tells whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  //this function helps us to show alert msg
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => setAlert(null), 1500)
  }


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#220f30"
      showAlert("Dark mode hs been enabled", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode hs been enabled", "success")
    }
  }


  return (
    <>
      <Router>
        <NavBar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
          <Routes>
            <Route exact path="/about" element={<About mode={mode} onClick={()=>{document.title="TextUtils - About"}}/>}>
            </Route>
            <Route exact path="/" element={<TextArea showAlert={showAlert} heading="Try  TextUtils - Word Counter, Character Counter, Remove extra Spaces" mode={mode} onClick={()=>{document.title="TextUtils - Home"}} />
            }>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
