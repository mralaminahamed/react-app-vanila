import { Component } from "react";

class Clock extends Component {
    state = { date : new Date() }

    componentDidMount(){
        this.clockTimer = setInterval(()=>{
            this.assignClock();
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }

    assignClock(){
        this.setState({ date : new Date() });
    }

    handleClick(){
        console.log('Button was clicked!!');
    }

    render(){
        return (
            <h1 className='container'>
                <span className='text'>
                    {this.state.date.toLocaleTimeString(this.props.locale)}
                </span>
                <button type='button' onClick={this.handleClick}>CLick Here</button>
            </h1>
        );
    }
}

export default Clock;