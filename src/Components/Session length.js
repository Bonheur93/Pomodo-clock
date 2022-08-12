import React from "react";

function SessionLength() {
    return (

        <div className="containrerBreak">
            <p>Session Length</p>
            <div className="arrow">
                <button className="Bl">
                    <img className="up" src="arrow-up-solid.svg" alt="" />
                </button>
                <p>25</p>
                <button className="Bl">
                    <img className="down" src="arrow-down-solid.svg" alt="" />
                </button>

            </div>
        </div>


    )
}
export default SessionLength;