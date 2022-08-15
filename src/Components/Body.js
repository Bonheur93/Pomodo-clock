import React from "react";
import OnSessionLength from "./OnSessionLength"
import Session from "./Session";
import Button from "./Buttons";
import OnBreakLength from "./OnBreakLength"



function Body() {
    return (
        <body>
            <div className="container">
                <h1>25 + 5 Clock</h1>
                <div className='Length'>
                    <OnBreakLength />
                    <OnSessionLength />

                </div>
                <div className="containerSession">


                    <Session />
                </div>
                <div className="buttonsOperation">
                    <Button />
                </div>

                <br />

                <div className="design">
                    <p>Design and code</p>
                    <p>by</p>
                    <p>Bonheur Authentic</p>
                </div>


            </div>

        </body>
    )
}
export default Body