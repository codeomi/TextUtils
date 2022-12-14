import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function NavBar(props) {
  // const [modeText, setModeText]= useState("Enable Dark Mode")

  // const textMode=()=>{
  //   if(props.mode==="dark"){
  //     setModeText("Enable Light Mode")
  //   }
  //   else{
  //     setModeText("Enable Dark Mode"  )
  //   }
  // }

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>

            </ul>

                {/* <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                  <input className="form-check-input mx-1" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleGreenMode} />
                  <label className="form-check-label" for="flexSwitchCheckDefault" >Green mode</label>
                </div> */}

                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} on />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" color="{props.mode}">Enable dark mode</label>
                </div>
            </div>
          </div>
      </nav>
    </div>
  )
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
}


//If props are not used in app.js file then use this below given values
//this is the function of default props
NavBar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About text here'
}
