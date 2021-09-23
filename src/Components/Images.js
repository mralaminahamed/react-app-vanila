import { Component } from 'react';
import logo from '../logo.svg';
import sample01 from '../images/sample-01.jpg';
import sample02 from '../images/sample-02.jpg';
import sample03 from '../images/sample-03.jpg';


console.log(logo);

class Images extends Component {
    render(){
        return (
            [
            <img src={logo}/>,
            <img src={sample01}/>,
            <img src={sample02}/>,
            <img src={sample03}/>
        ]
        );
    }
}

export default Images;