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
    }

    const handleSmallClick = () =>{
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleClearClick = () =>{
        let newText = " "
        setText(newText)
    }


    const handleOnChange = (event)=>{
        console.log("onChange");
        setText(event.target.value)
    }


    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <div className="container">
                <textarea className="form-control" id="myBox" value= {text}  onChange = {handleOnChange} rows="8"></textarea>
                </div>
                <div className="btn btn-primary my-3 m-3"  onClick={handleUpClick} >Convert to UpperCase</div>
                <div className="btn btn-primary my-3" onClick={handleSmallClick}>Convert to SmallerCase</div>
                <div className="btn btn-primary my-3 m-3" onClick={handleClearClick}>Clear</div>
            </div>
        </div>
        <div className="container m-2">
            <h2>Your text summary</h2>
            <p><b>Your words: </b><span>{text.split(" ").length}</span></p>
            <p><b>Your characters: </b> <span>{text.length}</span></p>
            <p><b>Time to read: </b> {((text.split(" ").length * 0.2)/60).toFixed(2)} minutes</p>
            <h3>Preview : </h3>
            <p>{text}</p>
        </div>
        </>
    )
}


TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
}
