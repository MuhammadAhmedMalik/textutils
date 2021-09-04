import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('')

    const onChangeHandler = (event)=>{
        setText(event.target.value);
    }

    const onClickUpperHandler = ()=>{
        const newText = text.toUpperCase();
        setText(newText);
    }
    const onClickLowerHandler = ()=>{
        const newText = text.toLowerCase();
        setText(newText);
    }
    const onClickClearHandler = ()=>{
        setText('');
    }
    
    return (
        <>
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={onChangeHandler} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={onClickUpperHandler}>Covert to Uppercase</button>
            <button className="btn btn-success mx-3" onClick={onClickLowerHandler}>Covert to Lowercase</button>
            <button className="btn btn-danger mx-3" onClick={onClickClearHandler}>Clear</button>

        </div>
        <div className="container my-3">
            <h2>Text Summary</h2>
            <p>{text.split(' ' || "\n").length} Words and {text.length} Characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
