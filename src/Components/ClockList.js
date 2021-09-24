import Clock from "./Clock";

export default function ClockList({quantities = []}) {

    console.log(quantities);
    quantities.map((value)=>console.log(value));
    return (
        <>
            <div>
                {quantities.map((value) => (
                    <Clock key={value}/>
                ))}
            </div>
            <div>
                {quantities.map((value) => (
                    <Clock key={value}/>
                ))}
            </div>
        </>
    );
}
