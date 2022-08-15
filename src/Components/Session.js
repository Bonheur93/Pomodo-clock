import React from "react";

function Session(props){
    return(
    <div className="session">
        <p className="">Session</p>
        <p>{props.minute}:00</p>
    </div>
    )
}
export default Session

