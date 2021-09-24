import {Component} from "react";

class Form extends Component {
    state = {
        title : 'Test',
        text : 'Just awesome',
        select : 'React',
        isAwesome : true
    }

    handleChange = (e) =>{
        if (e.target.type === 'text'){
            this.setState({
                title : e.target.value,
            });
        } else if(e.target.type === 'textarea'){
            this.setState({
                text : e.target.value,
            });
        } else if(e.target.type === 'select-one'){
            this.setState({
                select : e.target.value,
            });
        } else if(e.target.type === 'checkbox'){
            this.setState({
                isAwesome : e.target.checked,
            });
        } else {
            console.log('Nothing happen')
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)

    }

    render() {
        const {title, text, select, isAwesome} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type='text' placeholder='Enter title' value={title} onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <br/>
                    <textarea value={text} onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <select value={select} onChange={this.handleChange}>
                        <option>React</option>
                        <option>Angular</option>
                    </select>
                    <br/>
                    <br/>
                    <input type='checkbox' checked={isAwesome} onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        );
    }
}

export default Form;