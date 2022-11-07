import React from 'react'

export default function About(props) {

    let myStyle= {
        color:props.mode==="dark"?"white":"black",
        background: props.mode==="dark"?"#4378897a":"white"
    }

    document.title="TextUtils - About"
    
    return (
        <div className="container" id="about-us" style={myStyle}>
            {/* <title>{props.title}</title> */}
            <h2 id='about-heading'style={{color:props.mode==="dark"?"white":"#57518b"}}>About Us</h2>
            <p id='about-details'>TextUtils is a multi-purpose text utility app. It helps you to convert your text into Uppercase and as well as in Smallercase and also keeping in mind the word and character count of your text.</p>
        </div>
    )
}
