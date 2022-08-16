import React, { useState } from "react";
import OnSessionLength from "./OnSessionLength"
import Session from "./Session";
import ButtonStart from "./ButtonStart"
import OnBreakLength from "./OnBreakLength"




function Body() {


    const [session, setSession] = useState({
        minute: 25,
        seconde: 60,
        show: true
    })

    return (
        <body>
            <div className="container">
                <h1>25 + 5 Clock</h1>
                <div className='Length'>
                    <OnBreakLength />
                    <OnSessionLength minute={session.minute} session={session} setSession={setSession} />

                </div>
                <div className="containerSession">


                    <Session minute={session.minute} seconde={session.seconde} />
                </div>
                <div className="buttonsOperation">
                    {/* <Button /> */}
                    <ButtonStart session={session} setSession={setSession} />
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