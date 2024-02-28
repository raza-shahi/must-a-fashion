import React, { useState } from "react";

export default function TextForm(props) {
  const HandaleUpClick = () => {
    // console.log("Button clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case.","Success")
  };
  const HandaleLowClick = () => {
    // console.log("Button clicked");
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case.","Success")
  };
  const textClear = () => {
    // console.log("Button clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Cleared text.","Success")
  };

 
  const handalCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copiede to clipboard.","Success")
  };

  const HandaleOnChange = (event) => {
    // console.log("On changed clicked");
    setText(event.target.value);
  };

  const handalExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spacess removed.","Success")
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-1" style={{color:props.mode==='dark'?'white':'black'}}> 
            <h1 >{props.hedding}</h1>
            <div className="mb-3">
          <textarea
            className="form-control"
            onChange={HandaleOnChange}
            value={text}
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode==='dark'?'grey':'white'}}
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={HandaleUpClick}
        >
          Convert to upper case
        </button>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={HandaleLowClick}
        >
          Convert to lower case
        </button>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={textClear}
        >
          Click to clear text
        </button>
        
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={handalCopy}
        >
          Click to copy text
        </button>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={handalExtraSpaces}
        >
          Remove Extra spaces
        </button>
      </div>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
          {" "}
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p> {0.008 * text.split(" ").length} Minuts</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      
    </>
  );
}
