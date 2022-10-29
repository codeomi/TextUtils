import React, { useState } from 'react';
import './Appa.css';
// import About from './components/About';
import NavBar from './components/NavBar';
import TextArea from './components/TextForm';



function App() {
  const [mode, setMode] = useState("light")//tells whether dark mode is enabled or not

const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#57518b"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
    }
}

  return (
    <>
      <NavBar title="TextUtils" aboutText="About Us" mode={mode} toggleMode= {toggleMode}/>

      <div className="container my-3" >
        <TextArea heading="Enter the text to analyse" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
