// import Clock from './Components/Clock';
//import Images from './Components/Images';
// import Increment from './Components/Increment';
// import Toggle from './Components/Toggle';
//import ClockList from "./Components/ClockList";
//import Form from "./Components/Form";
//import Emoji from "./Components/composetion/Emoji";
//import Text from "./Components/composetion/Text";
//import Bracket from "./Components/composetion/Brackets";
//import ClickCounter from "./Components/HOC/ClickCounter";
//import HoverCounter from "./Components/HOC/HoverCounter";

//import Counter from "./Components/HOC/Counter";
//import ClickCounter from "./Components/HOC/ClickCounter";
//import HoverCounter from "./Components/HOC/HoverCounter";

import Section from "./Components/Template/Section";
import {Component} from "react";
import ThemeContext from './contexts/themeContext'

export default class App extends Component {
    state = {
        theme: 'dark'
    }

    switchTheme = () => {
        this.setState(({theme}) => {
            if (theme === 'dark') {
                return {theme: 'light'}
            }
            return {theme: 'dark'}
        })
    }

    render() {
        const {theme} = this.state;
        return (
            <div className='container'>
                <ThemeContext.Provider value={{theme, switchTheme : this.switchTheme}}>
                    <Section/>
                </ThemeContext.Provider>
            </div>
        )
    }

    //let quantities = [1, 2, 3];
    // return (
    //     <Emoji>
    //       {({addEmoji}) => (
    //           <Bracket>
    //             {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket}/>}
    //           </Bracket>
    //       )}
    //     </Emoji>
    // );
    //<Form key={1}/>
    //<ClockList quantities={quantities} />,
    // <Clock locale='bn-BD' key={Math.random()} />,
    // <Clock locale='en' key={Math.random()}/>,
    // <Clock locale='ar-EG' key={Math.random()} />,
    // <Increment key={Math.random()}  />,
    // <Toggle key={Math.random()} />,
    // <Toggle key={Math.random()} />,
    // <Images />,

}
