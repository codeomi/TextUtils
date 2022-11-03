import React, { useState } from 'react';
import './Appa.css';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextArea from './components/TextForm';
import About from './components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")//tells whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)
  const [lightButton, setlightButton] = useState(true)
  const [darkButton, setdarkButton] = useState(false)

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
      document.body.style.backgroundColor = "#57518b"
      showAlert("Dark mode hs been enabled", "success")
      setlightButton(false)
      setdarkButton(true)
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode hs been enabled", "success")
      setlightButton(true)
      setdarkButton(false)
    }
  }

  const toggleGreenMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#0c4224"
      showAlert("Green mode hs been enabled", "success")
      setlightButton(false)
      setdarkButton(true)
      document.title = "TextUtils - Dark mode"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode hs been enabled", "success")
      setlightButton(true)
      setdarkButton(false)
    }
  }

  return (
    <>
      <Router>
        <NavBar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextArea showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />
            }>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
