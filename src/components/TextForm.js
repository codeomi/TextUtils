import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const[text, setText] = useState('Enter text here again.')
    // text = "omkar" wrong way to chanege the vlaue of variable
    // setText("omkar")

    //click to change the text to upppercase
    const handleUpClick = ()=>{
        console.log("omkar");
        setText("you have clicked on button")
    }


    const handleOnChange = (event)=>{
        console.log("on\chanfe");
        setText(event.target.value)
    }



    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <div className="container">
                <textarea className="form-control" id="myBox" placeholder={text} onChange = {handleOnChange} rows="8"></textarea>
                </div>
                <div className="btn btn-primary my-3" onClick={handleUpClick} >Convert to UpperCase</div>
            </div>
        </div>
    )
}


TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
}
