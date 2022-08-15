import React from "react";


class OnSessionLength extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            m: 25,
            show: true,
            min: 0
        }
    }

    incrementation() {
        // e.preventDefault
        this.setState(prevState => {
            if (prevState.m < 50) {
                return {
                    m: prevState.m + 1
                }
            } else {
                return null;
            }
        });
    }

    decrementation = () => {

        this.setState(prevState => {
            if (prevState.m > 0) {
                return {
                    m: prevState.m - 1
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
        this.setState({ m: Event.target.value });
    }

    render() {
        return (<div className="containrerBreak">
            <p>Break Length</p>
            <button onClick={this.decrementation.bind(this)} className="Bl">
                <img src="arrow-down-solid.svg" alt="" width={15} />
            </button>
            {this.state.m}

            <button onClick={this.incrementation.bind(this)} className="Bl">
                <img src="arrow-up-solid.svg" alt="" width={15} />
            </button>
        </div>);
    }
}
export default OnSessionLength 
