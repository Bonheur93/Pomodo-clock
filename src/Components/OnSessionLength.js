import React from "react";


function OnSessionLength(props){
    

    const incrementation = ()=> {
        // e.preventDefault
        console.log(props.minute);
        props.setSession({m: props.minute+1});
    }

    const decrementation = () => {

        if(props.minute !==0){
            props.setSession({m: props.minute-1});
        }
        
        else if(props.minute ===0){
            props.setSession({m: props.minute+0});
        }
        }

    const TogglClick = () => {
        this.setState({
            show: !this.state.show
        });
    }
    const handleChange = (Event) => {
        this.setState({ m: Event.target.value });
    }

        return (<div className="containtSessionLength">
           
           <p>Session Length</p>
           <div className="SessionL">
            
            <button onClick={decrementation} className="Bl">
                <img src="arrow-down-solid.svg" alt="" width={15} />
            </button>
            {props.minute}

            <button onClick={incrementation} className="Bl">
                <img src="arrow-up-solid.svg" alt="" width={15} />
            </button>
           </div>
            
        </div>);
    }

export default OnSessionLength 
