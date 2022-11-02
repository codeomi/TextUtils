import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const[text, setText] = useState(' ')
    // text = "omkar" wrong way to chanege the vlaue of variable
    // setText("omkar")

    //click to change the text to upppercase
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("converted text to capital", "success")
    }

    const handleSmallClick = () =>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("converted text to small case.", "success")

    }

    const handleClearClick = () =>{
        let newText = " "
        setText(newText)
        props.showAlert("Your text has been cleared", "success")

    }


    const handleOnChange = (event)=>{
        console.log("onChange");
        setText(event.target.value)
    }

    const handleCopyClick=()=>{
        let text=  document.getElementById("myBox")
        text.select()
        text.setSelectionRange(0, 9999)
        navigator.clipboard.writtenText(text.value)
    }

    if(text.length===0){
        document.getElementById("wordLength").textContent=0
    }
    


    return (
        <>
        <div className='container'>
            <h1 style={{color:props.mode==="dark"?"white":"#57518b"}}>{props.heading}</h1>
            <div className="mb-3">
                <div className="container">
                <textarea className="form-control" id="myBox" value= {text}  onChange = {handleOnChange} rows="8" style={{backgroundColor:props.mode==="dark"?"grey":"white", color:props.mode==="dark"?"white":"#57518b"}}></textarea>
                </div>
                <div className="btn btn-primary my-3 m-3"  onClick={handleUpClick} >Convert to UpperCase</div>
                <div className="btn btn-primary my-3" onClick= {handleSmallClick}>Convert to SmallerCase</div>
                <div className="btn btn-primary my-3 m-3" onClick={handleClearClick}>Clear</div>
                <div className="btn btn-primary my-3 m-3" onClick={handleCopyClick}>Copy Text</div>
            </div>
        </div>
        <div className="container m-2" style={{color:props.mode==="dark"?"white":"#57518b"}}>
            <h2 style={{color:props.mode==="dark"?"white":"#57518b"}}>Your text summary</h2>
            <p ><b>Your words: </b><span id='wordLength'>{text.split("\n").length}</span></p>
            <p> <b>Your characters: </b> <span>{text.length}</span></p>
            <p ><b>Time to read: </b> {((text.split(" ").length * 0.2)/60).toFixed(2)} minutes</p>
            <h3 style={{color:props.mode==="dark"?"white":"#57518b"}}>Preview : </h3>
            <p style={{color:props.mode==="dark"?"white":"#57518b"}}>{text}</p>
        </div>
        </>
    )
}


TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
}
