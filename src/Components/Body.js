import React, { useState } from "react";
import OnSessionLength from "./OnSessionLength"
import Session from "./Session";
import ButtonStart from "./ButtonStart"
import OnBreakLength from "./OnBreakLength"




function Body() {


    const [session, setSession] = useState({
        minute: 25,
        seconde: 59,
        show: true
    })
    const [session1, setSession1] = useState({
        minute: 25,
        seconde: 59,
        show: true
    })

    return (
        <div  className="body">
            <div className="container">
                <h1>25 + 5 Clock</h1>
                <div className='Length'>
                    <OnBreakLength />
                    <OnSessionLength minute={session.minute} session={session} setSession={setSession} setSession1={setSession1}/>

                </div>
                <div className="containerSession">


                    <Session minute={session1.minute} seconde={session1.seconde} />
                </div>
                <div className="buttonsOperation">
                    {/* <Button /> */}
                    <ButtonStart session={session1} setSession={setSession1} />
                </div>

                <br />

                <div className="design">
                    <p>Design and code</p>
                    <p>by</p>
                    <p>Bonheur Authentic</p>
                </div>


            </div>

        </div>
    )
}
export default Body