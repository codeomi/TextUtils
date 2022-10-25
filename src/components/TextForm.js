import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const[text, setText] = useState('Enter text here again.')
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
                <textarea className="form-control" id="myBox" value= {text}  onChange = {handleOnChange} rows="4"></textarea>
                </div>
                <div className="btn btn-primary my-3 m-3"  onClick={handleUpClick} >Convert to UpperCase</div>
                <div className="btn btn-primary my-3" onClick={handleSmallClick}>Convert to SmallerCase</div>
            </div>
        </div>
        <div className="container m-2">
            <h1>Your text summary</h1>
            <p>Your words: <span>{text.split(" ").length}</span></p>
            <p>Your characters: <span>{text.length}</span>
            </p>
        </div>
        </>
    )
}


TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
}
