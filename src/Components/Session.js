import React from "react";

function Session(props){
    return(
    <div className="session">
        <p className="">Session</p>
        <p>{props.minute}:{props.seconde}</p>
    </div>
    )
}
export default Session

