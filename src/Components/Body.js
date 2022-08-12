import React from "react";
import BreakLength from "./Breack Length";
import SessionLength from "./Session length";
import Session from "./Session";
import Button from "./Buttons";



function Body() {
    return (
        <body>
            <div className="container">
                <h1>25 + 5 Clock</h1>
                <div className='Length'>
                    <BreakLength />
                    <SessionLength />
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