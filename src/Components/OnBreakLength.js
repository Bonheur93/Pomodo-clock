import React from "react"


class OnBreakLength extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 5,
            show: true,
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
        return (<div className="containrerBreak">
                            <p>Break Length</p>
                            <button onClick={this.decrement.bind(this)} className="Bl">
                           <img  src="arrow-down-solid.svg" alt="" width={15}/>
                        </button>
                            {this.state.n} 
                            
                            <button onClick={this.increment.bind(this)} className="Bl">
                           <img  src="arrow-up-solid.svg" alt="" width={15} />
                         </button>
                </div>

        );
    }
}
export default OnBreakLength





