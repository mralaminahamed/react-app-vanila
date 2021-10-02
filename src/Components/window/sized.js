import UseWindowWidth from "./UseWindowWidth";

export default function WindowSized(){
    const onSmallScreen = UseWindowWidth(768);

    return (
        <div>
            {onSmallScreen ? 'Small Screen' : 'large Scrren'}
        </div>
    )
}