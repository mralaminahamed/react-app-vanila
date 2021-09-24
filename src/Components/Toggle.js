import { Component } from "react";

class Toggle extends Component {
    constructor(props){
        super(props);

        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.deleteButton = this.deleteButton.bind(this);
    }

    handleClick(){
        this.setState(prevState=>({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    deleteButton(e){
        e.preventDefault();
        console.log(this);
    }

    render(){
        return (
            <div className='container'>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>

                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href='#' onClick={this.deleteButton}>
                   Delete Button
                </a>
            </div>
        );
    }
}

export default Toggle;