import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('')

    const onChangeHandler = (event)=>{
        setText(event.target.value);
    }

    const onClickUpperHandler = ()=>{
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const onClickLowerHandler = ()=>{
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const onClickClearHandler = ()=>{
        setText('');
        props.showAlert("Clear TextArea", "success");
    }
    
    return (
        <>
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#35383a':'white', color: props.mode==='dark'?'white':'black'}} value={text} onChange={onChangeHandler} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary my-1" onClick={onClickUpperHandler}>Covert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-success mx-3 my-1" onClick={onClickLowerHandler}>Covert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={onClickClearHandler}>Clear</button>

        </div>
        <div className="container my-3">
            <h2>Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length !== 0 }).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0 }).length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
        </>
    )
}
