import React from "react";
import './CustomInput.css'

function CustomInput({value, setRequest}) {
    return(
        <input type="text" value={value} onChange={e => setRequest(e.target.value)}></input>
    );
}

export default CustomInput;