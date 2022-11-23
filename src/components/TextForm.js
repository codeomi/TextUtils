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
        navigator.clipboard.writtenText(text)
        document.getSelection().removeAllRanges()
        props.showAlert("Copied to Clipboard", "Success")
    }

    if(text.length===0){
        document.getElementById("wordLength").textContent=0
    }
    


    return (
        <>
        <div className='container'>
            <h2 className="mb-2" style={{color:props.mode==="dark"?"white":"#57518b"}}>{props.heading}</h2>
            <div className="mb-3">
                <div className="container">
                <textarea className="form-control" id="myBox" value= {text}  onChange = {handleOnChange} rows="8" style={{backgroundColor:props.mode==="dark"?"grey":"white", color:props.mode==="dark"?"white":"#57518b"}} name="sitelink"></textarea>
                </div>
                <button disabled = {text.length===0} className="btn btn-primary m-1"  onClick={handleUpClick} >Convert to UpperCase</button>
                <button className="btn btn-primary m-1 " disabled= {text.length===0}onClick= {handleSmallClick}>Convert to LowerCase</button>
                <button className="btn btn-primary m-1" disabled={text.length===0} onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary m-1 " disabled={text.length===0} onClick={handleClearClick}>Clear</button>
            </div>
        </div>
        <div className="container m-2" style={{color:props.mode==="dark"?"white":"#57518b"}}>
            <h2 style={{color:props.mode==="dark"?"white":"#57518b"}}>Your text summary</h2>
            <p ><b>Your words: </b><span id='wordLength'>{text.split(/\s+/).filter((elements)=>{return elements.length!==0}).length}</span></p>
            <p> <b>Your characters: </b> <span>{text.split(" ").filter((elements)=>{return elements.length!==0})!==0?text.length:0}</span></p>
            {/* <p ><b>Time to read: </b> {((text.split(" ").length * 0.2)/60).toFixed(2)} minutes</p> */}
            <p ><b>Time to read: </b> {0.08 * text.split(" ").filter((elements)=>{return elements.length!==0}).length.toFixed(2)} minutes</p>
            <h3 style={{color:props.mode==="dark"?"white":"#57518b"}}>Preview : </h3>
            <p style={{color:props.mode==="dark"?"white":"#57518b"}}>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}


TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
}
