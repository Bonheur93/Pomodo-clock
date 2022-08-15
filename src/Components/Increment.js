import React from "react"

class ManualIncrement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 5,
            show: 10,
            min: 0

        }
    }
    increment() {
        // e.preventDefault
        this.setState(prevState => {
            if (prevState.n < 20) {
                return {
                    n: prevState.n + 1
                }
            } else {
                return null;
            }
        });
    }

    decrement = () => {

        this.setState(prevState => {
            if (prevState.n > 0) {
                return {
                    n: prevState.n - 1
                }
            } else {
                return null;
            }

        });
    }

    TogglClick = () => {
        this.setState({
            show: !this.state.show
        });
    }
    handleChange = (Event) => {
        this.setState({ n: Event.target.value });
    }

    render() {
        return (<div className="containrerBreak">{this.state.n} 
                            
                            <button onClick={this.decrement.bind(this)} className="Bl">
        //                     <img className="down" src="arrow-down-solid.svg" alt="" />
        //                 </button><span><p value= {this.state.n} onChange={this.handleChange}></p></span>
                            
                            <button onClick={this.increment.bind(this)} className="Bl">
            //                 <img className="up" src="arrow-up-solid.svg" alt="" />
            //             </button>
                </div>
        // return <div className="arrow">
        //             <button className="Bl">
        //                 <img className="up" src="arrow-up-solid.svg" alt="" />
        //             </button>

        //             <p>5</p>
        //             {/* <button className="Bl">
        //                     <img className="down" src="arrow-down-solid.svg" alt="" />
        //                 </button> */}

        //         </div>

        //     // <div className="containrerBreak">
        //     //     <p>Break Length</p>

        //     // </div>
        );
    }
}
export default ManualIncrement
