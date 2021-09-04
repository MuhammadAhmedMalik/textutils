import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState("Enter your content here")

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
    
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={onChangeHandler} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={onClickUpperHandler}>Covert to Uppercase</button>
            
            <button className="btn btn-success" onClick={onClickLowerHandler}>Covert to Lowercase</button>
        </div>
    )
}
