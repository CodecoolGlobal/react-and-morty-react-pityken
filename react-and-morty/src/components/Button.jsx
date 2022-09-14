import React from "react";

export default function Button(props) {
    const text = props.text;
    const showContent = props.showContent;

    return (
        <div className="buttonContainer">
            <button onClick={() => { showContent() }}>{text}</button>
        </div>
    )
}