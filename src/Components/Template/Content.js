import Counter from "../HOC/Counter";
import HoverCounter from "../HOC/HoverCounter";
import ThemeContext from '../../contexts/themeContext'
import ClickCounter from "../HOC/ClickCounter";


export default function Content (){
    return (
        <div>
            <Counter>
                {(counter, incrementCount) =>{
                    return <ThemeContext.Consumer>
                        {({ theme, switchTheme })=>(
                        <HoverCounter count={counter} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme}/>
                    )}
                    </ThemeContext.Consumer>
                }}
            </Counter>
            <Counter>
                {(counter, incrementCount) =>{
                    return <ThemeContext.Consumer>
                        {({ theme })=>(
                            <ClickCounter count={counter} incrementCount={incrementCount} theme={theme}/>
                        )}
                    </ThemeContext.Consumer>
                }}
            </Counter>
        </div>
    )
}