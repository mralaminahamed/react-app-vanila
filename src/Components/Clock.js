import { Component } from "react";

class Clock extends Component {
    
    constructor(props){
        super(props);
        this.state = { date : new Date() , locale : 'bn-BD'};
        this.handleClick = this.handleClick.bind(this);
    }

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

    handleClick () {
        this.setState({ locale : 'en-US' });
    }

    render(){
        const {date, locale} = this.state;
        return (
            <h1 className='container'>
                <span className='text'>
                    {date.toLocaleTimeString(locale)}
                </span>
                <button type='button' onClick={this.handleClick}>CLick Here</button>
            </h1>
        );
    }
}

export default Clock;