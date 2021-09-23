import { Component } from "react";

class Clock extends Component {
    
    state = { date : new Date() , locale : 'bn-BD'};

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

    handleClick = (locale) => {
        this.setState({ locale });
    }

    render(){
        const {date, locale} = this.state;
        const containerAll = document.querySelectorAll('img');
        return (
            <h1 className='container'>
                <span className='text'>
                    {date.toLocaleTimeString(locale)}
                </span>
                <br/>
                <span className='text'>
                    {containerAll.length}
                </span>
                <br/>
                <button type='button' onClick={()=>this.handleClick('en-US')}>CLick Here</button>
            </h1>
        );
    }
}

export default Clock;