import { Component } from "react";

class Toggle extends Component {
    constructor(props){
        super(props);

        this.state = { isToogleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState=>({
            isToogleOn: !prevState.isToogleOn
        }));
    }
    
    deleteButton(item){
        console.log(item);
    }

    render(){
        return (
            <div className='container'>
                <button onClick={this.handleClick}>
                    {this.state.isToogleOn ? 'ON' : 'OFF'}
                </button>

                <a href='#' onClick={this.deleteButton(this)}>
                   Delete Button
                </a>
            </div>
        );
    }
}

export default Toggle;