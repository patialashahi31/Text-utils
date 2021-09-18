import React, { useState } from "react";

export default function TextForm() {

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleClearClick = () => {
        
        setText("")
    }
  
    const handleOnChange = (event) => {
       
        setText(event.target.value)
    }
  const [text, setText] = useState("");
  
  return (
      <>
    <div className="my-3">
        <h1> Enter Text</h1>
      <textarea
        class="form-control"
        placeholder="Text here"
        id="myBox"
        rows="8"
        value={text}
        onChange={handleOnChange}
      ></textarea>
      <br />
      <button onClick= {handleUpClick} className="btn btn-primary mx-2">Upper</button>
      <button onClick= {handleLoClick} className="btn btn-success mx-2">Lower</button>
      <button onClick= {handleClearClick} className="btn btn-danger mx-2">Clear</button>
    </div>
    <div className="my-3">
        <h1>Text summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008*text.split(' ').length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
