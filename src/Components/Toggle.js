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

    render(){
        return (
            <div className='container'>
                <button onClick={this.handleClick}>
                    {this.state.isToogleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

export default Toggle;