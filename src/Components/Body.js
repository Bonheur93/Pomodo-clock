import React, {useState} from "react";
import OnSessionLength from "./OnSessionLength"
import Session from "./Session";
import Button from "./Buttons";
import OnBreakLength from "./OnBreakLength"



function Body() {
    let donnes = 6;
        
    const [session, setSession ] = useState({
            m: 25,
            show: true,
            min: 0
        })
    
    return (
        <body>
            <div className="container">
                <h1>25 + 5 Clock</h1>
                <div className='Length'>
                    <OnBreakLength  />
                    <OnSessionLength u={donnes} minute={session.m} session={session} setSession={setSession} />

                </div>
                <div className="containerSession">


                    <Session minute={session.m}/>
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