import { Component } from "react";
import Button from "./Button";

class Clock extends Component {

    constructor(props) {
        super(props);
        const {locale} = this.props;
        this.state = { date : new Date() , locale};
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

    handleClick = (locale) => {
        this.setState({ locale });
    }

    render(){
        const {date, locale} = this.state;
        //const {locale:NextLocale} = this.props;
        return (
            <h1 className='container' >
                <span className='text'>
                    {date.toLocaleTimeString(locale)}
                </span>
                <br/>
                {locale === this.props.locale ? (
                    <Button change={this.handleClick} locale='en-US' show enable={false}/>
                ):(
                    <Button change={this.handleClick} locale={this.props.locale} show={false} enable/>
                )}

            </h1>
        );
    }
}

export default Clock;