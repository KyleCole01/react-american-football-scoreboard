import React, {useState} from "react";
import Timer from "./Timer";

function Popup(props){
console.log(props.time) ;
    return (
        <h1 className="hidden popup">Time Is UP</h1>
    )
}
export default Popup;